import { sym } from '../utils';

/**
 * @example
 * const Component = booleon.div(sizing);
 * @example
 * ```jsx
 * <Component h_10 w_10 />
 * ```
 */
export const sizing = {
  [sym('h_$')]: ($: string) => `height:${$};`,
  [sym('max_h_$')]: ($: string) => `max-height:${$};`,
  [sym('min_h_$')]: ($: string) => `min-height:${$};`,
  [sym('w_$')]: ($: string) => `width:${$};`,
  [sym('max_w_$')]: ($: string) => `max-width:${$};`,
  [sym('min_w_$')]: ($: string) => `min-width:${$};`,
  h_full: () => 'height:100%;',
  max_h_full: () => 'max-height:100%;',
  min_h_full: () => 'min-height:100%;',
  h_auto: () => 'height:auto;',
  max_h_auto: () => 'max-height:auto;',
  min_h_auto: () => 'min-height:auto;',
  h_screen: () => 'height:100vh;',
  max_h_screen: () => 'max-height:100vh;',
  min_h_screen: () => 'min-height:100vh;',
  w_full: () => 'width:100%;',
  max_w_full: () => 'max-width:100%;',
  min_w_full: () => 'min-width:100%;',
  w_auto: () => 'width:auto;',
  max_w_auto: () => 'max-width:auto;',
  min_w_auto: () => 'min-width:auto;',
  w_screen: () => 'width:100vw;',
  max_w_screen: () => 'max-width:100vw;',
  min_w_screen: () => 'min-width:100vw;',
};
