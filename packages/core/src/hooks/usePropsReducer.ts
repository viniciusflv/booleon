import { useMemo } from 'react';

import { BooleonModule } from '../types/index';
import { useCssCompiler } from './useCssCompiler';

export function usePropsReducer<P, M extends BooleonModule>(
  props: P,
  module: M,
) {
  const prefixRegex = useMemo(() => /(([A-z]+)__)(.*)/, []);

  return useMemo(
    () =>
      Object.keys(props).reduce((acc, key) => {
        const [, , prefixes, newKey] = prefixRegex?.exec(key) || [];
        return prefixes && newKey
          ? {
              ...acc,
              [prefixes]:
                (acc[prefixes] ?? '') +
                useCssCompiler(newKey, props[key], module),
            }
          : {
              ...acc,
              css: (acc['css'] ?? '') + useCssCompiler(key, props[key], module),
            };
      }, {}),
    [props, module],
  );
}
