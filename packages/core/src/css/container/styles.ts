import { indexerCss } from '../../lib/indexer';
import ContainerProps from './interfaces';

const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
const containerCss = indexerCss<ContainerProps>([
  [/^(z_)(\d+)/, (value) => `z-index: ${value};`],
  [/^(top_)(\d+)/, (value) => `top: ${value};`],
  [/^(bottom_)(\d+)/, (value) => `bottom: ${value};`],
  [/^(left_)(\d+)/, (value) => `left: ${value};`],
  [/^(right_)(\d+)/, (value) => `right: ${value};`],
  [/^(top_neg_)(\d+)/, (value) => `top: -${value};`],
  [/^(bottom_neg_)(\d+)/, (value) => `bottom: -${value};`],
  [/^(left_neg_)(\d+)/, (value) => `left: -${value};`],
  [/^(right_neg_)(\d+)/, (value) => `right: -${value};`],
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
  ['cover', () => 'left: 0;top: 0;right: 0;bottom: 0;'],
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
]);

export default containerCss;
