import MarginProps from './interfaces';
import { Indexer } from '../../lib/interfaces';

const marginCss: Indexer<MarginProps> = [
  [/^(m_)(\d+)/, (value) => `margin: ${Number(value) / 10}rem;`],
  [/^(mt_)(\d+)/, (value) => `margin-top: ${Number(value) / 10}rem;`],
  [/^(mb_)(\d+)/, (value) => `margin-bottom: ${Number(value) / 10}rem;`],
  [/^(ml_)(\d+)/, (value) => `margin-left: ${Number(value) / 10}rem;`],
  [/^(mr_)(\d+)/, (value) => `margin-right: ${Number(value) / 10}rem;`],
  [/^(mx_)(\d+)/, (value) => `margin-left: ${Number(value) / 10}rem; margin-right: ${Number(value) / 10}rem;`],
  [/^(my_)(\d+)/, (value) => `margin-top: ${Number(value) / 10}rem; margin-bottom: ${Number(value) / 10}rem;`],
  ['m_auto', () => 'margin: auto;'],
  ['mx_auto', () => 'margin-left: auto;margin-right: auto;'],
  ['my_auto', () => 'margin-top: auto;margin-bottom: auto;'],
  ['mt_auto', () => 'margin-top: auto;'],
  ['mb_auto', () => 'margin-bottom: auto;'],
  ['ml_auto', () => 'margin-left: auto;'],
  ['mr_auto', () => 'margin-right: auto;'],
];

export default marginCss;
