import { FlattenInterpolation } from 'styled-components';

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

const regex = /(\w+)__(.*?)\w+/g;

function injectPropsContext<T = any>(
  prop: any,
  interpolation: FlattenInterpolation<T>,
) {
  return interpolation
    .map((rule) => (typeof rule === 'function' ? rule(prop) || '' : rule))
    .join('');
}

type Options =
  | 'after__PROP'
  | 'before__PROP'
  | 'active__PROP'
  | 'checked__PROP'
  | 'disabled__PROP'
  | 'focus__PROP'
  | 'hover__PROP'
  | 'visited__PROP'
  | 'xs__PROP'
  | 'sm__PROP'
  | 'md__PROP'
  | 'lg__PROP'
  | 'xl__PROP'

export type Prefixed<T> = T &
  ({ [key in Options]?: boolean } | { [id: string]: boolean });

export function handlePrefix<T = {}>(interpolation: FlattenInterpolation<T>) {
  return (props: T) => {
    const prefixedProps = Object.keys(props).filter((key) => key.match(regex));
    const reduced = prefixedProps.reduce(
      (acc, prefixedProp) => {
        const [prefix, prop] = prefixedProp.split('__');
        const value = props[prefixedProp];
        switch (prefix) {
        case 'after': acc.after += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'before': acc.before += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'active': acc.active += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'checked': acc.checked += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'disabled': acc.disabled += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'focus': acc.focus += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'hover': acc.hover += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'visited': acc.visited += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'xs': acc.xs += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'sm': acc.sm += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'md': acc.md += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'lg': acc.lg += injectPropsContext<T>({ [prop]: value }, interpolation); break;
        case 'xl': acc.xl += injectPropsContext<T>({ [prop]: value }, interpolation); break;
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
    const styles = Object.keys(reduced).reduce((acc, key) => {
      if (pseudo.includes(key)) {
        acc += reduced[key].length ? `:${key} { ${reduced[key]} }` : '';
      }
      switch (key) {
      case 'xs': acc += reduced[key].length ? `@media (min-width: 640px) { ${reduced[key]} }` : ''; break;
      case 'sm': acc += reduced[key].length ? `@media (min-width: 768px) { ${reduced[key]} }` : ''; break;
      case 'md': acc += reduced[key].length ? `@media (min-width: 1024px) { ${reduced[key]} }` : ''; break;
      case 'lg': acc += reduced[key].length ? `@media (min-width: 1440px) { ${reduced[key]} }` : ''; break;
      case 'xl': acc += reduced[key].length ? `@media (min-width: 1920px) { ${reduced[key]} }` : ''; break;
      }
      return acc;
    }, '');
    return styles;
  };
}
