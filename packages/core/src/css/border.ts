import { Entry } from '../lib/interfaces';
import { hexColor, lowerCase, number } from '../lib/regex';
import { percentage } from '../lib/utils';

const borderTuple = [
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
    ['bs_' as 'bs_STYLE', `(${lowerCase})`],
    (value: string) => `border-style:${value};`,
  ],
  [
    ['bts_' as 'bts_STYLE', `(${lowerCase})`],
    (value: string) => `border-top-style:${value};`,
  ],
  [
    ['bbs_' as 'bbs_STYLE', `(${lowerCase})`],
    (value: string) => `border-bottom-style:${value};`,
  ],
  [
    ['bls_' as 'bls_STYLE', `(${lowerCase})`],
    (value: string) => `border-left-style:${value};`,
  ],
  [
    ['brs_' as 'brs_STYLE', `(${lowerCase})`],
    (value: string) => `border-right-style:${value};`,
  ],
  [
    ['bxs_' as 'bxs_STYLE', `(${lowerCase})`],
    (value: string) =>
      `border-left-style:${value};border-right-style:${value};`,
  ],
  [
    ['bys_' as 'bys_STYLE', `(${lowerCase})`],
    (value: string) =>
      `border-top-style:${value};border-bottom-style:${value};`,
  ],
  [
    ['bw_' as 'bw_NUMBER', `(${number})`],
    (value: string) => `border-width:${percentage(value, 'rem')};`,
  ],
  [
    ['btw_' as 'btw_NUMBER', `(${number})`],
    (value: string) => `border-top-width:${percentage(value, 'rem')};`,
  ],
  [
    ['bbw_' as 'bbw_NUMBER', `(${number})`],
    (value: string) => `border-bottom-width:${percentage(value, 'rem')};`,
  ],
  [
    ['blw_' as 'blw_NUMBER', `(${number})`],
    (value: string) => `border-left-width:${percentage(value, 'rem')};`,
  ],
  [
    ['brw_' as 'brw_NUMBER', `(${number})`],
    (value: string) => `border-right-width:${percentage(value, 'rem')};`,
  ],
  [
    ['bxw_' as 'bxw_NUMBER', `(${number})`],
    (value: string) =>
      `border-left-width:${percentage(
        value,
        'rem',
      )};border-right-width:${percentage(value, 'rem')};`,
  ],
  [
    ['byw_' as 'byw_NUMBER', `(${number})`],
    (value: string) =>
      `border-top-width:${percentage(
        value,
        'rem',
      )};border-bottom-width:${percentage(value, 'rem')};`,
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

type BorderProps = Entry<typeof borderTuple>;

export { BorderProps, borderTuple };
