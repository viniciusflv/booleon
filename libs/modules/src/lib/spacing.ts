import { theme } from '@booleon/core';
import { spaces } from '@booleon/tokens';

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
  ...theme('m_neg', spaces, ($) => `margin:-${$};`),
  ...theme('mt_neg', spaces, ($) => `margin-top:-${$};`),
  ...theme('mb_neg', spaces, ($) => `margin-bottom:-${$};`),
  ...theme('ml_neg', spaces, ($) => `margin-left:-${$};`),
  ...theme('mr_neg', spaces, ($) => `margin-right:-${$};`),
  ...theme('mx_neg', spaces, ($) => `margin-right:-${$};margin-left:-${$};`),
  ...theme('my_neg', spaces, ($) => `margin-top:-${$};margin-bottom:-${$};`),
  ...theme('p_neg', spaces, ($) => `padding:-${$};`),
  ...theme('pt_neg', spaces, ($) => `padding-top:-${$};`),
  ...theme('pb_neg', spaces, ($) => `padding-bottom:-${$};`),
  ...theme('pl_neg', spaces, ($) => `padding-left:-${$};`),
  ...theme('pr_neg', spaces, ($) => `padding-right:-${$};`),
  ...theme('px_neg', spaces, ($) => `padding-right:-${$};padding-left:-${$};`),
  ...theme('py_neg', spaces, ($) => `padding-top:-${$};padding-bottom:-${$};`),
};
