import type {
  SelectorHandler,
  SelectorContext,
  SelectorKey,
  Props,
} from '../types';

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
  (selector: SelectorKey): SelectorHandler =>
  (ctx, wrap = true) => {
    let close: number;

    const compiledSelectors = ctx?.key
      ?.split('_')
      ?.reduce((acc: string, key: string, i) => {
        const selectorKey = ctx?.selectors?.[key]?.(
          {} as SelectorContext,
          false,
        );

        if (typeof selectorKey === 'function') {
          close = i + 1;
          return (acc += `${selectorKey(ctx)}(`);
        } else if (i === close) {
          return (acc += `${selectorKey ?? `.${key}`})`);
        }

        return (acc += selectorKey);
      }, '');

    return wrap
      ? `.${ctx?.className}${compiledSelectors}{${ctx?.recursiveCompiler(
          ctx?.value?.css ?? {},
        )}}`
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
