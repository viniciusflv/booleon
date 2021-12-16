import {
  BooleonModule,
  Selectors,
  Props,
  SelectorHandler,
  WithToken,
  BooleonOptions,
} from '../types';
import { cleanTransformFilter } from './cleanTransformFilter';
import { cssCompiler } from './cssCompiler';
import { selectorsDefault } from './selectorsDefault';

export function styleCompiler<
  M extends BooleonModule,
  S extends Selectors,
  T extends Props,
>(
  className: string,
  composedProps: Props,
  booleonModules: WithToken<M, T>,
  options?: BooleonOptions<S, T>,
) {
  const selectors: Selectors = {
    ...selectorsDefault,
    ...options?.selectors,
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
      return (acc += cssCompiler(key, value, booleonModules, options?.tokens));
    }, '');
  };

  return cleanTransformFilter(recursiveCompiler(composedProps));
}
