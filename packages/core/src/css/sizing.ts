import { Entry, Indexer } from '../lib/interfaces';
import { percentage } from '../lib/utils';

const sizingTuple = [
  ['h_full', () => 'height:100%;'],
  ['h_max_full', () => 'max-height:100%;'],
  ['h_min_full', () => 'min-height:100%;'],
  ['h_auto', () => 'height:auto;'],
  ['h_max_auto', () => 'max-height:auto;'],
  ['h_min_auto', () => 'min-height:auto;'],
  ['h_screen', () => 'height:100vh;'],
  ['h_max_screen', () => 'max-height:100vh;'],
  ['h_min_screen', () => 'min-height:100vh;'],
  ['w_full', () => 'width:100%;'],
  ['w_max_full', () => 'max-width:100%;'],
  ['w_min_full', () => 'min-width:100%;'],
  ['w_auto', () => 'width:auto;'],
  ['w_max_auto', () => 'max-width:auto;'],
  ['w_min_auto', () => 'min-width:auto;'],
  ['w_screen', () => 'width:100vw;'],
  ['w_max_screen', () => 'max-width:100vw;'],
  ['w_min_screen', () => 'min-width:100vw;'],
] as const;

const sizingIndexer: Indexer = [
  [() => '^(h_)(\\d+)', (value) => `height:${percentage(value)}rem;`],
  [() => '^(h_max_)(\\d+)', (value) => `max-height:${percentage(value)}rem;`],
  [() => '^(h_min_)(\\d+)', (value) => `min-height:${percentage(value)}rem;`],
  [() => '^(h_screen_)(\\d+)', (value) => `height:${value}vh;`],
  [() => '^(h_max_screen_)(\\d+)', (value) => `max-height:${value}vh;`],
  [() => '^(h_min_screen_)(\\d+)', (value) => `min-height:${value}vh;`],
  [() => '^(w_)(\\d+)', (value) => `width:${percentage(value)}rem;`],
  [() => '^(w_max_)(\\d+)', (value) => `max-width:${percentage(value)}rem;`],
  [() => '^(w_min_)(\\d+)', (value) => `min-width:${percentage(value)}rem;`],
  [() => '^(w_screen_)(\\d+)', (value) => `width:${value}vw;`],
  [() => '^(w_max_screen_)(\\d+)', (value) => `max-width:${value}vw;`],
  [() => '^(w_min_screen_)(\\d+)', (value) => `min-width:${value}vw;`],
];

type SizingProps = Entry<
  typeof sizingTuple,
  | 'h_NUMBER'
  | 'h_max_NUMBER'
  | 'h_min_NUMBER'
  | 'h_screen_NUMBER'
  | 'h_max_screen_NUMBER'
  | 'h_min_screen_NUMBER'
  | 'w_NUMBER'
  | 'w_max_NUMBER'
  | 'w_min_NUMBER'
  | 'w_screen_NUMBER'
  | 'w_max_screen_NUMBER'
  | 'w_min_screen_NUMBER'
>;

export { SizingProps, sizingTuple, sizingIndexer };
