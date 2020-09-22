import { Entry, Indexer } from '../lib/interfaces';
import { percentage } from '../lib/utils';

const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
const containerTuple = [
  ['z_max', () => `z-index:${MAX_SAFE_INTEGER};`],
  ['z_neg', () => 'z-index:-1;'],
  ['z_auto', () => 'z-index:auto;'],
  ['sc_auto', () => 'overflow:auto;'],
  ['sc_hidden', () => 'overflow:hidden;'],
  ['sc_visible', () => 'overflow:visible;'],
  ['scy_auto', () => 'overflow-y:auto;'],
  ['scy_hidden', () => 'overflow-y:hidden;'],
  ['scy_visible', () => 'overflow-y:visible;'],
  ['scx_auto', () => 'overflow-x:auto;'],
  ['scx_hidden', () => 'overflow-x:hidden;'],
  ['scx_visible', () => 'overflow-x:visible;'],
  ['fixed', () => 'position:fixed;'],
  ['absolute', () => 'position:absolute;'],
  ['relative', () => 'position:relative;'],
  ['sticky', () => 'position:sticky;'],
  ['top', () => 'top:0;'],
  ['top_neg', () => 'top:-100%;'],
  ['right', () => 'right:0;'],
  ['right_neg', () => 'right:-100%;'],
  ['bottom', () => 'bottom:0;'],
  ['bottom_neg', () => 'bottom:-100%;'],
  ['left', () => 'left:0;'],
  ['left_neg', () => 'left:-100%;'],
  ['inset', () => 'left:0;top:0;right:0;bottom:0;'],
  ['inset_x', () => 'left:0;right:0;'],
  ['inset_y', () => 'top:0;bottom:0;'],
  ['fit_contain', () => 'object-fit:contain;'],
  ['fit_cover', () => 'object-fit:cover;'],
  ['fit_fill', () => 'object-fit:fill;'],
  ['fit_none', () => 'object-fit:none;'],
  ['hidden', () => 'display:none;'],
  ['visible', () => 'visibility:visible;'],
  ['invisible', () => 'visibility:hidden;'],
  ['noappearance', () => 'appearance:none;'],
  ['rz_none', () => 'resize:none;'],
  ['rz', () => 'resize:both;'],
  ['rzy', () => 'resize:vertical;'],
  ['rzx', () => 'resize:horizontal;'],
  [
    'content',
    (value: string) => `content:${typeof value === 'string' ? value : '""'};`,
  ],
] as const;

const containerIndexer: Indexer = [
  [() => '^(z_)(\\d+)', (value) => `z-index:${value};`],
  [() => '^(op_)(\\d+)', (value) => `opacity:${percentage(value)};`],
  [() => '^(top_)(\\d+)', (value) => `top:${percentage(value)}rem;`],
  [() => '^(bottom_)(\\d+)', (value) => `bottom:${percentage(value)}rem;`],
  [() => '^(left_)(\\d+)', (value) => `left:${percentage(value)}rem;`],
  [() => '^(right_)(\\d+)', (value) => `right:${percentage(value)}rem;`],
  [() => '^(top_neg_)(\\d+)', (value) => `top:-${percentage(value)}rem;`],
  [() => '^(bottom_neg_)(\\d+)', (value) => `bottom:-${percentage(value)}rem;`],
  [() => '^(left_neg_)(\\d+)', (value) => `left:-${percentage(value)}rem;`],
  [() => '^(right_neg_)(\\d+)', (value) => `right:-${percentage(value)}rem;`],
];

type ContainerProps = Entry<
  typeof containerTuple,
  | 'z_NUMBER'
  | 'top_NUMBER'
  | 'bottom_NUMBER'
  | 'left_NUMBER'
  | 'right_NUMBER'
  | 'top_neg_NUMBER'
  | 'bottom_neg_NUMBER'
  | 'left_neg_NUMBER'
  | 'right_neg_NUMBER'
  | 'op_PERCENTAGE'
>;

export { ContainerProps, containerTuple, containerIndexer };
