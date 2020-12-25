import { NUMBER } from '../constants';
import { Shadows, ShadowsInset } from '../types';
import { handleShadow } from '../utils';

export const shadow = [
  [
    ['sd_' as Shadows, `(${NUMBER})`],
    (value: string) => `box-shadow:${handleShadow(Number(value))};`,
  ],
  [
    ['sdi_' as ShadowsInset, `(${NUMBER})`],
    (value: string) => `box-shadow:${handleShadow(Number(value), true)};`,
  ],
] as const;
