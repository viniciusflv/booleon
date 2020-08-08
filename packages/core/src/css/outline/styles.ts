import OutlineProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { divideIfNumber } from '../../lib/divideIfNumber';

const outlineCss: Indexer<OutlineProps> = [
  [/^(olw_)(\d+)/, (value) => `outline-width: ${divideIfNumber(value, 10, 'rem')};`],
  [/^(olc_)([A-z0-9]+)/, (value) => `outline-color: #${value};`],
  ['ol_none', () => 'outline: none;'],
  ['ol_dotted', () => 'outline-style: dotted;'],
  ['ol_dashed', () => 'outline-style: dashed;'],
  ['ol_solid', () => 'outline-style: solid;'],
  ['ol_double', () => 'outline-style: double;'],
  ['ol_groove', () => 'outline-style: groove;'],
  ['ol_ridge', () => 'outline-style: ridge;'],
  ['ol_inset', () => 'outline-style: inset;'],
  ['ol_outset', () => 'outline-style: outset;'],
];

export default outlineCss;
