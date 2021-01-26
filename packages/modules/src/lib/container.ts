import { percentage } from '../utils';
import { handleSize } from '../utils/handleSize';
import { sym } from '../utils/sym';

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
  [sym<'z_NUMBER'>('z_(.*)')]: (value: string) => `z-index:${value};`,
  [sym<'op_NUMBER'>('op_(.*)')]: (value: string) =>
    `opacity:${percentage(value)};`,
  [sym<'top_NUMBER'>('top_(.*)')]: (value: string) =>
    `top:${handleSize(value)};`,
  [sym<'bottom_NUMBER'>('bottom_(.*)')]: (value: string) =>
    `bottom:${handleSize(value)};`,
  [sym<'left_NUMBER'>('left_(.*)')]: (value: string) =>
    `left:${handleSize(value)};`,
  [sym<'right_NUMBER'>('right_(.*)')]: (value: string) =>
    `right:${handleSize(value)};`,
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
  content: () => (value: string) =>
    `content:${typeof value === 'string' ? value : '""'};`,
};
