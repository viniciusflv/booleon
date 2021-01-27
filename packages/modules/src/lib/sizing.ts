import { rem } from '../utils';
import { handleSize } from '../utils/handleSize';
import { sym } from '../utils/sym';

/**
 * Module for `sizing` options
 * @example
 * const Component = booleon.div(sizing);
 * @example
 * ```jsx
 * <Component h_10 w_10 />
 * ```
 */
export const sizing = {
  [sym<'h_NUMBER'>('h_(.*)')]: (value: string) =>
    `height:${handleSize(value, rem)};`,
  [sym<'h_max_NUMBER'>('h_max_(.*)')]: (value: string) =>
    `max-height:${handleSize(value, rem)};`,
  [sym<'h_min_NUMBER'>('h_min_(.*)')]: (value: string) =>
    `min-height:${handleSize(value, rem)};`,
  [sym<'h_min_NUMBER'>('h_min_(.*)')]: (value: string) =>
    `min-height:${handleSize(value, rem)};`,
  [sym<'w_NUMBER'>('w_(.*)')]: (value: string) =>
    `width:${handleSize(value, rem)};`,
  [sym<'w_max_NUMBER'>('w_max_(.*)')]: (value: string) =>
    `max-width:${handleSize(value, rem)};`,
  [sym<'w_min_NUMBER'>('w_min_(.*)')]: (value: string) =>
    `min-width:${handleSize(value, rem)};`,
  [sym<'w_min_NUMBER'>('w_min_(.*)')]: (value: string) =>
    `min-width:${handleSize(value, rem)};`,
  h_full: () => 'height:100%;',
  h_max_full: () => 'max-height:100%;',
  h_min_full: () => 'min-height:100%;',
  h_auto: () => 'height:auto;',
  h_max_auto: () => 'max-height:auto;',
  h_min_auto: () => 'min-height:auto;',
  h_screen: () => 'height:100vh;',
  h_max_screen: () => 'max-height:100vh;',
  h_min_screen: () => 'min-height:100vh;',
  w_full: () => 'width:100%;',
  w_max_full: () => 'max-width:100%;',
  w_min_full: () => 'min-width:100%;',
  w_auto: () => 'width:auto;',
  w_max_auto: () => 'max-width:auto;',
  w_min_auto: () => 'min-width:auto;',
  w_screen: () => 'width:100vw;',
  w_max_screen: () => 'max-width:100vw;',
  w_min_screen: () => 'min-width:100vw;',
};
