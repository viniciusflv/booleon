import { BooleonModule, Selectors, Props, SelectorHandler } from '../types';
import { cleanTransformFilter } from './cleanTransformFilter';
import { cssCompiler } from './cssCompiler';
import { selectorsDefault } from './selectorsDefault';

export function styleCompiler<S extends Selectors, M extends BooleonModule>(
  className: string,
  composedProps: Props,
  booleonModules: M,
  customSelectors?: S,
) {
  const selectors: Selectors = {
    ...selectorsDefault,
    ...customSelectors,
  };
  const recursiveCompiler = (props: Props): string => {
    return Object.keys(props).reduce((acc, key) => {
      const value = props[key];
      if (typeof value === 'object') {
        const handler: SelectorHandler =
          selectors[key] ??
          selectors[`${Object.keys(selectors).find((k) => key.startsWith(k))}`];
        return (acc += handler({
          key,
          value,
          selectors,
          className,
          recursiveCompiler,
        }));
      }
      return (acc += cssCompiler(key, value, booleonModules));
    }, '');
  };

  return cleanTransformFilter(recursiveCompiler(composedProps));
}
