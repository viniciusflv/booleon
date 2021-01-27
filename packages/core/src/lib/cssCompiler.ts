import { BooleonModule } from '../types';
import { browserPrefixer } from './browserPrefixer';

export function cssCompiler<M extends BooleonModule>(
  key: string,
  value: string | boolean,
  module: M,
) {
  if (!value) return '';
  return browserPrefixer(
    module[key]?.(value) ??
      Object.getOwnPropertySymbols(module).reduce((acc, symbol) => {
        const { regex } =
          /Symbol\((?<regex>.*)\)/g.exec(String(symbol))?.groups ?? {};
        const [, value] = new RegExp(regex).exec(key) ?? [];
        if (value) {
          // @ts-expect-error https://github.com/microsoft/TypeScript/issues/1863
          acc += module[symbol](value);
        }
        return acc;
      }, ''),
  );
}
