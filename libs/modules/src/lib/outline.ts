import { theme } from '@booleon/core';
import { colors, thickness } from '@booleon/tokens';

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
  ...theme('ol_color', colors, ($) => `outline-color:${$};`),
  ...theme('ol_width', thickness, ($) => `outline-width:${$};`),
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
