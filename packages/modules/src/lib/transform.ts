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
  [sym<'sl_SIZE'>(`^sl_(${SIZE})`)]: (value: string) =>
    `transform:scale(${handleSize(value, percentage)},${handleSize(
      value,
      percentage,
    )});`,
  [sym<'slx_SIZE'>(`^slx_(${SIZE})`)]: (value: string) =>
    `transform:scaleX(${handleSize(value, percentage)});`,
  [sym<'sly_SIZE'>(`^sly_(${SIZE})`)]: (value: string) =>
    `transform:scaleY(${handleSize(value, percentage)});`,
  [sym<'rt_SIZE'>(`^rt_(${SIZE})`)]: (value: string) =>
    `transform:rotate(${handleSize(value)});`,
  [sym<'sk_SIZE'>(`^sk_(${SIZE})`)]: (value: string) =>
    `transform:skew(${handleSize(value)},${handleSize(value)});`,
  [sym<'skx_SIZE'>(`^skx_(${SIZE})`)]: (value: string) =>
    `transform:skewX(${handleSize(value)});`,
  [sym<'sky_SIZE'>(`^sky_(${SIZE})`)]: (value: string) =>
    `transform:skewY(${handleSize(value)});`,
  [sym<'tl_SIZE'>(`^tl_(${SIZE})`)]: (value: string) =>
    `transform:translate(${handleSize(value)},${handleSize(value)});`,
  [sym<'tlx_SIZE'>(`^tlx_(${SIZE})`)]: (value: string) =>
    `transform:translateX(${handleSize(value)});`,
  [sym<'tly_SIZE'>(`^tly_(${SIZE})`)]: (value: string) =>
    `transform:translateY(${handleSize(value)});`,
  [sym<'ori_VALUE'>(`^ori_((${SIZE}|${LOWER_CASE}).*)`)]: (value: string) =>
    `transform-origin:${value.replace(/_/g, ' ')};`,
};
