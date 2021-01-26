import { handleColor } from '../utils';
import { sym } from '../utils/sym';

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
export const gradient = {
  [sym<'gx_COLOR'>('gx_(.*)')]: (value: string) =>
    lg(`to right,${handleColor(value)},transparent,${handleColor(value)}`),
  [sym<'gy_COLOR'>('gy_(.*)')]: (value: string) =>
    lg(`to top,${handleColor(value)},transparent,${handleColor(value)}`),
  [sym<'gt_COLOR'>('gt_(.*)')]: (value: string) =>
    lg(`to top,transparent,${handleColor(value)}`),
  [sym<'gb_COLOR'>('gb_(.*)')]: (value: string) =>
    lg(`to bottom,transparent,${handleColor(value)}`),
  [sym<'gl_COLOR'>('gl_(.*)')]: (value: string) =>
    lg(`to left,transparent,${handleColor(value)}`),
  [sym<'gr_COLOR'>('gr_(.*)')]: (value: string) =>
    lg(`to right,transparent,${handleColor(value)}`),
};
