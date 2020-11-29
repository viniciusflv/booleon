import { MEDIA_QUERIES, PSEUDO_ELEMENTS } from '../constants';
import { stringHash } from '../lib/stringHash';
import { MediaQueries, Props, PseudoElements } from '../types';

const pseudoMap = (keyPrefix: PseudoElements) => {
  const map = new Map(PSEUDO_ELEMENTS);
  return keyPrefix
    .split('__')
    .reduce((acc, key: PseudoElements) => (acc += map.get(key) ?? ''), '');
};

const mediaMap = (keyPrefix: MediaQueries) => {
  return new Map(MEDIA_QUERIES).get(keyPrefix);
};

const runIfHasValue = (values: any[]) => {
  return values.reduce((acc, [value, cb]) => {
    if (value) acc += cb(value);
    return acc;
  }, '');
};

export function classCompiler(reducedProps: Props<string, string>) {
  const id = stringHash(Object.values(reducedProps).join(''));
  const className = `bl-${id}`;

  const classes = Object.keys(reducedProps).reduce((acc, key) => {
    const css = reducedProps[key];
    const pseudoElements = pseudoMap(key as PseudoElements);
    const breakpoint = mediaMap(key as MediaQueries);
    return (acc += runIfHasValue([
      [
        pseudoElements,
        (pseudoElements: string) => `.${className}${pseudoElements}{${css}}`,
      ],
      [
        breakpoint,
        (breakpoint: string) => `@media${breakpoint}{${className}{${css}}}`,
      ],
      [!(pseudoElements || breakpoint), () => `.${className}{${css}}`],
    ]));
  }, '');

  return [className, classes];
}
