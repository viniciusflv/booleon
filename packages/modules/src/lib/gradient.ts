import { COLOR } from '../constants';
import { handleColor } from '../utils';

const lg = (linear: string) => `background-image:linear-gradient(${linear});`;

/**
 * Module for `gradient` options
 * @example
 * const Component = booleon.div(gradient);
 * @example
 * ```jsx
 * <Component gx_fff />
 * ```
 */
export const gradient = [
  [
    [
      'gx_' as 'gx_HEX' | 'gx_RED_GREEN_BLUE' | 'gx_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) =>
      lg(`to right,${handleColor(value)},transparent,${handleColor(value)}`),
  ],
  [
    [
      'gy_' as 'gy_HEX' | 'gy_RED_GREEN_BLUE' | 'gy_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) =>
      lg(`to top,${handleColor(value)},transparent,${handleColor(value)}`),
  ],
  [
    [
      'gt_' as 'gt_HEX' | 'gt_RED_GREEN_BLUE' | 'gt_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => lg(`to top,transparent,${handleColor(value)}`),
  ],
  [
    [
      'gb_' as 'gb_HEX' | 'gb_RED_GREEN_BLUE' | 'gb_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => lg(`to bottom,transparent,${handleColor(value)}`),
  ],
  [
    [
      'gl_' as 'gl_HEX' | 'gl_RED_GREEN_BLUE' | 'gl_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => lg(`to left,transparent,${handleColor(value)}`),
  ],
  [
    [
      'gr_' as 'gr_HEX' | 'gr_RED_GREEN_BLUE' | 'gr_RED_GREEN_BLUE_OPACITY',
      `(${COLOR})`,
    ],
    (value: string) => lg(`to right,transparent,${handleColor(value)}`),
  ],
] as const;
