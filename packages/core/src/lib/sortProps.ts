import type { Props, BooleonModule, Selectors } from '../types';
import { selectorsDefault } from './selectorsDefault';
import { stripSymbolValue } from './stripSymbolValue';

export function sortProps<
  P extends Props,
  M extends BooleonModule,
  S extends Selectors,
>(props: P, module: M, selectorsCustom: S = {} as S): [Props, Props] {
  const selectors = { ...selectorsDefault, ...selectorsCustom };

  return Object.keys(props).reduce(
    ([booleonProps, forwardProps], key) => {
      const value = props[key];
      if (
        module[key] ??
        (Object.keys(selectors).some((selector) =>
          key.startsWith(`${selector}_`),
        ) ||
          Object.getOwnPropertySymbols(module).some((symbol) =>
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
