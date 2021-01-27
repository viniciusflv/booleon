import { percentage, handleShadow, sym, handleSize } from '../utils';

/**
 * Module for `filter` options
 * @example
 * const Component = booleon.div(filter);
 * @example
 * ```jsx
 * <Component ft_invert_100$ />
 * ```
 */
export const filter = {
  [sym<'ft_VALUE'>('ft_(.*)')]: (key: string) => {
    const [attr, value] = key.split('_');
    if (attr === 'sd') {
      return `filter:${handleShadow(Number(value), false, true)}`;
    }
    return `filter:${attr.replace('hue', 'hue-rotate')}(${handleSize(
      value,
      percentage,
    )});`;
  },
};
