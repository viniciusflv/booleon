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
  [sym<'fl_sd_SIZE'>(`fl_sd_(${SIZE})`)]: (value: string) =>
    `filter:${handleShadow(Number(value), false, true)};`,
  fl_invert: () => 'filter:invert(100%);',
};
