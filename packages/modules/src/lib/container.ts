import { SIZE } from '../constants';
import { percentage, rem, handleSize, sym } from '../utils';

const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;

/**
 * Module for `positioning`, `overflow` and `visibility` options
 * @example
 * const Component = booleon.div(container);
 * @example
 * ```jsx
 * <Component z_100 op_90 top absolute hidden />
 * ```
 */
export const container = {
  [sym<'z_SIZE'>(`^z_(${SIZE})`)]: (value: string) =>
    `z-index:${handleSize(value)};`,
  [sym<'op_SIZE'>(`^op_(${SIZE})`)]: (value: string) =>
    `opacity:${handleSize(value, percentage)};`,
  [sym<'top_SIZE'>(`^top_(${SIZE})`)]: (value: string) =>
    `top:${handleSize(value, rem)};`,
  [sym<'bottom_SIZE'>(`^bottom_(${SIZE})`)]: (value: string) =>
    `bottom:${handleSize(value, rem)};`,
  [sym<'left_SIZE'>(`^left_(${SIZE})`)]: (value: string) =>
    `left:${handleSize(value, rem)};`,
  [sym<'right_SIZE'>(`^right_(${SIZE})`)]: (value: string) =>
    `right:${handleSize(value, rem)};`,
  z_max: () => `z-index:${MAX_SAFE_INTEGER};`,
  z_auto: () => 'z-index:auto;',
  sc_auto: () => 'overflow:auto;',
  sc_hidden: () => 'overflow:hidden;',
  sc_visible: () => 'overflow:visible;',
  scy_auto: () => 'overflow-y:auto;',
  scy_hidden: () => 'overflow-y:hidden;',
  scy_visible: () => 'overflow-y:visible;',
  scx_auto: () => 'overflow-x:auto;',
  scx_hidden: () => 'overflow-x:hidden;',
  scx_visible: () => 'overflow-x:visible;',
  fixed: () => 'position:fixed;',
  absolute: () => 'position:absolute;',
  relative: () => 'position:relative;',
  sticky: () => 'position:sticky;',
  top: () => 'top:0;',
  right: () => 'right:0;',
  bottom: () => 'bottom:0;',
  left: () => 'left:0;',
  inset: () => 'left:0;top:0;right:0;bottom:0;',
  inset_x: () => 'left:0;right:0;',
  inset_y: () => 'top:0;bottom:0;',
  fit_contain: () => 'object-fit:contain;',
  fit_cover: () => 'object-fit:cover;',
  fit_fill: () => 'object-fit:fill;',
  fit_none: () => 'object-fit:none;',
  hidden: () => 'display:none;',
  visible: () => 'visibility:visible;',
  invisible: () => 'visibility:hidden;',
  noappearance: () => 'appearance:none;',
  rz_none: () => 'resize:none;',
  rz: () => 'resize:both;',
  rzy: () => 'resize:vertical;',
  rzx: () => 'resize:horizontal;',
  content: (value: string) =>
    `content:${typeof value === 'string' ? value : '""'};`,
};
