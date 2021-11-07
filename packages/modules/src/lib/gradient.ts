import { handleColor, sym } from '../utils';

const linear = (linear: string) =>
  `background-image:linear-gradient(${linear});`;

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
  [sym('gdx_linear_$')]: ($: string) =>
    linear(`to right,${handleColor($)},transparent,${handleColor($)}`),
  [sym('gdy_linear_$')]: ($: string) =>
    linear(`to top,${handleColor($)},transparent,${handleColor($)}`),
  [sym('gdt_linear_$')]: ($: string) =>
    linear(`to top,transparent,${handleColor($)}`),
  [sym('gdb_linear_$')]: ($: string) =>
    linear(`to bottom,transparent,${handleColor($)}`),
  [sym('gdl_linear_$')]: ($: string) =>
    linear(`to left,transparent,${handleColor($)}`),
  [sym('gdr_linear_$')]: ($: string) =>
    linear(`to right,transparent,${handleColor($)}`),
};
