import { BooleonModule, Props } from '../types';
import { cleanTransformFilter } from './cleanTransformFilter';
import { cssCompiler } from './cssCompiler';

type Prefixer = {
  id: string;
  key: string;
  value: Props;
  prefixes: Props<string, (arg: Prefixer, wrap?: boolean) => string>;
  recursiveCompiler: (props: Props) => string;
};

type Handler = (...args: any[]) => (arg?: Prefixer, wrap?: boolean) => string;

const classes: Handler = () => ({ id, value, recursiveCompiler }: Prefixer) =>
  `.bl-${id}{${recursiveCompiler(value)}}`;

export const media: Handler = (breakpoint: string) => ({
  value,
  recursiveCompiler,
}: Prefixer) => `@media ${breakpoint}{${recursiveCompiler(value)}}`;

export const theme: Handler = () => ({
  key,
  value,
  recursiveCompiler,
}: Prefixer) => `body[data-theme='${key}'] ${recursiveCompiler(value)}`;

export const pseudo: Handler = (selector: string) => (
  { id, key, value, prefixes, recursiveCompiler }: Prefixer,
  wrap = true,
) => {
  const selectors = key
    ?.split('_')
    ?.reduce(
      (acc: string, k: string) =>
        (acc += prefixes?.[k]?.({} as Prefixer, false)),
      '',
    );
  return wrap
    ? `.bl-${id}${selectors}{${recursiveCompiler(value?.css)}}`
    : selector;
};

export const keyframeSelector: Handler = (selector: string) => () => selector;

export const keyframe: Handler = (selectors) => ({
  key,
  value,
  recursiveCompiler,
}: Prefixer) => {
  const [, name] = key?.split('_');

  const animation = Object.keys(value).reduce((acc, k) => {
    return (acc += `${selectors[k]}{${recursiveCompiler(value?.[k]?.css)}}`);
  }, '');

  return `@keyframes ${name}{${animation}}`;
};

const defaulPrefixes = {
  undefined: () => '',
  css: classes(),
  dark: theme(),
  xs: media('(min-width: 640px)'),
  sm: media('(min-width: 768px)'),
  md: media('(min-width: 1024px)'),
  lg: media('(min-width: 1440px)'),
  xl: media('(min-width: 1920px)'),
  focus: pseudo(':focus'),
  within: pseudo(':focus-within'),
  after: pseudo(':after'),
  before: pseudo(':before'),
  active: pseudo(':active'),
  checked: pseudo(':checked'),
  disabled: pseudo(':disabled'),
  hover: pseudo(':hover'),
  visited: pseudo(':visited'),
  child: pseudo('>*'),
  last: pseudo(':last-child'),
  first: pseudo(':first-child'),
  adjacent: pseudo('~*'),
  sibling: pseudo('+*'),
  odd: pseudo(':nth-child(odd)'),
  even: pseudo(':nth-child(even)'),
  kf: keyframe({
    from: '0%',
    quarter: '25%',
    third: '33%',
    half: '50%',
    x2third: '66%',
    x3quarter: '75%',
    to: '100%',
  }),
};

export function styleCompiler<
  P extends Props<string, (arg?: Prefixer) => string>,
  M extends BooleonModule
>(id: string, composedProps: Props, booleonModules: M, customPrefixes?: P) {
  const prefixes = {
    ...defaulPrefixes,
    ...customPrefixes,
  };
  const recursiveCompiler = (props: Props): string => {
    return Object.keys(props).reduce((acc, key) => {
      const value = props[key];
      if (typeof value === 'object') {
        const handler =
          prefixes[key] ??
          prefixes[`${Object.keys(prefixes).find((k) => key.startsWith(k))}`];
        return (acc += handler({
          id,
          key,
          value,
          prefixes,
          recursiveCompiler,
        }));
      }
      return (acc += cssCompiler(key, value, booleonModules));
    }, '');
  };

  return cleanTransformFilter(recursiveCompiler(composedProps));
}
