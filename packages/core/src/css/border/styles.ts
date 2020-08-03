import { hexColor } from '../../lib/constants';
import BorderProps from './interfaces';
import { Indexer } from '../../lib/interfaces';

const borderCss: Indexer<BorderProps> = [
  [new RegExp(`^(bc_)${hexColor}`), (value) => `border-color: #${value};`],
  [new RegExp(`^(btc_)${hexColor}`), (value) => `border-top-color: #${value};`],
  [
    new RegExp(`^(bbc_)${hexColor}`),
    (value) => `border-bottom-color: #${value};`,
  ],
  [
    new RegExp(`^(blc_)${hexColor}`),
    (value) => `border-left-color: #${value};`,
  ],
  [
    new RegExp(`^(brc_)${hexColor}`),
    (value) => `border-right-color: #${value};`,
  ],
  [
    new RegExp(`^(bxc_)${hexColor}`),
    (value) => `
        border-right-color: #${value};
        border-left-color: #${value};
      `,
  ],
  [
    new RegExp(`^(byc_)${hexColor}`),
    (value) => `
        border-top-color: #${value};
        border-bottom-color: #${value};
      `,
  ],
  ['b_collapse', () => 'border-collapse: collapse;'],
  ['b_separate', () => 'border-collapse: separate;'],
  ['b_none', () => 'border: none;'],
  ['b_solid', () => 'border-style: solid;'],
  ['b_dashed', () => 'border-style: dashed;'],
  ['b_dotted', () => 'border-style: dotted;'],
  ['b_double', () => 'border-style: double;'],
  ['b_circular', () => 'border-radius: 100px;'],
  ['b_rounded', () => 'border-radius: 5rem;'],
  ['b_edge', () => 'border-radius: .5rem;'],
  ['b_thick', () => 'border-width: .5rem;'],
  ['b_thin', () => 'border-width: .05rem;'],
  ['bx_none', () => 'border-right: none;border-left:none;'],
  ['bx_solid', () => 'border-right-style: solid;border-left-style: solid;'],
  ['bx_dashed', () => 'border-right-style: dashed;border-left-style: dashed;'],
  ['bx_dotted', () => 'border-right-style: dotted;border-left-style: dotted;'],
  ['bx_double', () => 'border-right-style: double;border-left-style: double;'],
  ['bx_thick', () => 'border-right-width: .5rem;border-left-width: .5rem;'],
  ['bx_thin', () => 'border-right-width: .05rem;border-left-width: .05rem;'],
  ['by_none', () => 'border-top: none;border-bottom:none;'],
  ['by_solid', () => 'border-top-style: solid;border-bottom-style: solid;'],
  ['by_dashed', () => 'border-top-style: dashed;border-bottom-style: dashed;'],
  ['by_dotted', () => 'border-top-style: dotted;border-bottom-style: dotted;'],
  ['by_double', () => 'border-top-style: double;border-bottom-style: double;'],
  ['by_thick', () => 'border-top-width: .5rem;border-bottom-width: .5rem;'],
  ['by_thin', () => 'border-top-width: .05rem;border-bottom-width: .05rem;'],
  ['bt_none', () => 'border-top: none;'],
  ['bt_solid', () => 'border-top-style: solid;'],
  ['bt_dashed', () => 'border-top-style: dashed;'],
  ['bt_dotted', () => 'border-top-style: dotted;'],
  ['bt_double', () => 'border-top-style: double;'],
  ['bt_thick', () => 'border-top-width: .5rem;'],
  ['bt_thin', () => 'border-top-width: .05rem;'],
  ['bb_none', () => 'border-bottom:none;'],
  ['bb_solid', () => 'border-bottom-style: solid;'],
  ['bb_dashed', () => 'border-bottom-style: dashed;'],
  ['bb_dotted', () => 'border-bottom-style: dotted;'],
  ['bb_double', () => 'border-bottom-style: double;'],
  ['bb_thick', () => 'border-bottom-width: .5rem;'],
  ['bb_thin', () => 'border-bottom-width: .05rem;'],
  ['bl_none', () => 'border-left:none;'],
  ['bl_solid', () => 'border-left-style: solid;'],
  ['bl_dashed', () => 'border-left-style: dashed;'],
  ['bl_dotted', () => 'border-left-style: dotted;'],
  ['bl_double', () => 'border-left-style: double;'],
  ['bl_thick', () => 'border-left-width: .5rem;'],
  ['bl_thin', () => 'border-left-width: .05rem;'],
  ['br_none', () => 'border-right:none;'],
  ['br_solid', () => 'border-right-style: solid;'],
  ['br_dashed', () => 'border-right-style: dashed;'],
  ['br_dotted', () => 'border-right-style: dotted;'],
  ['br_double', () => 'border-right-style: double;'],
  ['br_thick', () => 'border-right-width: .5rem;'],
  ['br_thin', () => 'border-right-width: .05rem;'],
  ['btr_circular', () => 'border-top-right-radius: 100px;'],
  ['btr_rounded', () => 'border-top-right-radius: 2rem;'],
  ['btr_edge', () => 'border-top-right-radius: .5rem;'],
  ['btl_circular', () => 'border-top-left-radius: 100px;'],
  ['btl_rounded', () => 'border-top-left-radius: 2rem;'],
  ['btl_edge', () => 'border-top-left-radius: .5rem;'],
  ['bbr_circular', () => 'border-bottom-right-radius: 100px;'],
  ['bbr_rounded', () => 'border-bottom-right-radius: 2rem;'],
  ['bbr_edge', () => 'border-bottom-right-radius: .5rem;'],
  ['bbl_circular', () => 'border-bottom-left-radius: 100px;'],
  ['bbl_rounded', () => 'border-bottom-left-radius: 2rem;'],
  ['bbl_edge', () => 'border-bottom-left-radius: .5rem;'],
  [
    'br_circular',
    () => 'border-top-right-radius: 100px;border-bottom-right-radius: 100px;',
  ],
  [
    'br_rounded',
    () => 'border-top-right-radius: 2rem;border-bottom-right-radius: 2rem;',
  ],
  [
    'br_edge',
    () => 'border-top-right-radius: .5rem;border-bottom-right-radius: .5rem;',
  ],
  [
    'bl_circular',
    () => 'border-top-left-radius: 100px;border-bottom-left-radius: 100px;',
  ],
  [
    'bl_rounded',
    () => 'border-top-left-radius: 2rem;border-bottom-left-radius: 2rem;',
  ],
  [
    'bl_edge',
    () => 'border-top-left-radius: .5rem;border-bottom-left-radius: .5rem;',
  ],
  [
    'bb_circular',
    () => 'border-bottom-right-radius: 100px;border-bottom-left-radius: 100px;',
  ],
  [
    'bb_rounded',
    () => 'border-bottom-right-radius: 2rem;border-bottom-left-radius: 2rem;',
  ],
  [
    'bb_edge',
    () => 'border-bottom-right-radius: .5rem;border-bottom-left-radius: .5rem;',
  ],
  [
    'bt_circular',
    () => 'border-top-right-radius: 100px;border-top-left-radius: 100px;',
  ],
  [
    'bt_rounded',
    () => 'border-top-right-radius: 2rem;border-top-left-radius: 2rem;',
  ],
  [
    'bt_edge',
    () => 'border-top-right-radius: .5rem;border-top-left-radius: .5rem;',
  ],
];

export default borderCss;
