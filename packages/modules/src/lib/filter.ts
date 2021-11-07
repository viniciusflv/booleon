import { handleShadow, percentage, sym } from '../utils';

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
  [sym('fl_blur_$')]: ($: string) => `filter:blur(${$});`,
  [sym('fl_contrast_$')]: ($: string) => `filter:contrast(${$});`,
  [sym('fl_grayscale_$')]: ($: string) => `filter:grayscale(${$});`,
  [sym('fl_hue_$')]: ($: string) => `filter:hue-rotate(${$});`,
  [sym('fl_opacity_$')]: ($: string) => `filter:opacity(${$});`,
  [sym('fl_saturate_$')]: ($: string) => `filter:saturate(${percentage($)});`,
  [sym('fl_brightness_$')]: ($: string) =>
    `filter:brightness(${percentage($)});`,
  [sym('fl_sepia_$')]: ($: string) => `filter:sepia(${$});`,
  fl_sd_1: () => `filter:${handleShadow(1, false, true)};`,
  fl_sd_2: () => `filter:${handleShadow(2, false, true)};`,
  fl_sd_3: () => `filter:${handleShadow(3, false, true)};`,
  fl_sd_4: () => `filter:${handleShadow(4, false, true)};`,
  fl_sd_6: () => `filter:${handleShadow(6, false, true)};`,
  fl_sd_8: () => `filter:${handleShadow(8, false, true)};`,
  fl_sd_9: () => `filter:${handleShadow(9, false, true)};`,
  fl_sd_12: () => `filter:${handleShadow(12, false, true)};`,
  fl_sd_16: () => `filter:${handleShadow(16, false, true)};`,
  fl_sd_24: () => `filter:${handleShadow(24, false, true)};`,
  fl_invert: () => 'filter:invert(100%);',
};
