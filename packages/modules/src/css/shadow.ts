import { NUMBER } from '../constants';
import { Shadows } from '../types';
import { handleShadow } from '../utils/handleShadow';

export const shadow = [
  [
    ['sd_' as `sd_${Shadows}`, `${NUMBER}`],
    (value: string) => `box-shadow:${handleShadow(Number(value))};`,
  ],
  [
    ['sdi_' as `sdi_${Shadows}`, `${NUMBER}`],
    (value: string) => `box-shadow:${handleShadow(Number(value), true)};`,
  ],
] as const;
