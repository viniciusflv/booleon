import tokens from '@booleon/tokens';

import { theme } from '../utils/theme';

/**
 * Module for `shadow` options
 * @example
 * const Component = booleon.div(shadow);
 * @example
 * ```jsx
 * <Component sd_1 sdi_1 />
 * ```
 */
export const shadow = {
  ...theme('sd', tokens.shadow, ($) => `box-shadow:${$};`),
  ...theme('sdi', tokens.inset_shadow, ($) => `box-shadow:${$};`),
};
