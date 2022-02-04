import type { Props, BooleonModule, Selectors } from '../types';
import { selectorsDefault } from './selectorsDefault';
import { stripSymbolValue } from './stripSymbolValue';

export function sortProps<
  P extends Props,
  M extends BooleonModule,
  S extends Selectors,
>(props: P, booleonModule: M, customSelectors: S = {} as S) {
  const selectors = { ...selectorsDefault, ...customSelectors };

  return Object.keys(props).reduce<[Props, Props]>(
    ([booleonProps, forwardProps], key) => {
      const value = props[key];
      if (
        booleonModule[key] ??
        (Object.keys(selectors).some((selector) =>
          key.startsWith(`${selector}_`),
        ) ||
          Object.getOwnPropertySymbols(booleonModule).some((symbol) =>
            key.startsWith(stripSymbolValue(symbol)),
          ))
      ) {
        booleonProps[key] = value;
      } else {
        forwardProps[key] = value;
      }
      return [booleonProps, forwardProps];
    },
    [{}, {}],
  );
}
