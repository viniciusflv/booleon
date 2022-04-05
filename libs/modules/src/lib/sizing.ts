import { theme } from '@booleon/core';
import { sizes } from '@booleon/tokens';

/**
 * @example
 * const Component = booleon.div(sizing);
 * @example
 * ```jsx
 * <Component h_10 w_10 />
 * ```
 */
export const sizing = {
  ...theme('h', sizes, ($) => `height:${$};`),
  ...theme('max_h', sizes, ($) => `max-height:${$};`),
  ...theme('min_h', sizes, ($) => `min-height:${$};`),
  ...theme('w', sizes, ($) => `width:${$};`),
  ...theme('max_w', sizes, ($) => `max-width:${$};`),
  ...theme('min_w', sizes, ($) => `min-width:${$};`),
};
