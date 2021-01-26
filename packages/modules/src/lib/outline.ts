import { COLOR, LOWER_CASE, NUMBER } from '../constants';
import { OutlineStyle } from '../types';
import { rem, handleColor } from '../utils';

/**
 * Module for `outline` options
 * @example
 * const Component = booleon.div(outline);
 * @example
 * ```jsx
 * <Component ol_style_solid ol_width_12 ol_color_fff />
 * ```
 */
export const outline = [
  ['ol_none', () => 'outline:none;'],
  [
    [
      'ol_color_' as
        | 'ol_color_HEX'
        | 'ol_color_RED_GREEN_BLUE'
        | 'ol_color_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => `outline-color:${handleColor(value)};`,
  ],
  [
    ['ol_width_' as 'ol_width_NUMBER', `(${NUMBER})`],
    (value: string) => `outline-width:${rem(value)};`,
  ],
  [
    ['ol_style_' as OutlineStyle, `(${LOWER_CASE})`],
    (value: string) => `outline-style:${value};`,
  ],
] as const;
