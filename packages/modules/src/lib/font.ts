import { COLOR, LETTER, LOWER_CASE, NUMBER } from '../constants';
import { TextAlign, TextTransform, UserSelect } from '../types';
import { rem, handleColor } from '../utils';

/**
 * Module for `font` options
 * @example
 * const Component = booleon.div(font);
 * @example
 * ```jsx
 * <Component ft_family_sans ft_color_fff />
 * ```
 */
export const font = [
  [
    [
      'ft_border_' as
        | 'ft_border_HEX'
        | 'ft_border_RED_GREEN_BLUE'
        | 'ft_border_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) =>
      `text-shadow:-1px 0 ${handleColor(value)},0 1px ${handleColor(
        value,
      )},1px 0 ${handleColor(value)},0 -1px ${handleColor(value)};`,
  ],
  [
    [
      'ft_color_' as
        | 'ft_color_HEX'
        | 'ft_color_RED_GREEN_BLUE'
        | 'ft_color_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => `color:${handleColor(value)};`,
  ],
  [
    ['ft_size_' as 'ft_size_NUMBER', `(${NUMBER})`],
    (value: string) => `font-size:${rem(value)};`,
  ],
  [
    ['ft_spacing_' as 'ft_spacing_NUMBER', `(${NUMBER})`],
    (value: string) => `letter-spacing:${rem(value)};`,
  ],
  [
    ['ft_spacing_neg_' as 'ft_spacing_neg_NUMBER', `(${NUMBER})`],
    (value: string) => `letter-spacing:-${rem(value)};`,
  ],
  [
    ['ft_height_' as 'ft_height_NUMBER', `(${NUMBER})`],
    (value: string) => `line-height:${rem(value)};`,
  ],
  [
    ['ft_select_' as UserSelect, `(${LOWER_CASE})`],
    (value: string) => `user-select:${value};`,
  ],
  [
    ['ft_align_' as TextAlign, `(${LOWER_CASE})`],
    (value: string) => `text-align:${value};`,
  ],
  [
    ['ft_transform_' as TextTransform, `(${LOWER_CASE})`],
    (value: string) => `text-transform:${value};`,
  ],
  [
    ['ft_family_' as 'ft_family_FAMILY', `(${LETTER}).*`],
    (value: string) => `font-family:${value};`,
  ],
  ['ft_family_sans', () => 'font-family:sans-serif;'],
  ['ft_family_serif', () => 'font-family:serif;'],
  ['ft_family_mono', () => 'font-family:monospace;'],
  ['ft_italic', () => 'font-style:italic;'],
  ['ft_weight_lightest', () => 'font-weight:100;'],
  ['ft_weight_lighter', () => 'font-weight:200;'],
  ['ft_weight_light', () => 'font-weight:300;'],
  ['ft_weight_normal', () => 'font-weight:400;'],
  ['ft_weight_medium', () => 'font-weight:500;'],
  ['ft_weight_semibold', () => 'font-weight:600;'],
  ['ft_weight_bold', () => 'font-weight:700;'],
  ['ft_weight_bolder', () => 'font-weight:800;'],
  ['ft_weight_black', () => 'font-weight:900;'],
  ['li_none', () => 'list-style-type:none;'],
  ['li_disc', () => 'list-style-type:disc;'],
  ['li_decimal', () => 'list-style-type:decimal;'],
  ['li_inside', () => 'list-style-position:inside;'],
  ['li_outside', () => 'list-style-position:outside;'],
  ['ft_underline', () => 'text-decoration:underline;'],
  ['ft_line_through', () => 'text-decoration:line-through;'],
  ['ft_no_underline', () => 'text-decoration:none;'],
  ['ft_wrap_space', () => 'white-space:normal;'],
  ['ft_wrap_word', () => 'overflow-wrap:break-word;'],
  ['ft_wrap_letter', () => 'word-break:break-all;'],
  [
    'ft_no_wrap',
    () => 'white-space:nowrap;word-break:normal;overflow-wrap:normal;',
  ],
  [
    'ft_truncate',
    () => 'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;',
  ],
] as const;
