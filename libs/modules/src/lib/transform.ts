import { theme } from '@booleon/core';
import { relative, rotation, sizes } from '@booleon/tokens';

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
  ...theme('tf_tl', sizes, ($) => `transform:translate(${$},${$});`),
  ...theme('tf_tlx', sizes, ($) => `transform:translateX(${$});`),
  ...theme('tf_tly', sizes, ($) => `transform:translateY(${$});`),
  ...theme('tf_sl', relative, ($) => `transform:scale(${$},${$});`),
  ...theme('tf_slx', relative, ($) => `transform:scaleX(${$});`),
  ...theme('tf_sly', relative, ($) => `transform:scaleY(${$});`),
  ...theme('fl_hue', rotation, ($) => `transform:rotate(${$});`),
  ...theme('tf_sk', rotation, ($) => `transform:skew(${$},${$});`),
  ...theme('tf_skx', rotation, ($) => `transform:skewX(${$});`),
  ...theme('tf_sky', rotation, ($) => `transform:skewY(${$});`),
  tf_ori_top: () => 'transform-origin:top;',
  tf_ori_bottom: () => 'transform-origin:bottom;',
  tf_ori_left: () => 'transform-origin:left;',
  tf_ori_right: () => 'transform-origin:right;',
  tf_ori_top_left: () => 'transform-origin:top left;',
  tf_ori_top_right: () => 'transform-origin:top right;',
  tf_ori_bottom_left: () => 'transform-origin:bottom left;',
  tf_ori_bottom_right: () => 'transform-origin:bottom right;',
};
