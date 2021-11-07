import type { BooleonModule } from '../types';
import { browserPrefixer } from './browserPrefixer';
import { handleCssVars } from './handleCssVars';
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
            const symKey = stripSymbolValue(symbol);
            if (key.startsWith(symKey)) {
              const value = key
                .replace(symKey, '')
                .replace('neg_', '-')
                .replace('$', '%');

              acc += module[symbol]?.(handleCssVars(value));
            }
            return acc;
          }, ''),
      )
    : '';
}
