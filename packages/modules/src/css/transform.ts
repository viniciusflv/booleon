import { LOWER_CASE, NUMBER } from '../constants';
import { TransformOrigin } from '../types';
import { rem, percentage } from '../utils';

export const transform = [
  [
    ['sl_' as `sl_${number}`, `(${NUMBER})`],
    (value: string) =>
      `transform:scale(${percentage(value)},${percentage(value)});`,
  ],
  [
    ['slx_' as `slx_${number}`, `(${NUMBER})`],
    (value: string) => `transform:scaleX(${percentage(value)});`,
  ],
  [
    ['sly_' as `sly_${number}`, `(${NUMBER})`],
    (value: string) => `transform:scaleY(${percentage(value)});`,
  ],
  [
    ['sl_neg_' as `sl_neg_${number}`, `(${NUMBER})`],
    (value: string) =>
      `transform:scale(-${percentage(value)},-${percentage(value)});`,
  ],
  [
    ['slx_neg_' as `slx_neg_${number}`, `(${NUMBER})`],
    (value: string) => `transform:scaleX(-${percentage(value)});`,
  ],
  [
    ['sly_neg_' as `sly_neg_${number}`, `(${NUMBER})`],
    (value: string) => `transform:scaleY(-${percentage(value)});`,
  ],
  [
    ['rt_' as `rt_${number}`, `(${NUMBER})`],
    (value: string) => `transform:rotate(${value}deg);`,
  ],
  [
    ['rt_neg_' as `rt_neg_${number}`, `(${NUMBER})`],
    (value: string) => `transform:rotate(-${value}deg);`,
  ],
  [
    ['sk_' as `sk_${number}`, `(${NUMBER})`],
    (value: string) => `transform:skew(${value}deg,${value}deg);`,
  ],
  [
    ['skx_' as `skx_${number}`, `(${NUMBER})`],
    (value: string) => `transform:skewX(${value}deg);`,
  ],
  [
    ['sky_' as `sky_${number}`, `(${NUMBER})`],
    (value: string) => `transform:skewY(${value}deg);`,
  ],
  [
    ['sk_neg_' as `sk_neg_${number}`, `(${NUMBER})`],
    (value: string) => `transform:skew(-${value}deg,-${value}deg);`,
  ],
  [
    ['skx_neg_' as `skx_neg_${number}`, `(${NUMBER})`],
    (value: string) => `transform:skewX(-${value}deg);`,
  ],
  [
    ['sky_neg_' as `sky_neg_${number}`, `(${NUMBER})`],
    (value: string) => `transform:skewY(-${value}deg);`,
  ],
  [
    ['tl_' as `tl_${number}`, `(${NUMBER})`],
    (value: string) => `transform:translate(${rem(value)},${rem(value)});`,
  ],
  [
    ['tlx_' as `tlx_${number}`, `(${NUMBER})`],
    (value: string) => `transform:translateX(${rem(value)});`,
  ],
  [
    ['tly_' as `tly_${number}`, `(${NUMBER})`],
    (value: string) => `transform:translateY(${rem(value)});`,
  ],
  [
    ['tl_neg_' as `tl_neg_${number}`, `(${NUMBER})`],
    (value: string) => `transform:translate(-${rem(value)},-${rem(value)});`,
  ],
  [
    ['tlx_neg_' as `tlx_neg_${number}`, `(${NUMBER})`],
    (value: string) => `transform:translateX(-${rem(value)});`,
  ],
  [
    ['tly_neg_' as `tly_neg_${number}`, `(${NUMBER})`],
    (value: string) => `transform:translateY(-${rem(value)});`,
  ],
  [
    [
      'ori_' as `ori_${TransformOrigin}`,
      `((${LOWER_CASE}|${NUMBER}${LOWER_CASE})(.*))`,
    ],
    (value: string) => `transform-origin:${value};`,
  ],
  ['tl_full', () => 'transform:translate(100%,100%);'],
  ['tl_half', () => 'transform:translate(50%,50%);'],
  ['tl_full_neg', () => 'transform:translate(-100%,-100%);'],
  ['tl_half_neg', () => 'transform:translate(-50%,-50%);'],
  ['tlx_full', () => 'transform:translateX(100%);'],
  ['tlx_half', () => 'transform:translateX(50%);'],
  ['tlx_full_neg', () => 'transform:translateX(-100%);'],
  ['tlx_half_neg', () => 'transform:translateX(-50%);'],
  ['tly_full', () => 'transform:translateY(100%);'],
  ['tly_half', () => 'transform:translateY(50%);'],
  ['tly_full_neg', () => 'transform:translateY(-100%);'],
  ['tly_half_neg', () => 'transform:translateY(-50%);'],
] as const;
