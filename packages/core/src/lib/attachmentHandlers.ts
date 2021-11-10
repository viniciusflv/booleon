import { AttachmentHandler, AttachmentContext, Props } from '../types';

const classes = (): AttachmentHandler => ({
  className,
  value,
  recursiveCompiler,
}) => `.${className}{${recursiveCompiler(value)}}`;

const media = (breakpoint: string): AttachmentHandler => ({
  value,
  recursiveCompiler,
}) => `@media ${breakpoint}{${recursiveCompiler(value)}}`;

const theme = (): AttachmentHandler => ({ key, value, recursiveCompiler }) =>
  recursiveCompiler(value).replace(/\.bl/g, `body[data-theme="${key}"] .bl`);

const pseudo = (selector: string): AttachmentHandler => (
  { className, key, value, attachments, recursiveCompiler },
  wrap = true,
) => {
  const selectors = key
    ?.split('_')
    ?.reduce(
      (acc: string, k: string) =>
        (acc += attachments?.[k]?.({} as AttachmentContext, false)),
      '',
    );
  return wrap
    ? `.${className}${selectors}{${recursiveCompiler(value?.css)}}`
    : selector;
};

const keyframe = <S extends Props>(selectors: S): AttachmentHandler => ({
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

const important = (): AttachmentHandler => ({ value, recursiveCompiler }) =>
  recursiveCompiler(value).replace(/;/g, ' !important;');

export const attach = {
  classes,
  media,
  theme,
  pseudo,
  keyframe,
  important,
};
