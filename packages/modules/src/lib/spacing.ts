import { NUMBER } from '../constants';
import { rem } from '../utils';

/**
 * Module for `spacing` options
 * @example
 * const Component = styledBooleon.div(spacing);
 * @example
 * ```jsx
 * <Component p_10 m_10 />
 * ```
 */
export const spacing = [
  [
    ['m_' as 'm_NUMBER', `(${NUMBER}|auto)`],
    (value: string) => `margin:${rem(value)};`,
  ],
  [
    ['mt_' as 'mt_NUMBER', `(${NUMBER}|auto)`],
    (value: string) => `margin-top:${rem(value)};`,
  ],
  [
    ['mb_' as 'mb_NUMBER', `(${NUMBER}|auto)`],
    (value: string) => `margin-bottom:${rem(value)};`,
  ],
  [
    ['ml_' as 'ml_NUMBER', `(${NUMBER}|auto)`],
    (value: string) => `margin-left:${rem(value)};`,
  ],
  [
    ['mr_' as 'mr_NUMBER', `(${NUMBER}|auto)`],
    (value: string) => `margin-right:${rem(value)};`,
  ],
  [
    ['mx_' as 'mx_NUMBER', `(${NUMBER}|auto)`],
    (value: string) => `margin-left:${rem(value)};margin-right:${rem(value)};`,
  ],
  [
    ['my_' as 'my_NUMBER', `(${NUMBER}|auto)`],
    (value: string) => `margin-top:${rem(value)};margin-bottom:${rem(value)};`,
  ],
  [
    ['p_' as 'p_NUMBER', `(${NUMBER})`],
    (value: string) => `padding:${rem(value)};`,
  ],
  [
    ['pt_' as 'pt_NUMBER', `(${NUMBER})`],
    (value: string) => `padding-top:${rem(value)};`,
  ],
  [
    ['pb_' as 'pb_NUMBER', `(${NUMBER})`],
    (value: string) => `padding-bottom:${rem(value)};`,
  ],
  [
    ['pl_' as 'pl_NUMBER', `(${NUMBER})`],
    (value: string) => `padding-left:${rem(value)};`,
  ],
  [
    ['pr_' as 'pr_NUMBER', `(${NUMBER})`],
    (value: string) => `padding-right:${rem(value)};`,
  ],
  [
    ['px_' as 'px_NUMBER', `(${NUMBER})`],
    (value: string) =>
      `padding-left:${rem(value)};padding-right:${rem(value)};`,
  ],
  [
    ['py_' as 'py_NUMBER', `(${NUMBER})`],
    (value: string) =>
      `padding-top:${rem(value)};padding-bottom:${rem(value)};`,
  ],
] as const;
