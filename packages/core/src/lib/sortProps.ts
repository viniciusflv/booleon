import type { Props, BooleonModule, Attachments } from '../types';
import { attachmentsDefault } from './attachmentsDefault';
import { stripSymbolValue } from './stripSymbolValue';

export function sortProps<
  P extends Props,
  M extends BooleonModule,
  A extends Attachments,
>(props: P, module: M, attachmentsCustom: A = {} as A): [Props, Props] {
  const attachments = { ...attachmentsDefault, ...attachmentsCustom };

  return Object.keys(props).reduce(
    ([booleonProps, forwardProps], key) => {
      const value = props[key];
      if (
        module[key] ??
        (Object.keys(attachments).some((attachment) =>
          key.startsWith(attachment),
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
