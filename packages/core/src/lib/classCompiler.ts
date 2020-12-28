import { ReducedProps } from '../types';

export function classCompiler(className: string, reducedProps: ReducedProps) {
  const { keyframe, medias = {}, pseudo = {}, css = '' } = reducedProps;

  const keyframes = keyframe
    ? `@keyframes ${className}{${Object.keys(keyframe).reduce(
        (acc, key) => (acc += `${key}{${keyframe[key]}}`),
        '',
      )}}`
    : '';

  const mediaQueries = Object.keys(medias).reduce(
    (acc, key) => (acc += `@media${key}{.${className}{${medias[key]}}}`),
    '',
  );

  const pseudoElements = Object.keys(pseudo).reduce(
    (acc, key) => (acc += `.${className}${key}{${pseudo[key]}}`),
    '',
  );

  const style = `.${className}{${css}}`;

  const classes = style + keyframes + pseudoElements + mediaQueries;

  return classes;
}
