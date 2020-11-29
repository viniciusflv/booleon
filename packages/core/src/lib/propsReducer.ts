import { Props, BooleonModule } from '../types';
import { cssCompiler } from './cssCompiler';

export function propsReducer<P extends Props, M extends BooleonModule>(
  props: P,
  module: M,
): Props<string, string> {
  const prefixRegex = /(([A-z]+)__)(.*)/;

  return Object.keys(props).reduce((acc, key) => {
    const [, , prefixes, newKey] = prefixRegex?.exec(key) || [];
    return prefixes && newKey
      ? {
          ...acc,
          [prefixes]:
            (acc[prefixes] ?? '') + cssCompiler(newKey, props[key], module),
        }
      : {
          ...acc,
          css: (acc['css'] ?? '') + cssCompiler(key, props[key], module),
        };
  }, {});
}
