import { ReducedProps } from '../types';
import { cleanTransformFilter } from './cleanTransformFilter';

export function classCompiler(className: string, reducedProps: ReducedProps) {
  const { keyframe = {}, medias = {}, pseudo = {}, css = '' } = reducedProps;

  const keyframes = Object.values(keyframe).find(Boolean)
    ? Object.keys(keyframe).reduce(
        (acc, name) =>
          (acc += `@keyframes ${name}{${Object.keys(
            keyframe?.[name] ?? {},
          ).reduce(
            (acc, key) => (acc += `${key}{${keyframe?.[name]?.[key]}}`),
            '',
          )}}`),
        '',
      )
    : '';

  const mediaQueries = Object.keys(medias).reduce(
    (acc, key) => (acc += `@media${key}{${className}{${medias[key]}}}`),
    '',
  );

  const pseudoElements = Object.keys(pseudo).reduce(
    (acc, key) => (acc += `${className}${key}{${pseudo[key]}}`),
    '',
  );

  const style = `${className}{${css}}`;

  const classes = style + keyframes + pseudoElements + mediaQueries;

  return cleanTransformFilter(classes);
}
