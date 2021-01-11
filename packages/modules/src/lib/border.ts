import { COLOR, LOWER_CASE, NUMBER } from '../constants';
import {
  bs_BorderStyle,
  bts_BorderStyle,
  bbs_BorderStyle,
  bls_BorderStyle,
  brs_BorderStyle,
  bxs_BorderStyle,
  bys_BorderStyle,
} from '../types';
import { rem, handleColor } from '../utils';

/**
 * Module for `border` options
 * @example
 * const Component = booleon.div(border);
 * @example
 * ```jsx
 * <Component bc_fff b_circular />
 * ```
 */
export const border = [
  [
    [
      'bc_' as 'bc_HEX' | 'bc_RED_GREEN_BLUE' | 'bc_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => `border-color:${handleColor(value)};`,
  ],
  [
    [
      'btc_' as 'btc_HEX' | 'btc_RED_GREEN_BLUE' | 'btc_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => `border-top-color:${handleColor(value)};`,
  ],
  [
    [
      'bbc_' as 'bbc_HEX' | 'bbc_RED_GREEN_BLUE' | 'bbc_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => `border-bottom-color:${handleColor(value)};`,
  ],
  [
    [
      'blc_' as 'blc_HEX' | 'blc_RED_GREEN_BLUE' | 'blc_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => `border-left-color:${handleColor(value)};`,
  ],
  [
    [
      'brc_' as 'brc_HEX' | 'brc_RED_GREEN_BLUE' | 'brc_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => `border-right-color:${handleColor(value)};`,
  ],
  [
    [
      'bxc_' as 'bxc_HEX' | 'bxc_RED_GREEN_BLUE' | 'bxc_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) =>
      `border-right-color:${handleColor(value)};border-left-color:${handleColor(
        value,
      )};`,
  ],
  [
    [
      'byc_' as 'byc_HEX' | 'byc_RED_GREEN_BLUE' | 'byc_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) =>
      `border-top-color:${handleColor(value)};border-bottom-color:${handleColor(
        value,
      )};`,
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
  ['b_circular', () => 'border-radius:100%;'],
  ['btr_circular', () => 'border-top-right-radius:100%;'],
  ['btl_circular', () => 'border-top-left-radius:100%;'],
  ['bbr_circular', () => 'border-bottom-right-radius:100%;'],
  ['bbl_circular', () => 'border-bottom-left-radius:100%;'],
  [
    'br_circular',
    () => 'border-top-right-radius:100%;border-bottom-right-radius:100%;',
  ],
  [
    'bl_circular',
    () => 'border-top-left-radius:100%;border-bottom-left-radius:100%;',
  ],
  [
    'bb_circular',
    () => 'border-bottom-right-radius:100%;border-bottom-left-radius:100%;',
  ],
  [
    'bt_circular',
    () => 'border-top-right-radius:100%;border-top-left-radius:100%;',
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
