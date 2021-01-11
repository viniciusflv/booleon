import { NUMBER } from '../constants';
import { rem } from '../utils';

/**
 * Module for `sizing` options
 * @example
 * const Component = booleon.div(sizing);
 * @example
 * ```jsx
 * <Component h_10 w_10 />
 * ```
 */
export const sizing = [
  [
    ['h_' as 'h_NUMBER', `(${NUMBER})`],
    (value: string) => `height:${rem(value)};`,
  ],
  [
    ['h_max_' as 'h_max_NUMBER', `(${NUMBER})`],
    (value: string) => `max-height:${rem(value)};`,
  ],
  [
    ['h_min_' as 'h_min_NUMBER', `(${NUMBER})`],
    (value: string) => `min-height:${rem(value)};`,
  ],
  [
    ['w_' as 'w_NUMBER', `(${NUMBER})`],
    (value: string) => `width:${rem(value)};`,
  ],
  [
    ['w_max_' as 'w_max_NUMBER', `(${NUMBER})`],
    (value: string) => `max-width:${rem(value)};`,
  ],
  [
    ['w_min_' as 'w_min_NUMBER', `(${NUMBER})`],
    (value: string) => `min-width:${rem(value)};`,
  ],
  [
    ['h_screen_' as 'h_screen_NUMBER', `(${NUMBER})`],
    (value: string) => `height:${value}vh;`,
  ],
  [
    ['h_max_screen_' as 'h_max_screen_NUMBER', `(${NUMBER})`],
    (value: string) => `max-height:${value}vh;`,
  ],
  [
    ['h_min_screen_' as 'h_min_screen_NUMBER', `(${NUMBER})`],
    (value: string) => `min-height:${value}vh;`,
  ],
  [
    ['w_screen_' as 'w_screen_NUMBER', `(${NUMBER})`],
    (value: string) => `width:${value}vw;`,
  ],
  [
    ['w_max_screen_' as 'w_max_screen_NUMBER', `(${NUMBER})`],
    (value: string) => `max-width:${value}vw;`,
  ],
  [
    ['w_min_screen_' as 'w_min_screen_NUMBER', `(${NUMBER})`],
    (value: string) => `min-width:${value}vw;`,
  ],
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
