import { BooleonModule } from '../types';
import { useBrowserPrefixer } from './useBrowserPrefixer';

export function useCssCompiler<M extends BooleonModule>(
  key: string,
  value: string | boolean,
  module: M,
) {
  if (!value) return '';

  function regexIndexer(key: string, idx: string[], cb: M[number][1]) {
    const rgx = new RegExp(`^${idx.join('')}`);
    const match = rgx.exec(key);
    return match ? cb(match[1].replace(/_/g, ' ')) : '';
  }

  function strIndexer(
    key: string,
    value: string | boolean,
    idx: string,
    cb: M[number][1],
  ) {
    return key === idx ? cb(value) : '';
  }

  return module.reduce((acc, [idx, cb]) => {
    acc += useBrowserPrefixer(
      idx instanceof Array
        ? regexIndexer(key, idx, cb)
        : strIndexer(key, value, idx as string, cb),
    );
    return acc;
  }, '');
}
