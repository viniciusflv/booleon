import PaddingProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { divideIfNumber } from '../../lib/divideIfNumber';

const paddingCss: Indexer<PaddingProps> = [
  [/^(p_)(\d+)/, (value) => `padding: ${divideIfNumber(value, 10, 'rem')};`],
  [/^(pt_)(\d+)/, (value) => `padding-top: ${divideIfNumber(value, 10, 'rem')};`],
  [/^(pb_)(\d+)/, (value) => `padding-bottom: ${divideIfNumber(value, 10, 'rem')};`],
  [/^(pl_)(\d+)/, (value) => `padding-left: ${divideIfNumber(value, 10, 'rem')};`],
  [/^(pr_)(\d+)/, (value) => `padding-right: ${divideIfNumber(value, 10, 'rem')};`],
  [/^(px_)(\d+)/, (value) => `padding-left: ${divideIfNumber(value, 10, 'rem')}; padding-right: ${divideIfNumber(value, 10, 'rem')};`],
  [/^(py_)(\d+)/, (value) => `padding-top: ${divideIfNumber(value, 10, 'rem')}; padding-bottom: ${divideIfNumber(value, 10, 'rem')};`],
];

export default paddingCss;
