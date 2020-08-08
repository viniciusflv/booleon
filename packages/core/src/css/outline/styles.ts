import OutlineProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { divideIfNumber } from '../../lib/divideIfNumber';
import { hexColor } from '../../lib/constants';

const outlineCss: Indexer<OutlineProps> = [
  [new RegExp(`^(olc_)${hexColor}`), (value) => `outline-color: #${value};`],
  [/^(olw_)(\d+)/, (value) => `outline-width: ${divideIfNumber(value, 100, 'rem')};`],
  [/^(ols_)([a-z]+)/, (value) => `outline-style: ${value};`],
  ['ol_none', () => 'outline: none;'],
];

export default outlineCss;
