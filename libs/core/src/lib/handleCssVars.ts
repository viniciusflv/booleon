export function handleCssVars(value: string) {
  return value?.startsWith('var')
    ? `var(${value.replace(/var|_/g, '-')})`
    : value;
}
