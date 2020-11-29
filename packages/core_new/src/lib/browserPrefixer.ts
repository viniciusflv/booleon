enum CSSPrefixFlags {
  '-webkit-' = 1 << 0,
  '-moz-' = 1 << 1,
  '-ms-' = 1 << 2,
}

const cssPropertyAliases = new Map([
  ['align-self', '-ms-grid-row-align'],
  ['color-adjust', '-webkit-print-color-adjust'],
  ['column-gap', 'grid-column-gap'],
  ['gap', 'grid-gap'],
  ['grid-template-columns', '-ms-grid-columns'],
  ['grid-template-rows', '-ms-grid-rows'],
  ['justify-self', '-ms-grid-column-align'],
  ['margin-inline-end', '-webkit-margin-end'],
  ['margin-inline-start', '-webkit-margin-start'],
  ['overflow-wrap', 'word-wrap'],
  ['padding-inline-end', '-webkit-padding-end'],
  ['padding-inline-start', '-webkit-padding-start'],
  ['row-gap', 'grid-row-gap'],
  ['scroll-margin-bottom', 'scroll-snap-margin-bottom'],
  ['scroll-margin-left', 'scroll-snap-margin-left'],
  ['scroll-margin-right', 'scroll-snap-margin-right'],
  ['scroll-margin-top', 'scroll-snap-margin-top'],
  ['scroll-margin', 'scroll-snap-margin'],
  ['text-combine-upright', '-ms-text-combine-horizontal'],
]);

export function cssPropertyAlias(property: string): string | undefined {
  return cssPropertyAliases.get(property);
}

export function cssPropertyPrefixFlags(property: string): number {
  const matches = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|(?:mask(?:$|-[ispro]|-cl)))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(
    property,
  );

  if (!matches) return 0;

  if (matches[1]) return CSSPrefixFlags['-webkit-'];
  if (matches[2]) return CSSPrefixFlags['-moz-'];
  if (matches[3]) return CSSPrefixFlags['-moz-'] | CSSPrefixFlags['-webkit-'];
  else return CSSPrefixFlags['-ms-'] | CSSPrefixFlags['-webkit-'];
}

export function cssValuePrefixFlags(property: string, value: string): number {
  const matches = /^(?:(pos)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(
    property,
  );

  if (!matches) return 0;

  if (matches[1]) {
    // position: "sticky"
    return /^sti/i.test(value) ? CSSPrefixFlags['-webkit-'] : 0;
  } else if (matches[2]) {
    // background-image: "image-set(…)"
    return /^image-/i.test(value) ? CSSPrefixFlags['-webkit-'] : 0;
  } else if (matches[3]) {
    // (max-|min-)?(width|inline-size|height|block-size): "min-content" | "max-content" | "fit-content"
    return value[3] === '-' ? CSSPrefixFlags['-moz-'] : 0;
  } else {
    // display: "grid" | "inline-grid"
    return /^(inline-)?grid$/i.test(value) ? CSSPrefixFlags['-ms-'] : 0;
  }
}

function styleDeclaration(property = '', value = '') {
  let cssText = '';

  /* Resolve aliases, e.g. `gap` -> `grid-gap` */
  const propertyAlias = cssPropertyAlias(property);
  if (propertyAlias) cssText += `${propertyAlias}:${value};`;

  /* Prefix properties, e.g. `backdrop-filter` -> `-webkit-backdrop-filter` */
  const propertyFlags = cssPropertyPrefixFlags(property);
  if (propertyFlags & 0b001) cssText += `-webkit-${property}:${value};`;
  if (propertyFlags & 0b010) cssText += `-moz-${property}:${value};`;
  if (propertyFlags & 0b100) cssText += `-ms-${property}:${value};`;

  /* Prefix values, e.g. `position: "sticky"` -> `position: "-webkit-sticky"` */
  /* Notice that flags don't overlap and property prefixing isn't needed here */
  const valueFlags = cssValuePrefixFlags(property, value);
  if (valueFlags & 0b001) cssText += `${property}:-webkit-${value};`;
  else if (valueFlags & 0b010) cssText += `${property}:-moz-${value};`;
  else if (valueFlags & 0b100) cssText += `${property}:-ms-${value};`;

  /* Include the standardized declaration last */
  /* https://css-tricks.com/ordering-css3-properties/ */
  cssText += `${property}:${value};`;

  return cssText;
}

function getAttrValue(str: string) {
  const cssPropRegex = /(?<attr>.*):(?<value>.*);/;
  const { attr, value } = cssPropRegex.exec(str)?.groups || {};
  return [attr, value];
}

export function browserPrefixer(...str: string[]) {
  if (str.map(Boolean).includes(false)) return '';
  return str.length < 2
    ? styleDeclaration(...getAttrValue(str[0]))
    : styleDeclaration(...str);
}
