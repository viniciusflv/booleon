import { theme } from '@booleon/core';
import {
  drop_shadow,
  percentage,
  relative,
  rotation,
  thickness,
} from '@booleon/tokens';

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
  ...theme('fl_saturate', relative, ($) => `filter:saturate(${$});`),
  ...theme('fl_brightness', relative, ($) => `filter:brightness(${$});`),
  ...theme('fl_hue', rotation, ($) => `filter:hue-rotate(${$});`),
  ...theme('fl_opacity', percentage, ($) => `filter:opacity(${$});`),
  ...theme('fl_sepia', percentage, ($) => `filter:sepia(${$});`),
  ...theme('fl_grayscale', percentage, ($) => `filter:grayscale(${$});`),
  ...theme('fl_contrast', percentage, ($) => `filter:contrast(${$});`),
  ...theme('fl_invert', percentage, ($) => `filter:invert(${$});`),
  ...theme('fl_blur', thickness, ($) => `filter:blur(${$});`),
  ...theme('fl_sd', drop_shadow, ($) => `filter:${$};`),
};
