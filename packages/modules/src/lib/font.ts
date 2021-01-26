import { handleColor } from '../utils';
import { handleSize } from '../utils/handleSize';
import { sym } from '../utils/sym';

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
  [sym<'ft_border_COLOR'>('ft_border_(.*)')]: (value: string) =>
    `text-shadow:-1px 0 ${handleColor(value)},0 1px ${handleColor(
      value,
    )},1px 0 ${handleColor(value)},0 -1px ${handleColor(value)};`,
  [sym<'ft_color_COLOR'>('ft_color_(.*)')]: (value: string) =>
    `color:${handleColor(value)};`,
  [sym<'ft_size_NUMBER'>('ft_size_(.*)')]: (value: string) =>
    `font-size:${handleSize(value)};`,
  [sym<'ft_spacing_NUMBER'>('ft_spacing_(.*)')]: (value: string) =>
    `letter-spacing:${handleSize(value)};`,
  [sym<'ft_height_NUMBER'>('ft_height_(.*)')]: (value: string) =>
    `line-height:${handleSize(value)};`,
  [sym<'ft_family_FAMILY'>('ft_family_(.*)')]: (value: string) =>
    `font-family:${value};`,
  ft_family_sans: () => 'font-family:sans-serif;',
  ft_family_serif: () => 'font-family:serif;',
  ft_family_mono: () => 'font-family:monospace;',
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
