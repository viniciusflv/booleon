import { SelectorHandler, SelectorContext, Props } from '../types';

const classes =
  (): SelectorHandler =>
  ({ className, value, recursiveCompiler }) =>
    `.${className}{${recursiveCompiler(value)}}`;

const media =
  (breakpoint: string): SelectorHandler =>
  ({ value, recursiveCompiler }) =>
    `@media ${breakpoint}{${recursiveCompiler(value)}}`;

const theme =
  (): SelectorHandler =>
  ({ key, value, recursiveCompiler }) =>
    recursiveCompiler(value).replace(/\.bl/g, `body[data-theme="${key}"] .bl`);

const pseudo =
  (selector: string): SelectorHandler =>
  ({ className, key, value, selectors, recursiveCompiler }, wrap = true) => {
    const compiledSelectors = key
      ?.split('_')
      ?.reduce(
        (acc: string, k: string) =>
          (acc += selectors?.[k]?.({} as SelectorContext, false)),
        '',
      );
    return wrap
      ? `.${className}${compiledSelectors}{${recursiveCompiler(value?.css)}}`
      : selector;
  };

const keyframe =
  <S extends Props>(selectors: S): SelectorHandler =>
  ({ key, value, recursiveCompiler }) => {
    const [, name] = key?.split('_');

    const animation = Object.keys(value).reduce((acc, k) => {
      return (acc += `${selectors[k]}{${recursiveCompiler(value?.[k]?.css)}}`);
    }, '');

    return `@keyframes ${name}{${animation}}`;
  };

const important =
  (): SelectorHandler =>
  ({ value, recursiveCompiler }) =>
    recursiveCompiler(value).replace(/;/g, ' !important;');

export const selector = {
  classes,
  media,
  theme,
  pseudo,
  keyframe,
  important,
};
