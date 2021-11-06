import type { BooleonModule } from '../types';
import { browserPrefixer } from './browserPrefixer';
import { stripSymbolValue } from './stripSymbolValue';

export function cssCompiler<M extends BooleonModule>(
  key: string,
  value: string | boolean,
  module: M,
) {
  return value
    ? browserPrefixer(
        module[key]?.(value) ??
          Object.getOwnPropertySymbols(module).reduce((acc, symbol) => {
            const value = key.replace(stripSymbolValue(symbol), '');
            if (value) {
              acc += module[symbol]?.(value);
            }
            return acc;
          }, ''),
      )
    : '';
}
