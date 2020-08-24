import TransformProps from './interfaces';
import { Indexer } from '../../lib/interfaces';

const transformCss: Indexer<TransformProps> = [
  [
    () => /^(sl_)(\d+)/,
    (value) => `transform: scale(${value}rem,${value}rem);`,
  ],
  [() => /^(slx_)(\d+)/, (value) => `transform: scaleX(${value}rem);`],
  [() => /^(sly_)(\d+)/, (value) => `transform: scaleY(${value}rem);`],
  [
    () => /^(sl_neg_)(\d+)/,
    (value) => `transform: scale(-${value}rem,-${value}rem);`,
  ],
  [() => /^(slx_neg_)(\d+)/, (value) => `transform: scaleX(-${value}rem);`],
  [() => /^(sly_neg_)(\d+)/, (value) => `transform: scaleY(-${value}rem);`],
  [() => /^(rt_)(\d+)/, (value) => `transform: rotate(${value}deg);`],
  [() => /^(rt_neg_)(\d+)/, (value) => `transform: rotate(-${value}deg);`],
  [() => /^(sk_)(\d+)/, (value) => `transform: skew(${value}deg,${value}deg);`],
  [() => /^(skx_)(\d+)/, (value) => `transform: skewX(${value}deg);`],
  [() => /^(sky_)(\d+)/, (value) => `transform: skewY(${value}deg);`],
  [
    () => /^(sk_neg_)(\d+)/,
    (value) => `transform: skew(-${value}deg,-${value}deg);`,
  ],
  [() => /^(skx_neg_)(\d+)/, (value) => `transform: skewX(-${value}deg);`],
  [() => /^(sky_neg_)(\d+)/, (value) => `transform: skewY(-${value}deg);`],
  [
    () => /^(tl_)(\d+)/,
    (value) => `transform: translate(${value}rem,${value}rem);`,
  ],
  [() => /^(tlx_)(\d+)/, (value) => `transform: translateX(${value}rem);`],
  [() => /^(tly_)(\d+)/, (value) => `transform: translateY(${value}rem);`],
  [
    () => /^(tl_neg_)(\d+)/,
    (value) => `transform: translate(-${value}rem,-${value}rem);`,
  ],
  [() => /^(tlx_neg_)(\d+)/, (value) => `transform: translateX(-${value}rem);`],
  [() => /^(tly_neg_)(\d+)/, (value) => `transform: translateY(-${value}rem);`],
  [() => /^(ori_)([a-z]+).*/, (value) => `transform-origin: ${value};`],
  ['tl_full', () => 'transform: translate(100%, 100%);'],
  ['tl_half', () => 'transform: translate(50%, 50%);'],
  ['tl_full_neg', () => 'transform: translate(-100%, -100%);'],
  ['tl_half_neg', () => 'transform: translate(-50%, -50%);'],
  ['tlx_full', () => 'transform: translateX(100%);'],
  ['tlx_half', () => 'transform: translateX(50%);'],
  ['tlx_full_neg', () => 'transform: translateX(-100%);'],
  ['tlx_half_neg', () => 'transform: translateX(-50%);'],
  ['tly_full', () => 'transform: translateY(100%);'],
  ['tly_half', () => 'transform: translateY(50%);'],
  ['tly_full_neg', () => 'transform: translateY(-100%);'],
  ['tly_half_neg', () => 'transform: translateY(-50%);'],
];

export default transformCss;
