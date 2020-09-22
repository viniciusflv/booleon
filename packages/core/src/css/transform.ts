import { Entry, Indexer } from '../lib/interfaces';

const transformTuple = [
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

const transformIndexer: Indexer = [
  [
    () => '^(sl_)(\\d+)',
    (value) => `transform:scale(${value}rem,${value}rem);`,
  ],
  [() => '^(slx_)(\\d+)', (value) => `transform:scaleX(${value}rem);`],
  [() => '^(sly_)(\\d+)', (value) => `transform:scaleY(${value}rem);`],
  [
    () => '^(sl_neg_)(\\d+)',
    (value) => `transform:scale(-${value}rem,-${value}rem);`,
  ],
  [() => '^(slx_neg_)(\\d+)', (value) => `transform:scaleX(-${value}rem);`],
  [() => '^(sly_neg_)(\\d+)', (value) => `transform:scaleY(-${value}rem);`],
  [() => '^(rt_)(\\d+)', (value) => `transform:rotate(${value}deg);`],
  [() => '^(rt_neg_)(\\d+)', (value) => `transform:rotate(-${value}deg);`],
  [() => '^(sk_)(\\d+)', (value) => `transform:skew(${value}deg,${value}deg);`],
  [() => '^(skx_)(\\d+)', (value) => `transform:skewX(${value}deg);`],
  [() => '^(sky_)(\\d+)', (value) => `transform:skewY(${value}deg);`],
  [
    () => '^(sk_neg_)(\\d+)',
    (value) => `transform:skew(-${value}deg,-${value}deg);`,
  ],
  [() => '^(skx_neg_)(\\d+)', (value) => `transform:skewX(-${value}deg);`],
  [() => '^(sky_neg_)(\\d+)', (value) => `transform:skewY(-${value}deg);`],
  [
    () => '^(tl_)(\\d+)',
    (value) => `transform:translate(${value}rem,${value}rem);`,
  ],
  [() => '^(tlx_)(\\d+)', (value) => `transform:translateX(${value}rem);`],
  [() => '^(tly_)(\\d+)', (value) => `transform:translateY(${value}rem);`],
  [
    () => '^(tl_neg_)(\\d+)',
    (value) => `transform:translate(-${value}rem,-${value}rem);`,
  ],
  [() => '^(tlx_neg_)(\\d+)', (value) => `transform:translateX(-${value}rem);`],
  [() => '^(tly_neg_)(\\d+)', (value) => `transform:translateY(-${value}rem);`],
  [() => '^(ori_)([a-z]+).*', (value) => `transform-origin:${value};`],
];

type TransformProps = Entry<
  typeof transformTuple,
  | 'sk_NUMBER'
  | 'skx_NUMBER'
  | 'sky_NUMBER'
  | 'sk_neg_NUMBER'
  | 'skx_neg_NUMBER'
  | 'sky_neg_NUMBER'
  | 'sl_NUMBER'
  | 'slx_NUMBER'
  | 'sly_NUMBER'
  | 'sl_neg_NUMBER'
  | 'slx_neg_NUMBER'
  | 'sly_neg_NUMBER'
  | 'rt_NUMBER'
  | 'rt_neg_NUMBER'
  | 'tl_NUMBER'
  | 'tlx_NUMBER'
  | 'tly_NUMBER'
  | 'tl_neg_NUMBER'
  | 'tlx_neg_NUMBER'
  | 'tly_neg_NUMBER'
>;

export { transformTuple, transformIndexer, TransformProps };
