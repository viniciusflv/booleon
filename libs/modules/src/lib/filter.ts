import tokens from '@booleon/tokens';

import { theme } from '../utils/theme';

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
  ...theme(
    'fl_saturate',
    tokens.absolute,
    ($) => `filter:saturate(${Number($) / 100});`,
  ),
  ...theme(
    'fl_brightness',
    tokens.absolute,
    ($) => `filter:brightness(${Number($) / 100});`,
  ),
  ...theme('fl_hue', tokens.rotation, ($) => `filter:hue-rotate(${$});`),
  ...theme('fl_opacity', tokens.percentage, ($) => `filter:opacity(${$});`),
  ...theme('fl_sepia', tokens.percentage, ($) => `filter:sepia(${$});`),
  ...theme('fl_grayscale', tokens.percentage, ($) => `filter:grayscale(${$});`),
  ...theme('fl_contrast', tokens.percentage, ($) => `filter:contrast(${$});`),
  ...theme('fl_invert', tokens.percentage, ($) => `filter:invert(${$});`),
  ...theme('fl_blur', tokens.thickness, ($) => `filter:blur(${$});`),
  ...theme('fl_sd', tokens.drop_shadow, ($) => `filter:${$};`),
};
