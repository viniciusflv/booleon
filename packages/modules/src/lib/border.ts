import { HEX_COLOR, LOWER_CASE, NUMBER } from '../constants';
import {
  bs_BorderStyle,
  bts_BorderStyle,
  bbs_BorderStyle,
  bls_BorderStyle,
  brs_BorderStyle,
  bxs_BorderStyle,
  bys_BorderStyle,
} from '../types';
import { rem } from '../utils';

/**
 * Module for `border` options
 * @example
 * const Component = styledBooleon.div(border);
 * @example
 * ```jsx
 * <Component bc_fff b_circular />
 * ```
 */
export const border = [
  [
    ['bc_' as 'bc_HEX', `(${HEX_COLOR})`],
    (value: string) => `border-color:#${value};`,
  ],
  [
    ['btc_' as 'btc_HEX', `(${HEX_COLOR})`],
    (value: string) => `border-top-color:#${value};`,
  ],
  [
    ['bbc_' as 'bbc_HEX', `(${HEX_COLOR})`],
    (value: string) => `border-bottom-color:#${value};`,
  ],
  [
    ['blc_' as 'blc_HEX', `(${HEX_COLOR})`],
    (value: string) => `border-left-color:#${value};`,
  ],
  [
    ['brc_' as 'brc_HEX', `(${HEX_COLOR})`],
    (value: string) => `border-right-color:#${value};`,
  ],
  [
    ['bxc_' as 'bxc_HEX', `(${HEX_COLOR})`],
    (value: string) =>
      `border-right-color:#${value};border-left-color:#${value};`,
  ],
  [
    ['byc_' as 'byc_HEX', `(${HEX_COLOR})`],
    (value: string) =>
      `border-top-color:#${value};border-bottom-color:#${value};`,
  ],
  [
    ['bs_' as bs_BorderStyle, `(${LOWER_CASE})`],
    (value: string) => `border-style:${value};`,
  ],
  [
    ['bts_' as bts_BorderStyle, `(${LOWER_CASE})`],
    (value: string) => `border-top-style:${value};`,
  ],
  [
    ['bbs_' as bbs_BorderStyle, `(${LOWER_CASE})`],
    (value: string) => `border-bottom-style:${value};`,
  ],
  [
    ['bls_' as bls_BorderStyle, `(${LOWER_CASE})`],
    (value: string) => `border-left-style:${value};`,
  ],
  [
    ['brs_' as brs_BorderStyle, `(${LOWER_CASE})`],
    (value: string) => `border-right-style:${value};`,
  ],
  [
    ['bxs_' as bxs_BorderStyle, `(${LOWER_CASE})`],
    (value: string) =>
      `border-left-style:${value};border-right-style:${value};`,
  ],
  [
    ['bys_' as bys_BorderStyle, `(${LOWER_CASE})`],
    (value: string) =>
      `border-top-style:${value};border-bottom-style:${value};`,
  ],
  [
    ['bw_' as 'bw_NUMBER', `(${NUMBER})`],
    (value: string) => `border-width:${rem(value)};`,
  ],
  [
    ['btw_' as 'btw_NUMBER', `(${NUMBER})`],
    (value: string) => `border-top-width:${rem(value)};`,
  ],
  [
    ['bbw_' as 'bbw_NUMBER', `(${NUMBER})`],
    (value: string) => `border-bottom-width:${rem(value)};`,
  ],
  [
    ['blw_' as 'blw_NUMBER', `(${NUMBER})`],
    (value: string) => `border-left-width:${rem(value)};`,
  ],
  [
    ['brw_' as 'brw_NUMBER', `(${NUMBER})`],
    (value: string) => `border-right-width:${rem(value)};`,
  ],
  [
    ['bxw_' as 'bxw_NUMBER', `(${NUMBER})`],
    (value: string) =>
      `border-left-width:${rem(value)};border-right-width:${rem(value)};`,
  ],
  [
    ['byw_' as 'byw_NUMBER', `(${NUMBER})`],
    (value: string) =>
      `border-top-width:${rem(value)};border-bottom-width:${rem(value)};`,
  ],
  ['b_collapse', () => 'border-collapse:collapse;'],
  ['b_separate', () => 'border-collapse:separate;'],
  ['b_none', () => 'border:none;'],
  ['bt_none', () => 'border-top:none;'],
  ['bb_none', () => 'border-bottom:none;'],
  ['bl_none', () => 'border-left:none;'],
  ['br_none', () => 'border-right:none;'],
  ['bx_none', () => 'border-right:none;border-left:none;'],
  ['by_none', () => 'border-top:none;border-bottom:none;'],
  ['b_circular', () => 'border-radius:100px;'],
  ['btr_circular', () => 'border-top-right-radius:100px;'],
  ['btl_circular', () => 'border-top-left-radius:100px;'],
  ['bbr_circular', () => 'border-bottom-right-radius:100px;'],
  ['bbl_circular', () => 'border-bottom-left-radius:100px;'],
  [
    'br_circular',
    () => 'border-top-right-radius:100px;border-bottom-right-radius:100px;',
  ],
  [
    'bl_circular',
    () => 'border-top-left-radius:100px;border-bottom-left-radius:100px;',
  ],
  [
    'bb_circular',
    () => 'border-bottom-right-radius:100px;border-bottom-left-radius:100px;',
  ],
  [
    'bt_circular',
    () => 'border-top-right-radius:100px;border-top-left-radius:100px;',
  ],
  ['b_rounded', () => 'border-radius:5rem;'],
  ['btr_rounded', () => 'border-top-right-radius:5rem;'],
  ['btl_rounded', () => 'border-top-left-radius:5rem;'],
  ['bbr_rounded', () => 'border-bottom-right-radius:5rem;'],
  ['bbl_rounded', () => 'border-bottom-left-radius:5rem;'],
  [
    'br_rounded',
    () => 'border-top-right-radius:5rem;border-bottom-right-radius:5rem;',
  ],
  [
    'bl_rounded',
    () => 'border-top-left-radius:5rem;border-bottom-left-radius:5rem;',
  ],
  [
    'bb_rounded',
    () => 'border-bottom-right-radius:5rem;border-bottom-left-radius:5rem;',
  ],
  [
    'bt_rounded',
    () => 'border-top-right-radius:5rem;border-top-left-radius:5rem;',
  ],
  ['b_edge', () => 'border-radius:.5rem;'],
  ['btr_edge', () => 'border-top-right-radius:.5rem;'],
  ['btl_edge', () => 'border-top-left-radius:.5rem;'],
  ['bbr_edge', () => 'border-bottom-right-radius:.5rem;'],
  ['bbl_edge', () => 'border-bottom-left-radius:.5rem;'],
  [
    'br_edge',
    () => 'border-top-right-radius:.5rem;border-bottom-right-radius:.5rem;',
  ],
  [
    'bl_edge',
    () => 'border-top-left-radius:.5rem;border-bottom-left-radius:.5rem;',
  ],
  [
    'bb_edge',
    () => 'border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;',
  ],
  [
    'bt_edge',
    () => 'border-top-right-radius:.5rem;border-top-left-radius:.5rem;',
  ],
] as const;
