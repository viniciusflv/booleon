import type { BooleonModule } from '../types';
import { browserPrefixer } from './browserPrefixer';
import { handleCssVars } from './handleCssVars';
import { stripSymbolValue } from './stripSymbolValue';

export const rootPixelEm = (value: any) => {
  if (String(value).endsWith('rxm')) {
    const strippedValue = Number(value.replace('rxm', ''));
    return isNaN(strippedValue) ? value : strippedValue * 0.0625 + 'rem';
  }
  return value;
};

export function cssCompiler<M extends BooleonModule>(
  key: string,
  value: string | boolean,
  booleonModule: M,
) {
  return value
    ? browserPrefixer(
        booleonModule[key]?.(value) ??
          Object.getOwnPropertySymbols(booleonModule).reduce((acc, symbol) => {
            const symKey = stripSymbolValue(symbol);
            if (key.startsWith(symKey)) {
              const symValue = key
                .replace(symKey, '')
                .replace('neg_', '-')
                .replace('$', '%');

              acc += booleonModule[symbol]?.(
                rootPixelEm(value === true ? handleCssVars(symValue) : value),
              );
            }
            return acc;
          }, ''),
      )
    : '';
}
