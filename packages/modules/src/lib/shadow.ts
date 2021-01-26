import { handleShadow } from '../utils';

/**
 * Module for `shadow` options
 * @example
 * const Component = booleon.div(shadow);
 * @example
 * ```jsx
 * <Component sd_1 sdi_1 />
 * ```
 */
export const shadow = {
  sd_1: () => `box-shadow:${handleShadow(Number(1))};`,
  sd_2: () => `box-shadow:${handleShadow(Number(2))};`,
  sd_3: () => `box-shadow:${handleShadow(Number(3))};`,
  sd_4: () => `box-shadow:${handleShadow(Number(4))};`,
  sd_6: () => `box-shadow:${handleShadow(Number(6))};`,
  sd_8: () => `box-shadow:${handleShadow(Number(8))};`,
  sd_9: () => `box-shadow:${handleShadow(Number(9))};`,
  sd_12: () => `box-shadow:${handleShadow(Number(12))};`,
  sd_16: () => `box-shadow:${handleShadow(Number(16))};`,
  sd_24: () => `box-shadow:${handleShadow(Number(24))};`,
  sdi_1: () => `box-shadow:${handleShadow(Number(1), true)};`,
  sdi_2: () => `box-shadow:${handleShadow(Number(2), true)};`,
  sdi_3: () => `box-shadow:${handleShadow(Number(3), true)};`,
  sdi_4: () => `box-shadow:${handleShadow(Number(4), true)};`,
  sdi_6: () => `box-shadow:${handleShadow(Number(6), true)};`,
  sdi_8: () => `box-shadow:${handleShadow(Number(8), true)};`,
  sdi_9: () => `box-shadow:${handleShadow(Number(9), true)};`,
  sdi_12: () => `box-shadow:${handleShadow(Number(12), true)};`,
  sdi_16: () => `box-shadow:${handleShadow(Number(16), true)};`,
  sdi_24: () => `box-shadow:${handleShadow(Number(24), true)};`,
};
