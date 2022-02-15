import tokens from '@booleon/tokens';

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
  ...theme('m', tokens.spacing, ($) => `margin:${$};`),
  ...theme('mt', tokens.spacing, ($) => `margin-top:${$};`),
  ...theme('mb', tokens.spacing, ($) => `margin-bottom:${$};`),
  ...theme('ml', tokens.spacing, ($) => `margin-left:${$};`),
  ...theme('mr', tokens.spacing, ($) => `margin-right:${$};`),
  ...theme('mx', tokens.spacing, ($) => `margin-right:${$};margin-left:${$};`),
  ...theme('my', tokens.spacing, ($) => `margin-top:${$};margin-bottom:${$};`),
  ...theme('p', tokens.spacing, ($) => `padding:${$};`),
  ...theme('pt', tokens.spacing, ($) => `padding-top:${$};`),
  ...theme('pb', tokens.spacing, ($) => `padding-bottom:${$};`),
  ...theme('pl', tokens.spacing, ($) => `padding-left:${$};`),
  ...theme('pr', tokens.spacing, ($) => `padding-right:${$};`),
  ...theme(
    'px',
    tokens.spacing,
    ($) => `padding-right:${$};padding-left:${$};`,
  ),
  ...theme(
    'py',
    tokens.spacing,
    ($) => `padding-top:${$};padding-bottom:${$};`,
  ),
};
