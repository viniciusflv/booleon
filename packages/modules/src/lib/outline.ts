import { handleColor } from '../utils';
import { handleSize } from '../utils/handleSize';
import { sym } from '../utils/sym';

/**
 * Module for `outline` options
 * @example
 * const Component = booleon.div(outline);
 * @example
 * ```jsx
 * <Component ol_style_solid ol_width_12 ol_color_fff />
 * ```
 */
export const outline = {
  [sym<'ol_color_COLOR'>('ol_color_(.*)')]: (value: string) =>
    `outline-color:${handleColor(value)};`,
  [sym<'ol_width_NUMBER'>('ol_width_(.*)')]: (value: string) =>
    `outline-width:${handleSize(value)};`,
  ol_none: () => 'outline:none;',
  ol_style_auto: () => 'outline-style:auto;',
  ol_style_none: () => 'outline-style:none;',
  ol_style_dotted: () => 'outline-style:dotted;',
  ol_style_dashed: () => 'outline-style:dashed;',
  ol_style_solid: () => 'outline-style:solid;',
  ol_style_double: () => 'outline-style:double;',
  ol_style_groove: () => 'outline-style:groove;',
  ol_style_ridge: () => 'outline-style:ridge;',
  ol_style_inset: () => 'outline-style:inset;',
  ol_style_outset: () => 'outline-style:outset;',
  ol_style_inherit: () => 'outline-style:inherit;',
  ol_style_initial: () => 'outline-style:initial;',
  ol_style_unset: () => 'outline-style:unset;',
};
