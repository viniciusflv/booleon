import { Entry } from '../lib/interfaces';
import { lowerCase, number } from '../lib/regex';

const transformTuple = [
  [
    ['sl_' as 'sl_NUMBER', `(${number})`],
    (value: string) => `transform:scale(${value}rem,${value}rem);`,
  ],
  [
    ['slx_' as 'slx_NUMBER', `(${number})`],
    (value: string) => `transform:scaleX(${value}rem);`,
  ],
  [
    ['sly_' as 'sly_NUMBER', `(${number})`],
    (value: string) => `transform:scaleY(${value}rem);`,
  ],
  [
    ['sl_neg_' as 'sl_neg_NUMBER', `(${number})`],
    (value: string) => `transform:scale(-${value}rem,-${value}rem);`,
  ],
  [
    ['slx_neg_' as 'slx_neg_NUMBER', `(${number})`],
    (value: string) => `transform:scaleX(-${value}rem);`,
  ],
  [
    ['sly_neg_' as 'sly_neg_NUMBER', `(${number})`],
    (value: string) => `transform:scaleY(-${value}rem);`,
  ],
  [
    ['rt_' as 'rt_NUMBER', `(${number})`],
    (value: string) => `transform:rotate(${value}deg);`,
  ],
  [
    ['rt_neg_' as 'rt_neg_NUMBER', `(${number})`],
    (value: string) => `transform:rotate(-${value}deg);`,
  ],
  [
    ['sk_' as 'sk_NUMBER', `(${number})`],
    (value: string) => `transform:skew(${value}deg,${value}deg);`,
  ],
  [
    ['skx_' as 'skx_NUMBER', `(${number})`],
    (value: string) => `transform:skewX(${value}deg);`,
  ],
  [
    ['sky_' as 'sky_NUMBER', `(${number})`],
    (value: string) => `transform:skewY(${value}deg);`,
  ],
  [
    ['sk_neg_' as 'sk_neg_NUMBER', `(${number})`],
    (value: string) => `transform:skew(-${value}deg,-${value}deg);`,
  ],
  [
    ['skx_neg_' as 'skx_neg_NUMBER', `(${number})`],
    (value: string) => `transform:skewX(-${value}deg);`,
  ],
  [
    ['sky_neg_' as 'sky_neg_NUMBER', `(${number})`],
    (value: string) => `transform:skewY(-${value}deg);`,
  ],
  [
    ['tl_' as 'tl_NUMBER', `(${number})`],
    (value: string) => `transform:translate(${value}rem,${value}rem);`,
  ],
  [
    ['tlx_' as 'tlx_NUMBER', `(${number})`],
    (value: string) => `transform:translateX(${value}rem);`,
  ],
  [
    ['tly_' as 'tly_NUMBER', `(${number})`],
    (value: string) => `transform:translateY(${value}rem);`,
  ],
  [
    ['tl_neg_' as 'tl_neg_NUMBER', `(${number})`],
    (value: string) => `transform:translate(-${value}rem,-${value}rem);`,
  ],
  [
    ['tlx_neg_' as 'tlx_neg_NUMBER', `(${number})`],
    (value: string) => `transform:translateX(-${value}rem);`,
  ],
  [
    ['tly_neg_' as 'tly_neg_NUMBER', `(${number})`],
    (value: string) => `transform:translateY(-${value}rem);`,
  ],
  [
    ['ori_' as 'ori_NUMBER', `((${lowerCase})(.*))`],
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

type TransformProps = Entry<typeof transformTuple>;

export { transformTuple, TransformProps };
