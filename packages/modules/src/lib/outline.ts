import { HEX_COLOR, LOWER_CASE, NUMBER } from '../constants';
import { OutlineStyle } from '../types';
import { rem } from '../utils';

/**
 * Module for `outline` options
 * @example
 * const Component = booleon.div(outline);
 * @example
 * ```jsx
 * <Component ols_solid olw_12 olc_fff />
 * ```
 */
export const outline = [
  ['ol_none', () => 'outline:none;'],
  [
    ['olc_' as 'olc_HEX', `(${HEX_COLOR})`],
    (value: string) => `outline-color:#${value};`,
  ],
  [
    ['olw_' as 'olw_NUMBER', `(${NUMBER})`],
    (value: string) => `outline-width:${rem(value)};`,
  ],
  [
    ['ols_' as OutlineStyle, `(${LOWER_CASE})`],
    (value: string) => `outline-style:${value};`,
  ],
] as const;
