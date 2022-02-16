import { spaces } from '@booleon/tokens';

import { theme } from '../utils/theme';

/**
 * Module for `spacing` options
 * @example
 * const Component = booleon.div(spacing);
 * @example
 * ```jsx
 * <Component p_10 m_10 />
 * ```
 */
export const spacing = {
  ...theme('m', spaces, ($) => `margin:${$};`),
  ...theme('mt', spaces, ($) => `margin-top:${$};`),
  ...theme('mb', spaces, ($) => `margin-bottom:${$};`),
  ...theme('ml', spaces, ($) => `margin-left:${$};`),
  ...theme('mr', spaces, ($) => `margin-right:${$};`),
  ...theme('mx', spaces, ($) => `margin-right:${$};margin-left:${$};`),
  ...theme('my', spaces, ($) => `margin-top:${$};margin-bottom:${$};`),
  ...theme('p', spaces, ($) => `padding:${$};`),
  ...theme('pt', spaces, ($) => `padding-top:${$};`),
  ...theme('pb', spaces, ($) => `padding-bottom:${$};`),
  ...theme('pl', spaces, ($) => `padding-left:${$};`),
  ...theme('pr', spaces, ($) => `padding-right:${$};`),
  ...theme('px', spaces, ($) => `padding-right:${$};padding-left:${$};`),
  ...theme('py', spaces, ($) => `padding-top:${$};padding-bottom:${$};`),
};
