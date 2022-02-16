import { box_shadow, inset_shadow } from '@booleon/tokens';

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
  ...theme('sd', box_shadow, ($) => `box-shadow:${$};`),
  ...theme('sdi', inset_shadow, ($) => `box-shadow:${$};`),
};
