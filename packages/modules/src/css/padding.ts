import { NUMBER } from '../constants';
import { rem } from '../utils';

export const padding = [
  [
    ['p_' as `p_${number}`, `(${NUMBER})`],
    (value: string) => `padding:${rem(value)};`,
  ],
  [
    ['pt_' as `pt_${number}`, `(${NUMBER})`],
    (value: string) => `padding-top:${rem(value)};`,
  ],
  [
    ['pb_' as `pb_${number}`, `(${NUMBER})`],
    (value: string) => `padding-bottom:${rem(value)};`,
  ],
  [
    ['pl_' as `pl_${number}`, `(${NUMBER})`],
    (value: string) => `padding-left:${rem(value)};`,
  ],
  [
    ['pr_' as `pr_${number}`, `(${NUMBER})`],
    (value: string) => `padding-right:${rem(value)};`,
  ],
  [
    ['px_' as `px_${number}`, `(${NUMBER})`],
    (value: string) =>
      `padding-left:${rem(value)};padding-right:${rem(value)};`,
  ],
  [
    ['py_' as `py_${number}`, `(${NUMBER})`],
    (value: string) =>
      `padding-top:${rem(value)};padding-bottom:${rem(value)};`,
  ],
] as const;
