import { BooleonModule, Tuple, BooleonCallback } from '../types';
import { browserPrefixer } from './browserPrefixer';

export function cssCompiler<M extends BooleonModule>(
  key: string,
  value: string | boolean,
  module: M,
) {
  if (!value) return '';

  const recursiveCallback = ([callback, m]: readonly [
    BooleonCallback,
    BooleonModule,
  ]) => callback(cssCompiler(key, value, m));

  function regexIndexer(
    key: string,
    idx: Tuple<string>,
    cb: M[number][1],
  ): string {
    const rgx = new RegExp(`^${idx.join('')}`);
    const match = rgx.exec(key);
    try {
      return match
        ? cb instanceof Array
          ? recursiveCallback(cb as readonly [BooleonCallback, BooleonModule])
          : (cb as BooleonCallback)(match[1].replace(/_/g, ' '))
        : '';
    } catch (error) {
      console.log(key, idx, match);
      return '';
    }
  }

  function strIndexer(
    key: string,
    value: string | boolean,
    idx: string,
    cb: M[number][1],
  ): string {
    return key === idx
      ? cb instanceof Array
        ? recursiveCallback(cb as readonly [BooleonCallback, BooleonModule])
        : (cb as BooleonCallback)(value)
      : '';
  }

  return module.reduce((acc, [idx, cb]) => {
    return (acc += browserPrefixer(
      idx instanceof Array
        ? regexIndexer(key, idx, cb)
        : strIndexer(key, value, idx as string, cb),
    ));
  }, '');
}
