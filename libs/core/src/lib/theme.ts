import type { ThemedModule } from '../types';

export function theme<K extends string, T extends Record<string, any>>(
  key: K,
  token: T,
  cb: ($: string) => string,
) {
  return Object.keys(token).reduce(
    (acc, k) => ({ ...acc, [`${key}_${k}`]: () => cb(token[k]) }),
    {} as ThemedModule<K, T>,
  );
}
