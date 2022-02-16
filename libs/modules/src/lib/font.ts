import { colors, font_family, font_size, spaces } from '@booleon/tokens';

import { theme } from '../utils/theme';

/**
 * Module for `font` options
 * @example
 * const Component = booleon.div(font);
 * @example
 * ```jsx
 * <Component ft_family_sans ft_color_fff />
 * ```
 */
export const font = {
  ...theme('ft_color', colors, ($) => `color:${$};`),
  ...theme('ft_size', font_size, ($) => `font-size:${$};`),
  ...theme('ft_family', font_family, ($) => `font-family:${$};`),
  ...theme('ft_spacing', spaces, ($) => `letter-spacing:${$};`),
  ...theme('ft_height', spaces, ($) => `line-height:${$};`),
  ft_color_inherit: () => 'color:inherit;',
  ft_select_none: () => 'user-select:none;',
  ft_select_auto: () => 'user-select:auto;',
  ft_select_text: () => 'user-select:text;',
  ft_select_contain: () => 'user-select:contain;',
  ft_select_all: () => 'user-select:all;',
  ft_select_inherit: () => 'user-select:inherit;',
  ft_select_initial: () => 'user-select:initial;',
  ft_select_unset: () => 'user-select:unset;',
  ft_align_left: () => 'text-align:left;',
  ft_align_right: () => 'text-align:right;',
  ft_align_center: () => 'text-align:center;',
  ft_align_justify: () => 'text-align:justify;',
  ft_align_initial: () => 'text-align:initial;',
  ft_align_inherit: () => 'text-align:inherit;',
  ft_transform_none: () => 'text-transform:none;',
  ft_transform_normal: () => 'text-transform:normal;',
  ft_transform_capitalize: () => 'text-transform:capitalize;',
  ft_transform_uppercase: () => 'text-transform:uppercase;',
  ft_transform_lowercase: () => 'text-transform:lowercase;',
  ft_transform_initial: () => 'text-transform:initial;',
  ft_transform_inherit: () => 'text-transform:inherit;',
  ft_italic: () => 'font-style:italic;',
  ft_weight_lightest: () => 'font-weight:100;',
  ft_weight_lighter: () => 'font-weight:200;',
  ft_weight_light: () => 'font-weight:300;',
  ft_weight_normal: () => 'font-weight:400;',
  ft_weight_medium: () => 'font-weight:500;',
  ft_weight_semibold: () => 'font-weight:600;',
  ft_weight_bold: () => 'font-weight:700;',
  ft_weight_bolder: () => 'font-weight:800;',
  ft_weight_black: () => 'font-weight:900;',
  li_none: () => 'list-style-type:none;',
  li_disc: () => 'list-style-type:disc;',
  li_decimal: () => 'list-style-type:decimal;',
  li_inside: () => 'list-style-position:inside;',
  li_outside: () => 'list-style-position:outside;',
  ft_underline: () => 'text-decoration:underline;',
  ft_line_through: () => 'text-decoration:line-through;',
  ft_no_underline: () => 'text-decoration:none;',
  ft_wrap_space: () => 'white-space:normal;',
  ft_wrap_word: () => 'overflow-wrap:break-word;',
  ft_wrap_letter: () => 'word-break:break-all;',
  ft_no_wrap: () =>
    'white-space:nowrap;word-break:normal;overflow-wrap:normal;',
  ft_truncate: () =>
    'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;',
};
