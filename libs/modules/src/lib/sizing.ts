import tokens from '@booleon/tokens';

import { theme } from '../utils/theme';

/**
 * @example
 * const Component = booleon.div(sizing);
 * @example
 * ```jsx
 * <Component h_10 w_10 />
 * ```
 */
export const sizing = {
  ...theme('h', tokens.sizing, ($) => `height:${$};`),
  ...theme('max_h', tokens.sizing, ($) => `max-height:${$};`),
  ...theme('min_h', tokens.sizing, ($) => `min-height:${$};`),
  ...theme('w', tokens.sizing, ($) => `width:${$};`),
  ...theme('max_w', tokens.sizing, ($) => `max-width:${$};`),
  ...theme('min_w', tokens.sizing, ($) => `min-width:${$};`),
};
