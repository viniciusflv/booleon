import { NUMBER } from '../constants';
import { Shadows, ShadowsInset } from '../types';
import { handleShadow } from '../utils';

/**
 * Module for `shadow` options
 * @example
 * const Component = styledBooleon.div(shadow);
 * @example
 * ```jsx
 * <Component sd_1 sdi_1 />
 * ```
 */
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
