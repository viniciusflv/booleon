import styled, { FlattenInterpolation, css } from 'styled-components';

const viewCss = css<any>`
  ${({ bc_red }) => bc_red && 'background-color: red;'}
  ${({ c_red }) => c_red && 'color: red;'}
`;

function injectPropsContext<T = any>(
  prop: any,
  interpolation: FlattenInterpolation<T>,
) {
  return interpolation
    .map((rule: any) => (typeof rule === 'function' ? rule(prop) || '' : rule))
    .join('');
}

const regex = /(\w+)__(.*?)\w+/g;
const pseudo = [
  'after',
  'before',
  'active',
  'checked',
  'disabled',
  'focus',
  'hover',
  'visited',
];
const dynamic = (props: any) => {
  const prefixedProps = Object.keys(props).filter((key) => key.match(regex));
  console.log(prefixedProps);
  const reduced = prefixedProps.reduce(
    (acc, prefixedProp) => {
      const [prefix, prop] = prefixedProp.split('__');
      const value = props[prefixedProp];
      switch (prefix) {
      case 'after': acc.after += injectPropsContext({[prop]: value}, viewCss); break;
      case 'before': acc.before +=  injectPropsContext({[prop]: value}, viewCss); break;
      case 'active': acc.active +=  injectPropsContext({[prop]: value}, viewCss); break;
      case 'checked': acc.checked += injectPropsContext({[prop]: value}, viewCss); break;
      case 'disabled': acc.disabled += injectPropsContext({[prop]: value}, viewCss); break;
      case 'focus': acc.focus += injectPropsContext({[prop]: value}, viewCss); break;
      case 'hover': acc.hover += injectPropsContext({[prop]: value}, viewCss); break;
      case 'visited': acc.visited += injectPropsContext({[prop]: value}, viewCss); break;
      case 'xs': acc.xs += injectPropsContext({[prop]: value}, viewCss); break;
      case 'sm': acc.sm += injectPropsContext({[prop]: value}, viewCss); break;
      case 'md': acc.md += injectPropsContext({[prop]: value}, viewCss); break;
      case 'lg': acc.lg += injectPropsContext({[prop]: value}, viewCss); break;
      case 'xl': acc.xl += injectPropsContext({[prop]: value}, viewCss); break;
      }
      return acc;
    },
    {
      after: '',
      before: '',
      active: '',
      checked: '',
      disabled: '',
      focus: '',
      hover: '',
      visited: '',
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
  );
  console.log(reduced);
  const styles = Object.keys(reduced).reduce((acc, key) => {
    if (pseudo.includes(key)) {
      acc += reduced[key].length 
        ? `:${key} { ${reduced[key]} }`
        : '';
    }
    switch (key) {
    case 'xs': acc += reduced[key].length
      ? `@media and screen (min-width: 640px) { ${reduced[key]} }`
      : ''; break;
    case 'sm': acc += reduced[key].length
      ? `@media and screen (min-width: 768px) { ${reduced[key]} }`
      : ''; break;
    case 'md': acc += reduced[key].length
      ? `@media and screen (min-width: 1024px) { ${reduced[key]} }`
      : ''; break;
    case 'lg': acc += reduced[key].length
      ? `@media and screen (min-width: 1440px) { ${reduced[key]} }`
      : ''; break;
    case 'xl': acc += reduced[key].length
      ? `@media and screen (min-width: 1920px) { ${reduced[key]} }`
      : ''; break;
    }
    return acc;
  }, '');
  return styles;
};

export const ViewStyle = styled.div<any>`
  ${viewCss}
  ${dynamic}
`;
