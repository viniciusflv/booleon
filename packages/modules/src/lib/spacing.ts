import { sym } from '../utils';

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
  [sym('m_$')]: ($: string) => `margin:${$};`,
  [sym('mt_$')]: ($: string) => `margin-top:${$};`,
  [sym('mb_$')]: ($: string) => `margin-bottom:${$};`,
  [sym('ml_$')]: ($: string) => `margin-left:${$};`,
  [sym('mr_$')]: ($: string) => `margin-right:${$};`,
  [sym('mx_$')]: ($: string) => `margin-right:${$};margin-left:${$};`,
  [sym('my_$')]: ($: string) => `margin-top:${$};margin-bottom:${$};`,
  [sym('p_$')]: ($: string) => `padding:${$};`,
  [sym('pt_$')]: ($: string) => `padding-top:${$};`,
  [sym('pb_$')]: ($: string) => `padding-bottom:${$};`,
  [sym('pl_$')]: ($: string) => `padding-left:${$};`,
  [sym('pr_$')]: ($: string) => `padding-right:${$};`,
  [sym('px_$')]: ($: string) => `padding-right:${$};padding-left:${$};`,
  [sym('py_$')]: ($: string) => `padding-top:${$};padding-bottom:${$};`,
};
