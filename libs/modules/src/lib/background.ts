import { theme } from '@booleon/core';
import { colors } from '@booleon/tokens';

/**
 * Module for `background` options
 * @example
 * const Component = booleon.div(background);
 * @example
 * ```jsx
 * <Component bg_color_fff />
 * ```
 */
export const background = {
  ...theme('bg_color', colors, ($) => `background-color:${$};`),
  bg_img: (value: string) => `background-image:url(${value});`,
  bg_transparent: () => 'background-color:transparent;',
  bg_repeat: () => 'background-repeat:repeat;',
  bg_norepeat: () => 'background-repeat:no-repeat;',
  bg_auto: () => 'background-size:auto;',
  bg_cover: () => 'background-size:cover;',
  bg_contain: () => 'background-size:contain;',
  bg_fixed: () => 'background-attachment:fixed;',
  bg_local: () => 'background-attachment:local;',
  bg_scroll: () => 'background-attachment:scroll;',
};
