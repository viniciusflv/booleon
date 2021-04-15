import { SIZE } from '../constants';
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
  [sym<'m_SIZE'>(`^m_(${SIZE})`)]: (value: string) =>
    `margin:${handleSize(value, rem)};`,
  [sym<'mt_SIZE'>(`^mt_(${SIZE})`)]: (value: string) =>
    `margin-top:${handleSize(value, rem)};`,
  [sym<'mb_SIZE'>(`^mb_(${SIZE})`)]: (value: string) =>
    `margin-bottom:${handleSize(value, rem)};`,
  [sym<'ml_SIZE'>(`^ml_(${SIZE})`)]: (value: string) =>
    `margin-left:${handleSize(value, rem)};`,
  [sym<'mr_SIZE'>(`^mr_(${SIZE})`)]: (value: string) =>
    `margin-right:${handleSize(value, rem)};`,
  [sym<'mx_SIZE'>(`^mx_(${SIZE})`)]: (value: string) =>
    `margin-right:${handleSize(value, rem)};margin-left:${handleSize(
      value,
      rem,
    )};`,
  [sym<'my_SIZE'>(`^my_(${SIZE})`)]: (value: string) =>
    `margin-top:${handleSize(value, rem)};margin-bottom:${handleSize(
      value,
      rem,
    )};`,
  [sym<'p_SIZE'>(`^p_(${SIZE})`)]: (value: string) =>
    `padding:${handleSize(value, rem)};`,
  [sym<'pt_SIZE'>(`^pt_(${SIZE})`)]: (value: string) =>
    `padding-top:${handleSize(value, rem)};`,
  [sym<'pb_SIZE'>(`^pb_(${SIZE})`)]: (value: string) =>
    `padding-bottom:${handleSize(value, rem)};`,
  [sym<'pl_SIZE'>(`^pl_(${SIZE})`)]: (value: string) =>
    `padding-left:${handleSize(value, rem)};`,
  [sym<'pr_SIZE'>(`^pr_(${SIZE})`)]: (value: string) =>
    `padding-right:${handleSize(value, rem)};`,
  [sym<'px_SIZE'>(`^px_(${SIZE})`)]: (value: string) =>
    `padding-right:${handleSize(value, rem)};padding-left:${handleSize(
      value,
      rem,
    )};`,
  [sym<'py_SIZE'>(`^py_(${SIZE})`)]: (value: string) =>
    `padding-top:${handleSize(value, rem)};padding-bottom:${handleSize(
      value,
      rem,
    )};`,
};
