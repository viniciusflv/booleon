import { LOWER_CASE, SIZE } from '../constants';
import { percentage } from '../utils';
import { handleSize } from '../utils/handleSize';
import { sym } from '../utils/sym';

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
  [sym<'tf_sl_SIZE'>(`^tf_sl_(${SIZE})`)]: (value: string) =>
    `transform:scale(${handleSize(value, percentage)},${handleSize(
      value,
      percentage,
    )});`,
  [sym<'tf_slx_SIZE'>(`^tf_slx_(${SIZE})`)]: (value: string) =>
    `transform:scaleX(${handleSize(value, percentage)});`,
  [sym<'tf_sly_SIZE'>(`^tf_sly_(${SIZE})`)]: (value: string) =>
    `transform:scaleY(${handleSize(value, percentage)});`,
  [sym<'tf_rt_SIZE'>(`^tf_rt_(${SIZE})`)]: (value: string) =>
    `transform:rotate(${handleSize(value)});`,
  [sym<'tf_sk_SIZE'>(`^tf_sk_(${SIZE})`)]: (value: string) =>
    `transform:skew(${handleSize(value)},${handleSize(value)});`,
  [sym<'tf_skx_SIZE'>(`^tf_skx_(${SIZE})`)]: (value: string) =>
    `transform:skewX(${handleSize(value)});`,
  [sym<'tf_sky_SIZE'>(`^tf_sky_(${SIZE})`)]: (value: string) =>
    `transform:skewY(${handleSize(value)});`,
  [sym<'tf_tl_SIZE'>(`^tf_tl_(${SIZE})`)]: (value: string) =>
    `transform:translate(${handleSize(value)},${handleSize(value)});`,
  [sym<'tf_tlx_SIZE'>(`^tf_tlx_(${SIZE})`)]: (value: string) =>
    `transform:translateX(${handleSize(value)});`,
  [sym<'tf_tly_SIZE'>(`^tf_tly_(${SIZE})`)]: (value: string) =>
    `transform:translateY(${handleSize(value)});`,
  [sym<'tf_ori_VALUE'>(`^tf_ori_((${SIZE}|${LOWER_CASE}).*)`)]: (
    value: string,
  ) => `transform-origin:${value.replace(/_/g, ' ')};`,
};
