import { NUMBER } from '../constants';
import { rem } from '../utils';
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
    `margin:${handleSize(value, rem)};`,
  [sym<'mt_NUMBER'>(`mt_(${NUMBER})`)]: (value: string) =>
    `margin-top:${handleSize(value, rem)};`,
  [sym<'mb_NUMBER'>(`mb_(${NUMBER})`)]: (value: string) =>
    `margin-bottom:${handleSize(value, rem)};`,
  [sym<'ml_NUMBER'>(`ml_(${NUMBER})`)]: (value: string) =>
    `margin-left:${handleSize(value, rem)};`,
  [sym<'mr_NUMBER'>(`mr_(${NUMBER})`)]: (value: string) =>
    `margin-right:${handleSize(value, rem)};`,
  [sym<'mx_NUMBER'>(`mx_(${NUMBER})`)]: (value: string) =>
    `margin-right:${handleSize(value, rem)};margin-left:${handleSize(
      value,
      rem,
    )};`,
  [sym<'my_NUMBER'>(`my_(${NUMBER})`)]: (value: string) =>
    `margin-top:${handleSize(value, rem)};margin-bottom:${handleSize(
      value,
      rem,
    )};`,
  [sym<'p_NUMBER'>(`p_(${NUMBER})`)]: (value: string) =>
    `padding:${handleSize(value, rem)};`,
  [sym<'pt_NUMBER'>(`pt_(${NUMBER})`)]: (value: string) =>
    `padding-top:${handleSize(value, rem)};`,
  [sym<'pb_NUMBER'>(`pb_(${NUMBER})`)]: (value: string) =>
    `padding-bottom:${handleSize(value, rem)};`,
  [sym<'pl_NUMBER'>(`pl_(${NUMBER})`)]: (value: string) =>
    `padding-left:${handleSize(value, rem)};`,
  [sym<'pr_NUMBER'>(`pr_(${NUMBER})`)]: (value: string) =>
    `padding-right:${handleSize(value, rem)};`,
  [sym<'px_NUMBER'>(`px_(${NUMBER})`)]: (value: string) =>
    `padding-right:${handleSize(value, rem)};padding-left:${handleSize(
      value,
      rem,
    )};`,
  [sym<'py_NUMBER'>(`py_(${NUMBER})`)]: (value: string) =>
    `padding-top:${handleSize(value, rem)};padding-bottom:${handleSize(
      value,
      rem,
    )};`,
};
