import { PrefixHandler, PrefixHandlerArg, Props } from '../types';

const classes = (): PrefixHandler => ({
  className,
  value,
  recursiveCompiler,
}) => `.${className}{${recursiveCompiler(value)}}`;

const media = (breakpoint: string): PrefixHandler => ({
  value,
  recursiveCompiler,
}) => `@media ${breakpoint}{${recursiveCompiler(value)}}`;

const theme = (): PrefixHandler => ({ key, value, recursiveCompiler }) =>
  `body[data-theme="${key}"] ${recursiveCompiler(value)}`;

const pseudo = (selector: string): PrefixHandler => (
  { className, key, value, prefixes, recursiveCompiler },
  wrap = true,
) => {
  const selectors = key
    ?.split('_')
    ?.reduce(
      (acc: string, k: string) =>
        (acc += prefixes?.[k]?.({} as PrefixHandlerArg, false)),
      '',
    );
  return wrap
    ? `.${className}${selectors}{${recursiveCompiler(value?.css)}}`
    : selector;
};

const keyframe = <S extends Props>(selectors: S): PrefixHandler => ({
  key,
  value,
  recursiveCompiler,
}) => {
  const [, name] = key?.split('_');

  const animation = Object.keys(value).reduce((acc, k) => {
    return (acc += `${selectors[k]}{${recursiveCompiler(value?.[k]?.css)}}`);
  }, '');

  return `@keyframes ${name}{${animation}}`;
};

export const prefixerHandlers = {
  classes,
  media,
  theme,
  pseudo,
  keyframe,
};
