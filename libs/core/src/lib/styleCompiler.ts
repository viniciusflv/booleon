import {
  BooleonModule,
  BooleonOptions,
  Props,
  SelectorContext,
  Selectors,
  WithToken,
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
      const selectorContext: SelectorContext = {
        key,
        value,
        selectors,
        className,
        recursiveCompiler,
      };
      if (typeof value === 'object') {
        const handler =
          selectors?.[key] ??
          selectors?.[
            `${Object.keys(selectors).find((k) => key.startsWith(k))}`
          ];

        return (acc += handler?.(selectorContext) ?? '');
      }
      return (acc += cssCompiler(
        selectorContext,
        booleonModules,
        options?.tokens,
      ));
    }, '');
  };

  return cleanTransformFilter(recursiveCompiler(composedProps));
}
