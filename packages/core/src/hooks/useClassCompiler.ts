import { useCallback, useMemo } from 'react';

import { MEDIA_QUERIES, PSEUDO_ELEMENTS } from '../constants';
import { MediaQueries, PseudoElements } from '../types';
import { useFastHash } from './useFastHash';

export function useClassCompiler(reducedProps: any) {
  const id = useFastHash(Object.values(reducedProps).join(''));
  const className = `bl-${id}`;

  const pseudoMap = useCallback((keyPrefix: PseudoElements) => {
    const map = new Map(PSEUDO_ELEMENTS);
    return keyPrefix
      .split('__')
      .reduce((acc, key: PseudoElements) => (acc += map.get(key) ?? ''), '');
  }, []);

  const mediaMap = useCallback((keyPrefix: MediaQueries) => {
    return new Map(MEDIA_QUERIES).get(keyPrefix);
  }, []);

  const runIfHasValue = useCallback((values: any[]) => {
    return values.reduce((acc, [value, cb]) => {
      if (value) acc += cb(value);
      return acc;
    }, '');
  }, []);

  const classes = useMemo(
    () =>
      Object.keys(reducedProps).reduce((acc, key) => {
        const css = reducedProps[key];
        const pseudoElements = pseudoMap(key as PseudoElements);
        const breakpoint = mediaMap(key as MediaQueries);
        return (acc += runIfHasValue([
          [
            pseudoElements,
            (pseudoElements: string) =>
              `.${className}${pseudoElements}{${css}}`,
          ],
          [
            breakpoint,
            (breakpoint: string) => `@media${breakpoint}{${className}{${css}}}`,
          ],
          [!(pseudoElements || breakpoint), () => `.${className}{${css}}`],
        ]));
      }, ''),
    [reducedProps],
  );

  return [className, classes];
}
