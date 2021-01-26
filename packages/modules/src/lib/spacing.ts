import { NUMBER } from '../constants';
import { handleSize } from '../utils/handleSize';
import { sym } from '../utils/sym';

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
  m_auto: () => 'margin:auto;',
  mt_auto: () => 'margin-top:auto;',
  mb_auto: () => 'margin-bottom:auto;',
  ml_auto: () => 'margin-left:auto;',
  mr_auto: () => 'margin-right:auto;',
  mx_auto: () => 'margin-right:auto;margin-left:auto;',
  my_auto: () => 'margin-top:auto;margin-bottom:auto;',
  [sym<'m_NUMBER'>(`m_(${NUMBER})`)]: (value: string) =>
    `margin:${handleSize(value)};`,
  [sym<'mt_NUMBER'>(`mt_(${NUMBER})`)]: (value: string) =>
    `margin-top:${handleSize(value)};`,
  [sym<'mb_NUMBER'>(`mb_(${NUMBER})`)]: (value: string) =>
    `margin-bottom:${handleSize(value)};`,
  [sym<'ml_NUMBER'>(`ml_(${NUMBER})`)]: (value: string) =>
    `margin-left:${handleSize(value)};`,
  [sym<'mr_NUMBER'>(`mr_(${NUMBER})`)]: (value: string) =>
    `margin-right:${handleSize(value)};`,
  [sym<'mx_NUMBER'>(`mx_(${NUMBER})`)]: (value: string) =>
    `margin-right:${handleSize(value)};margin-left:${handleSize(value)};`,
  [sym<'my_NUMBER'>(`my_(${NUMBER})`)]: (value: string) =>
    `margin-top:${handleSize(value)};margin-bottom:${handleSize(value)};`,
  [sym<'p_NUMBER'>(`p_(${NUMBER})`)]: (value: string) =>
    `padding:${handleSize(value)};`,
  [sym<'pt_NUMBER'>(`pt_(${NUMBER})`)]: (value: string) =>
    `padding-top:${handleSize(value)};`,
  [sym<'pb_NUMBER'>(`pb_(${NUMBER})`)]: (value: string) =>
    `padding-bottom:${handleSize(value)};`,
  [sym<'pl_NUMBER'>(`pl_(${NUMBER})`)]: (value: string) =>
    `padding-left:${handleSize(value)};`,
  [sym<'pr_NUMBER'>(`pr_(${NUMBER})`)]: (value: string) =>
    `padding-right:${handleSize(value)};`,
  [sym<'px_NUMBER'>(`px_(${NUMBER})`)]: (value: string) =>
    `padding-right:${handleSize(value)};padding-left:${handleSize(value)};`,
  [sym<'py_NUMBER'>(`py_(${NUMBER})`)]: (value: string) =>
    `padding-top:${handleSize(value)};padding-bottom:${handleSize(value)};`,
};
