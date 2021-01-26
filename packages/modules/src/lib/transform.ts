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
  [sym<'sl_NUMBER'>('sl_(.*)')]: (value: string) =>
    `transform:scale(${handleSize(value)},${handleSize(value)});`,
  [sym<'slx_NUMBER'>('slx_(.*)')]: (value: string) =>
    `transform:scaleX(${handleSize(value)});`,
  [sym<'sly_NUMBER'>('sly_(.*)')]: (value: string) =>
    `transform:scaleY(${handleSize(value)});`,
  [sym<'rt_NUMBER'>('rt_(.*)')]: (value: string) =>
    `transform:rotate(${handleSize(value)});`,
  [sym<'sk_NUMBER'>('sk_(.*)')]: (value: string) =>
    `transform:skew(${handleSize(value)},${handleSize(value)});`,
  [sym<'skx_NUMBER'>('skx_(.*)')]: (value: string) =>
    `transform:skewX(${handleSize(value)});`,
  [sym<'sky_NUMBER'>('sky_(.*)')]: (value: string) =>
    `transform:skewY(${handleSize(value)});`,
  [sym<'tl_NUMBER'>('tl_(.*)')]: (value: string) =>
    `transform:translate(${handleSize(value)},${handleSize(value)});`,
  [sym<'tlx_NUMBER'>('tlx_(.*)')]: (value: string) =>
    `transform:translateX(${handleSize(value)});`,
  [sym<'tly_NUMBER'>('tly_(.*)')]: (value: string) =>
    `transform:translateY(${handleSize(value)});`,
  ori_top: () => 'transform-origin:top;',
  ori_bottom: () => 'transform-origin:bottom;',
  ori_left: () => 'transform-origin:left;',
  ori_right: () => 'transform-origin:right;',
  ori_inherit: () => 'transform-origin:inherit;',
  ori_initial: () => 'transform-origin:initial;',
  ori_unset: () => 'transform-origin:unset;',
};
