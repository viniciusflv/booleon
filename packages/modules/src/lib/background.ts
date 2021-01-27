import { handleColor, sym } from '../utils';

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
  [sym<'bg_color_COLOR'>('bg_color_(.*)')]: (value: string) =>
    `background-color:${handleColor(value)};`,
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
