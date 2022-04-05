import { theme } from '@booleon/core';
import { colors } from '@booleon/tokens';

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
  ...theme('gdx_linear', colors, ($) =>
    linear(`to right,${$},transparent,${$}`),
  ),
  ...theme('gdy_linear', colors, ($) => linear(`to top,${$},transparent,${$}`)),
  ...theme('gdt_linear', colors, ($) => linear(`to top,transparent,${$}`)),
  ...theme('gdb_linear', colors, ($) => linear(`to bottom,transparent,${$}`)),
  ...theme('gdl_linear', colors, ($) => linear(`to left,transparent,${$}`)),
  ...theme('gdr_linear', colors, ($) => linear(`to right,transparent,${$}`)),
};
