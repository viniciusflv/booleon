import tokens from '@booleon/tokens';

import { theme } from '../utils/theme';

/**
 * Module for `transform` options
 * @example
 * const Component = booleon.div(transform);
 * @example
 * ```jsx
 * <Component
 *  sl_10
 *  rt_10
 *  sk_10
 *  tl_10
 *  ori_top
 * />
 * ```
 */
export const transform = {
  ...theme('tf_tl', tokens.sizing, ($) => `transform:translate(${$},${$});`),
  ...theme('tf_tlx', tokens.sizing, ($) => `transform:translateX(${$});`),
  ...theme('tf_tly', tokens.sizing, ($) => `transform:translateY(${$});`),
  ...theme('tf_sl', tokens.relative, ($) => `transform:scale(${$},${$});`),
  ...theme('tf_slx', tokens.relative, ($) => `transform:scaleX(${$});`),
  ...theme('tf_sly', tokens.relative, ($) => `transform:scaleY(${$});`),
  ...theme('fl_hue', tokens.rotation, ($) => `transform:rotate(${$});`),
  ...theme('tf_sk', tokens.rotation, ($) => `transform:skew(${$},${$});`),
  ...theme('tf_skx', tokens.rotation, ($) => `transform:skewX(${$});`),
  ...theme('tf_sky', tokens.rotation, ($) => `transform:skewY(${$});`),
  tf_ori_top: () => 'transform-origin:top;',
  tf_ori_bottom: () => 'transform-origin:bottom;',
  tf_ori_left: () => 'transform-origin:left;',
  tf_ori_right: () => 'transform-origin:right;',
  tf_ori_top_left: () => 'transform-origin:top left;',
  tf_ori_top_right: () => 'transform-origin:top right;',
  tf_ori_bottom_left: () => 'transform-origin:bottom left;',
  tf_ori_bottom_right: () => 'transform-origin:bottom right;',
};
