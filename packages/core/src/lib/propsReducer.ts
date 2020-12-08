import { Props, BooleonModule } from '../types';
import { cssCompiler } from './cssCompiler';

export function propsReducer<P extends Props, M extends BooleonModule>(
  props: P,
  module: M,
): Props<string, string> {
  const prefixRegex = /((.*)__)(.*)/;

  return Object.keys(props).reduce((acc, key) => {
    const [, , prefixes, newKey] = prefixRegex?.exec(key) || [];
    if (key.match(/(from|to)__/)) {
      const selector = prefixes.split('__')[0];
      return {
        ...acc,
        kf:
          (acc['kf'] ?? '') +
          `${
            isNaN(Number(selector)) ? selector : `${selector}%`
          } {${cssCompiler(newKey, props[key], module)}}`,
      };
    }
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
