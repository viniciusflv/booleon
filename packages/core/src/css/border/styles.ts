import BorderProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { divideIfNumber } from '../../lib/divideIfNumber';
import { hexColor } from '../../lib/constants';

const borderCss: Indexer<BorderProps> = [
  [
    () => new RegExp(`^(bc_)${hexColor}`),
    (value) => `border-color: #${value};`,
  ],
  [
    () => new RegExp(`^(btc_)${hexColor}`),
    (value) => `border-top-color: #${value};`,
  ],
  [
    () => new RegExp(`^(bbc_)${hexColor}`),
    (value) => `border-bottom-color: #${value};`,
  ],
  [
    () => new RegExp(`^(blc_)${hexColor}`),
    (value) => `border-left-color: #${value};`,
  ],
  [
    () => new RegExp(`^(brc_)${hexColor}`),
    (value) => `border-right-color: #${value};`,
  ],
  [
    () => new RegExp(`^(bxc_)${hexColor}`),
    (value) => `border-right-color: #${value};border-left-color: #${value};`,
  ],
  [
    () => new RegExp(`^(byc_)${hexColor}`),
    (value) => `border-top-color: #${value};border-bottom-color: #${value};`,
  ],
  [() => /^(bs_)([a-z]+)/, (value) => `border-style: ${value};`],
  [() => /^(bts_)([a-z]+)/, (value) => `border-top-style: ${value};`],
  [() => /^(bbs_)([a-z]+)/, (value) => `border-bottom-style: ${value};`],
  [() => /^(bls_)([a-z]+)/, (value) => `border-left-style: ${value};`],
  [() => /^(brs_)([a-z]+)/, (value) => `border-right-style: ${value};`],
  [
    () => /^(bxs_)([a-z]+)/,
    (value) => `border-left-style: ${value};border-right-style: ${value};`,
  ],
  [
    () => /^(bys_)([a-z]+)/,
    (value) => `border-top-style: ${value};border-bottom-style: ${value};`,
  ],
  [
    () => /^(bw_)([0-9]+)/,
    (value) => `border-width: ${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    () => /^(btw_)([0-9]+)/,
    (value) => `border-top-width: ${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    () => /^(bbw_)([0-9]+)/,
    (value) => `border-bottom-width: ${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    () => /^(blw_)([0-9]+)/,
    (value) => `border-left-width: ${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    () => /^(brw_)([0-9]+)/,
    (value) => `border-right-width: ${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    () => /^(bxw_)([0-9]+)/,
    (value) =>
      `border-left-width: ${divideIfNumber(
        value,
        100,
        'rem',
      )};border-right-width: ${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    () => /^(byw_)([0-9]+)/,
    (value) =>
      `border-top-width: ${divideIfNumber(
        value,
        100,
        'rem',
      )};border-bottom-width: ${divideIfNumber(value, 100, 'rem')};`,
  ],
  ['b_collapse', () => 'border-collapse: collapse;'],
  ['b_separate', () => 'border-collapse: separate;'],
  ['b_none', () => 'border: none;'],
  ['bt_none', () => 'border-top: none;'],
  ['bb_none', () => 'border-bottom:none;'],
  ['bl_none', () => 'border-left:none;'],
  ['br_none', () => 'border-right:none;'],
  ['bx_none', () => 'border-right: none;border-left:none;'],
  ['by_none', () => 'border-top: none;border-bottom:none;'],
  ['b_circular', () => 'border-radius: 100px;'],
  ['btr_circular', () => 'border-top-right-radius: 100px;'],
  ['btl_circular', () => 'border-top-left-radius: 100px;'],
  ['bbr_circular', () => 'border-bottom-right-radius: 100px;'],
  ['bbl_circular', () => 'border-bottom-left-radius: 100px;'],
  [
    'br_circular',
    () => 'border-top-right-radius: 100px;border-bottom-right-radius: 100px;',
  ],
  [
    'bl_circular',
    () => 'border-top-left-radius: 100px;border-bottom-left-radius: 100px;',
  ],
  [
    'bb_circular',
    () => 'border-bottom-right-radius: 100px;border-bottom-left-radius: 100px;',
  ],
  [
    'bt_circular',
    () => 'border-top-right-radius: 100px;border-top-left-radius: 100px;',
  ],
  ['b_rounded', () => 'border-radius: 5rem;'],
  ['btr_rounded', () => 'border-top-right-radius: 5rem;'],
  ['btl_rounded', () => 'border-top-left-radius: 5rem;'],
  ['bbr_rounded', () => 'border-bottom-right-radius: 5rem;'],
  ['bbl_rounded', () => 'border-bottom-left-radius: 5rem;'],
  [
    'br_rounded',
    () => 'border-top-right-radius: 5rem;border-bottom-right-radius: 5rem;',
  ],
  [
    'bl_rounded',
    () => 'border-top-left-radius: 5rem;border-bottom-left-radius: 5rem;',
  ],
  [
    'bb_rounded',
    () => 'border-bottom-right-radius: 5rem;border-bottom-left-radius: 5rem;',
  ],
  [
    'bt_rounded',
    () => 'border-top-right-radius: 5rem;border-top-left-radius: 5rem;',
  ],
  ['b_edge', () => 'border-radius: .5rem;'],
  ['btr_edge', () => 'border-top-right-radius: .5rem;'],
  ['btl_edge', () => 'border-top-left-radius: .5rem;'],
  ['bbr_edge', () => 'border-bottom-right-radius: .5rem;'],
  ['bbl_edge', () => 'border-bottom-left-radius: .5rem;'],
  [
    'br_edge',
    () => 'border-top-right-radius: .5rem;border-bottom-right-radius: .5rem;',
  ],
  [
    'bl_edge',
    () => 'border-top-left-radius: .5rem;border-bottom-left-radius: .5rem;',
  ],
  [
    'bb_edge',
    () => 'border-bottom-right-radius: .5rem;border-bottom-left-radius: .5rem;',
  ],
  [
    'bt_edge',
    () => 'border-top-right-radius: .5rem;border-top-left-radius: .5rem;',
  ],
];

export default borderCss;
