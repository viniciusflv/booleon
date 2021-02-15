import { SIZE } from '../constants';
import { percentage, handleShadow, sym, handleSize } from '../utils';

/**
 * Module for `filter` options
 * @example
 * const Component = booleon.div(filter);
 * @example
 * ```jsx
 * <Component ft_invert_100$ />
 * ```
 */
export const filter = {
  [sym<'fl_blur_SIZE'>(`fl_blur_(${SIZE})`)]: (value: string) =>
    `filter:blur(${handleSize(value, percentage)});`,
  [sym<'fl_brightness_SIZE'>(`fl_brightness_(${SIZE})`)]: (value: string) =>
    `filter:brightness(${handleSize(value, percentage)});`,
  [sym<'fl_contrast_SIZE'>(`fl_contrast_(${SIZE})`)]: (value: string) =>
    `filter:contrast(${handleSize(value, percentage)});`,
  [sym<'fl_grayscale_SIZE'>(`fl_grayscale_(${SIZE})`)]: (value: string) =>
    `filter:grayscale(${handleSize(value, percentage)});`,
  [sym<'fl_hue_SIZE'>(`fl_hue_(${SIZE})`)]: (value: string) =>
    `filter:hue-rotate(${handleSize(value, percentage)});`,
  [sym<'fl_opacity_SIZE'>(`fl_opacity_(${SIZE})`)]: (value: string) =>
    `filter:opacity(${handleSize(value, percentage)});`,
  [sym<'fl_saturate_SIZE'>(`fl_saturate_(${SIZE})`)]: (value: string) =>
    `filter:saturate(${handleSize(value, percentage)});`,
  [sym<'fl_sepia_SIZE'>(`fl_sepia_(${SIZE})`)]: (value: string) =>
    `filter:sepia(${handleSize(value, percentage)});`,
  fl_sd_1: () => `filter:${handleShadow(Number(1), false, true)};`,
  fl_sd_2: () => `filter:${handleShadow(Number(2), false, true)};`,
  fl_sd_3: () => `filter:${handleShadow(Number(3), false, true)};`,
  fl_sd_4: () => `filter:${handleShadow(Number(4), false, true)};`,
  fl_sd_6: () => `filter:${handleShadow(Number(6), false, true)};`,
  fl_sd_8: () => `filter:${handleShadow(Number(8), false, true)};`,
  fl_sd_9: () => `filter:${handleShadow(Number(9), false, true)};`,
  fl_sd_12: () => `filter:${handleShadow(Number(12), false, true)};`,
  fl_sd_16: () => `filter:${handleShadow(Number(16), false, true)};`,
  fl_sd_24: () => `filter:${handleShadow(Number(24), false, true)};`,
  fl_invert: () => 'filter:invert(100%);',
};
