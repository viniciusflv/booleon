import { Indexer } from '../../lib/interfaces';
import { divideIfNumber } from '../../lib/divideIfNumber';
import ContainerProps from './interfaces';

const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
const containerCss: Indexer<ContainerProps> = [
  [/^(z_)(\d+)/, (value) => `z-index: ${value};`],
  [/^(op_)(\d+)/, (value) => `opacity: ${divideIfNumber(value, 100)};`],
  [/^(top_)(\d+)/, (value) => `top: ${divideIfNumber(value, 100, 'rem')};`],
  [
    /^(bottom_)(\d+)/,
    (value) => `bottom: ${divideIfNumber(value, 100, 'rem')};`,
  ],
  [/^(left_)(\d+)/, (value) => `left: ${divideIfNumber(value, 100, 'rem')};`],
  [/^(right_)(\d+)/, (value) => `right: ${divideIfNumber(value, 100, 'rem')};`],
  [
    /^(top_neg_)(\d+)/,
    (value) => `top: -${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    /^(bottom_neg_)(\d+)/,
    (value) => `bottom: -${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    /^(left_neg_)(\d+)/,
    (value) => `left: -${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    /^(right_neg_)(\d+)/,
    (value) => `right: -${divideIfNumber(value, 100, 'rem')};`,
  ],
  [
    'content',
    (value) => `content: ${typeof value === 'string' ? value : '""'};`,
  ],
  ['z_max', () => `z-index: ${MAX_SAFE_INTEGER};`],
  ['z_neg', () => 'z-index: -1;'],
  ['z_auto', () => 'z-index: auto;'],
  ['sc_auto', () => 'overflow: auto;'],
  ['sc_hidden', () => 'overflow: hidden;'],
  ['sc_visible', () => 'overflow: visible;'],
  ['scy_auto', () => 'overflow-y: auto;'],
  ['scy_hidden', () => 'overflow-y: hidden;'],
  ['scy_visible', () => 'overflow-y: visible;'],
  ['scx_auto', () => 'overflow-x: auto;'],
  ['scx_hidden', () => 'overflow-x: hidden;'],
  ['scx_visible', () => 'overflow-x: visible;'],
  ['fixed', () => 'position: fixed;'],
  ['absolute', () => 'position: absolute;'],
  ['relative', () => 'position: relative;'],
  ['sticky', () => 'position: sticky;'],
  ['top', () => 'top: 0;'],
  ['top_neg', () => 'top: -100%;'],
  ['right', () => 'right: 0;'],
  ['right_neg', () => 'right: -100%;'],
  ['bottom', () => 'bottom: 0;'],
  ['bottom_neg', () => 'bottom: -100%;'],
  ['left', () => 'left: 0;'],
  ['left_neg', () => 'left: -100%;'],
  ['inset', () => 'left: 0;top: 0;right: 0;bottom: 0;'],
  ['inset_x', () => 'left: 0;right: 0;'],
  ['inset_y', () => 'top: 0;bottom: 0;'],
  ['fit_contain', () => 'object-fit: contain;'],
  ['fit_cover', () => 'object-fit: cover;'],
  ['fit_fill', () => 'object-fit: fill;'],
  ['fit_none', () => 'object-fit: none;'],
  ['hidden', () => 'display: none;'],
  ['visible', () => 'visibility: visible;'],
  ['invisible', () => 'visibility: hidden;'],
  ['noappearance', () => 'appearance: none;'],
  ['rz_none', () => 'resize: none;'],
  ['rz', () => 'resize: both;'],
  ['rzy', () => 'resize: vertical;'],
  ['rzx', () => 'resize: horizontal;'],
];

export default containerCss;
