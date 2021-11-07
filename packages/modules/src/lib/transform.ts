import { percentage, sym } from '../utils';

/**
 * Module for `transform` options
 * @example
 * const Component = booleon.div(transform);
 * @example
 * ```jsx
 * <Component
 *  sl_10
 *  rt_10
 *  sk_10
 *  tl_10
 *  ori_top
 * />
 * ```
 */
export const transform = {
  [sym('tf_sl_$')]: ($: string) =>
    `transform:scale(${percentage($)},${percentage($)});`,
  [sym('tf_slx_$')]: ($: string) => `transform:scaleX(${percentage($)});`,
  [sym('tf_sly_$')]: ($: string) => `transform:scaleY(${percentage($)});`,
  [sym('tf_rt_$')]: ($: string) => `transform:rotate(${$});`,
  [sym('tf_sk_$')]: ($: string) => `transform:skew(${$},${$});`,
  [sym('tf_skx_$')]: ($: string) => `transform:skewX(${$});`,
  [sym('tf_sky_$')]: ($: string) => `transform:skewY(${$});`,
  [sym('tf_tl_$')]: ($: string) => `transform:translate(${$},${$});`,
  [sym('tf_tlx_$')]: ($: string) => `transform:translateX(${$});`,
  [sym('tf_tly_$')]: ($: string) => `transform:translateY(${$});`,
  [sym('tf_ori_$')]: ($: string) => `transform-origin:${$.replace(/_/g, ' ')};`,
};
