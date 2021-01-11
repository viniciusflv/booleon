import { NUMBER } from '../constants';
import { percentage, rem } from '../utils';

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
export const container = [
  [['z_' as 'z_NUMBER', `(${NUMBER})`], (value: string) => `z-index:${value};`],
  [
    ['op_' as 'op_NUMBER', `(${NUMBER})`],
    (value: string) => `opacity:${percentage(value)};`,
  ],
  [
    ['top_' as 'top_NUMBER', `(${NUMBER})`],
    (value: string) => `top:${rem(value)};`,
  ],
  [
    ['bottom_' as 'bottom_NUMBER', `(${NUMBER})`],
    (value: string) => `bottom:${rem(value)};`,
  ],
  [
    ['left_' as 'left_NUMBER', `(${NUMBER})`],
    (value: string) => `left:${rem(value)};`,
  ],
  [
    ['right_' as 'right_NUMBER', `(${NUMBER})`],
    (value: string) => `right:${rem(value)};`,
  ],
  [
    ['top_neg_' as 'top_neg_NUMBER', `(${NUMBER})`],
    (value: string) => `top:-${rem(value)};`,
  ],
  [
    ['bottom_neg_' as 'bottom_neg_NUMBER', `(${NUMBER})`],
    (value: string) => `bottom:-${rem(value)};`,
  ],
  [
    ['left_neg_' as 'left_neg_NUMBER', `(${NUMBER})`],
    (value: string) => `left:-${rem(value)};`,
  ],
  [
    ['right_neg_' as 'right_neg_NUMBER', `(${NUMBER})`],
    (value: string) => `right:-${rem(value)};`,
  ],
  ['z_max', () => `z-index:${MAX_SAFE_INTEGER};`],
  ['z_neg', () => 'z-index:-1;'],
  ['z_auto', () => 'z-index:auto;'],
  ['sc_auto', () => 'overflow:auto;'],
  ['sc_hidden', () => 'overflow:hidden;'],
  ['sc_visible', () => 'overflow:visible;'],
  ['scy_auto', () => 'overflow-y:auto;'],
  ['scy_hidden', () => 'overflow-y:hidden;'],
  ['scy_visible', () => 'overflow-y:visible;'],
  ['scx_auto', () => 'overflow-x:auto;'],
  ['scx_hidden', () => 'overflow-x:hidden;'],
  ['scx_visible', () => 'overflow-x:visible;'],
  ['fixed', () => 'position:fixed;'],
  ['absolute', () => 'position:absolute;'],
  ['relative', () => 'position:relative;'],
  ['sticky', () => 'position:sticky;'],
  ['top', () => 'top:0;'],
  ['top_full', () => 'top:100%;'],
  ['top_neg', () => 'top:-100%;'],
  ['right', () => 'right:0;'],
  ['right_full', () => 'right:100%;'],
  ['right_neg', () => 'right:-100%;'],
  ['bottom', () => 'bottom:0;'],
  ['bottom_full', () => 'bottom:100%;'],
  ['bottom_neg', () => 'bottom:-100%;'],
  ['left', () => 'left:0;'],
  ['left_full', () => 'left:100%;'],
  ['left_neg', () => 'left:-100%;'],
  ['inset', () => 'left:0;top:0;right:0;bottom:0;'],
  ['inset_x', () => 'left:0;right:0;'],
  ['inset_y', () => 'top:0;bottom:0;'],
  ['fit_contain', () => 'object-fit:contain;'],
  ['fit_cover', () => 'object-fit:cover;'],
  ['fit_fill', () => 'object-fit:fill;'],
  ['fit_none', () => 'object-fit:none;'],
  ['hidden', () => 'display:none;'],
  ['visible', () => 'visibility:visible;'],
  ['invisible', () => 'visibility:hidden;'],
  ['noappearance', () => 'appearance:none;'],
  ['rz_none', () => 'resize:none;'],
  ['rz', () => 'resize:both;'],
  ['rzy', () => 'resize:vertical;'],
  ['rzx', () => 'resize:horizontal;'],
  [
    'content',
    (value: string) => `content:${typeof value === 'string' ? value : '""'};`,
  ],
] as const;
