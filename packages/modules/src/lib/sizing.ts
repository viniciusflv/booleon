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
  [sym('h_max_$')]: ($: string) => `max-height:${$};`,
  [sym('h_min_$')]: ($: string) => `min-height:${$};`,
  [sym('w_$')]: ($: string) => `width:${$};`,
  [sym('w_max_$')]: ($: string) => `max-width:${$};`,
  [sym('w_min_$')]: ($: string) => `min-width:${$};`,
};
