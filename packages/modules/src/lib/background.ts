import { COLOR } from '../constants';
import { handleColor } from '../utils';

/**
 * Module for `background` options
 * @example
 * const Component = booleon.div(background);
 * @example
 * ```jsx
 * <Component bg_fff />
 * ```
 */
export const background = [
  [
    [
      'bg_' as 'bg_HEX' | 'bg_RED_GREEN_BLUE' | 'bg_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => `background-color:${handleColor(value)};`,
  ],
  ['bg_img', (value: string) => `background-image:url(${value});`],
  ['bg_transparent', () => 'background-color:transparent;'],
  ['bg_repeat', () => 'background-repeat:repeat;'],
  ['bg_norepeat', () => 'background-repeat:no-repeat;'],
  ['bg_auto', () => 'background-size:auto;'],
  ['bg_cover', () => 'background-size:cover;'],
  ['bg_contain', () => 'background-size:contain;'],
  ['bg_fixed', () => 'background-attachment:fixed;'],
  ['bg_local', () => 'background-attachment:local;'],
  ['bg_scroll', () => 'background-attachment:scroll;'],
] as const;
