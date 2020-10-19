import { hexColor, lowerCase, number } from '../lib/regex';
import { rem } from '../lib/utils';

type bs_STYLE =
  | 'bs_none'
  | 'bs_hidden'
  | 'bs_dotted'
  | 'bs_dashed'
  | 'bs_solid'
  | 'bs_double'
  | 'bs_groove'
  | 'bs_ridge'
  | 'bs_inset'
  | 'bs_outset'
  | 'bs_initial'
  | 'bs_inherit';

type bts_STYLE =
  | 'bts_none'
  | 'bts_hidden'
  | 'bts_dotted'
  | 'bts_dashed'
  | 'bts_solid'
  | 'bts_double'
  | 'bts_groove'
  | 'bts_ridge'
  | 'bts_inset'
  | 'bts_outset'
  | 'bts_initial'
  | 'bts_inherit';

type bbs_STYLE =
  | 'bbs_none'
  | 'bbs_hidden'
  | 'bbs_dotted'
  | 'bbs_dashed'
  | 'bbs_solid'
  | 'bbs_double'
  | 'bbs_groove'
  | 'bbs_ridge'
  | 'bbs_inset'
  | 'bbs_outset'
  | 'bbs_initial'
  | 'bbs_inherit';

type bls_STYLE =
  | 'bls_none'
  | 'bls_hidden'
  | 'bls_dotted'
  | 'bls_dashed'
  | 'bls_solid'
  | 'bls_double'
  | 'bls_groove'
  | 'bls_ridge'
  | 'bls_inset'
  | 'bls_outset'
  | 'bls_initial'
  | 'bls_inherit';

type brs_STYLE =
  | 'brs_none'
  | 'brs_hidden'
  | 'brs_dotted'
  | 'brs_dashed'
  | 'brs_solid'
  | 'brs_double'
  | 'brs_groove'
  | 'brs_ridge'
  | 'brs_inset'
  | 'brs_outset'
  | 'brs_initial'
  | 'brs_inherit';

type bxs_STYLE =
  | 'bxs_none'
  | 'bxs_hidden'
  | 'bxs_dotted'
  | 'bxs_dashed'
  | 'bxs_solid'
  | 'bxs_double'
  | 'bxs_groove'
  | 'bxs_ridge'
  | 'bxs_inset'
  | 'bxs_outset'
  | 'bxs_initial'
  | 'bxs_inherit';

type bys_STYLE =
  | 'bys_none'
  | 'bys_hidden'
  | 'bys_dotted'
  | 'bys_dashed'
  | 'bys_solid'
  | 'bys_double'
  | 'bys_groove'
  | 'bys_ridge'
  | 'bys_inset'
  | 'bys_outset'
  | 'bys_initial'
  | 'bys_inherit';

export const borderTuple = [
  [
    ['bc_' as 'bc_HEX', `(${hexColor})`],
    (value: string) => `border-color:#${value};`,
  ],
  [
    ['btc_' as 'btc_HEX', `(${hexColor})`],
    (value: string) => `border-top-color:#${value};`,
  ],
  [
    ['bbc_' as 'bbc_HEX', `(${hexColor})`],
    (value: string) => `border-bottom-color:#${value};`,
  ],
  [
    ['blc_' as 'blc_HEX', `(${hexColor})`],
    (value: string) => `border-left-color:#${value};`,
  ],
  [
    ['brc_' as 'brc_HEX', `(${hexColor})`],
    (value: string) => `border-right-color:#${value};`,
  ],
  [
    ['bxc_' as 'bxc_HEX', `(${hexColor})`],
    (value: string) =>
      `border-right-color:#${value};border-left-color:#${value};`,
  ],
  [
    ['byc_' as 'byc_HEX', `(${hexColor})`],
    (value: string) =>
      `border-top-color:#${value};border-bottom-color:#${value};`,
  ],
  [
    ['bs_' as bs_STYLE, `(${lowerCase})`],
    (value: string) => `border-style:${value};`,
  ],
  [
    ['bts_' as bts_STYLE, `(${lowerCase})`],
    (value: string) => `border-top-style:${value};`,
  ],
  [
    ['bbs_' as bbs_STYLE, `(${lowerCase})`],
    (value: string) => `border-bottom-style:${value};`,
  ],
  [
    ['bls_' as bls_STYLE, `(${lowerCase})`],
    (value: string) => `border-left-style:${value};`,
  ],
  [
    ['brs_' as brs_STYLE, `(${lowerCase})`],
    (value: string) => `border-right-style:${value};`,
  ],
  [
    ['bxs_' as bxs_STYLE, `(${lowerCase})`],
    (value: string) =>
      `border-left-style:${value};border-right-style:${value};`,
  ],
  [
    ['bys_' as bys_STYLE, `(${lowerCase})`],
    (value: string) =>
      `border-top-style:${value};border-bottom-style:${value};`,
  ],
  [
    ['bw_' as 'bw_NUMBER', `(${number})`],
    (value: string) => `border-width:${rem(value)};`,
  ],
  [
    ['btw_' as 'btw_NUMBER', `(${number})`],
    (value: string) => `border-top-width:${rem(value)};`,
  ],
  [
    ['bbw_' as 'bbw_NUMBER', `(${number})`],
    (value: string) => `border-bottom-width:${rem(value)};`,
  ],
  [
    ['blw_' as 'blw_NUMBER', `(${number})`],
    (value: string) => `border-left-width:${rem(value)};`,
  ],
  [
    ['brw_' as 'brw_NUMBER', `(${number})`],
    (value: string) => `border-right-width:${rem(value)};`,
  ],
  [
    ['bxw_' as 'bxw_NUMBER', `(${number})`],
    (value: string) =>
      `border-left-width:${rem(value)};border-right-width:${rem(value)};`,
  ],
  [
    ['byw_' as 'byw_NUMBER', `(${number})`],
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
