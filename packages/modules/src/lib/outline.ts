import { COLOR, LOWER_CASE, NUMBER } from '../constants';
import { OutlineStyle } from '../types';
import { rem, handleColor } from '../utils';

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
    [
      'olc_' as 'olc_HEX' | 'olc_RED_GREEN_BLUE' | 'olc_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => `outline-color:${handleColor(value)};`,
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
