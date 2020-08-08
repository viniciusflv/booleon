import SizingProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { divideIfNumber } from '../../lib/divideIfNumber';

const sizingCss: Indexer<SizingProps> = [
  [/^(h_)(\d+)/, (value) => `height: ${divideIfNumber(value, 100, 'rem')};`],
  [/^(h_max_)(\d+)/, (value) => `max-height: ${divideIfNumber(value, 100, 'rem')};`],
  [/^(h_min_)(\d+)/, (value) => `min-height: ${divideIfNumber(value, 100, 'rem')};`],
  [/^(h_screen_)(\d+)/, (value) => `height: ${value}vh;`],
  [/^(h_max_screen_)(\d+)/, (value) => `max-height: ${value}vh;`],
  [/^(h_min_screen_)(\d+)/, (value) => `min-height: ${value}vh;`],
  ['h_full', () => 'height: 100%;'],
  ['h_max_full', () => 'max-height: 100%;'],
  ['h_min_full', () => 'min-height: 100%;'],
  ['h_auto', () => 'height: auto;'],
  ['h_max_auto', () => 'max-height: auto;'],
  ['h_min_auto', () => 'min-height: auto;'],
  ['h_screen', () => 'height: 100vh;'],
  ['h_max_screen', () => 'max-height: 100vh;'],
  ['h_min_screen', () => 'min-height: 100vh;'],
  [/^(w_)(\d+)/, (value) => `width: ${divideIfNumber(value, 100, 'rem')};`],
  [/^(w_max_)(\d+)/, (value) => `max-width: ${divideIfNumber(value, 100, 'rem')};`],
  [/^(w_min_)(\d+)/, (value) => `min-width: ${divideIfNumber(value, 100, 'rem')};`],
  [/^(w_screen_)(\d+)/, (value) => `width: ${value}vw;`],
  [/^(w_max_screen_)(\d+)/, (value) => `max-width: ${value}vw;`],
  [/^(w_min_screen_)(\d+)/, (value) => `min-width: ${value}vw;`],
  ['w_full', () => 'width: 100%;'],
  ['w_max_full', () => 'max-width: 100%;'],
  ['w_min_full', () => 'min-width: 100%;'],
  ['w_auto', () => 'width: auto;'],
  ['w_max_auto', () => 'max-width: auto;'],
  ['w_min_auto', () => 'min-width: auto;'],
  ['w_screen', () => 'width: 100vw;'],
  ['w_max_screen', () => 'max-width: 100vw;'],
  ['w_min_screen', () => 'min-width: 100vw;'],
];

export default sizingCss;
