import MarginProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { divideIfNumber } from '../../lib/divideIfNumber';

const marginCss: Indexer<MarginProps> = [
  [
    /^(m_)(\d+|auto)/,
    (value) => `margin: ${divideIfNumber(value, 10, 'rem')};`,
  ],
  [
    /^(mt_)(\d+|auto)/,
    (value) => `margin-top: ${divideIfNumber(value, 10, 'rem')};`,
  ],
  [
    /^(mb_)(\d+|auto)/,
    (value) => `margin-bottom: ${divideIfNumber(value, 10, 'rem')};`,
  ],
  [
    /^(ml_)(\d+|auto)/,
    (value) => `margin-left: ${divideIfNumber(value, 10, 'rem')};`,
  ],
  [
    /^(mr_)(\d+|auto)/,
    (value) => `margin-right: ${divideIfNumber(value, 10, 'rem')};`,
  ],
  [
    /^(mx_)(\d+|auto)/,
    (value) =>
      `margin-left: ${divideIfNumber(
        value,
        10,
        'rem',
      )}; margin-right: ${divideIfNumber(value, 10, 'rem')};`,
  ],
  [
    /^(my_)(\d+|auto)/,
    (value) =>
      `margin-top: ${divideIfNumber(
        value,
        10,
        'rem',
      )}; margin-bottom: ${divideIfNumber(value, 10, 'rem')};`,
  ],
];

export default marginCss;
