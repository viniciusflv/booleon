import { stringHash } from '../lib/stringHash';
import { ReducedProps } from '../types';

export function classCompiler(reducedProps: ReducedProps) {
  const id = stringHash(Object.values(reducedProps).join(''));
  const className = `bl-${id}`;
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

  const classes = keyframes + mediaQueries + pseudoElements + style;

  return [className, classes];
}
