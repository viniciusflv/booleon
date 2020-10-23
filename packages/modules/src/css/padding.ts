import { number } from '../constants';
import { rem } from '../utils';

export const padding = [
  [
    ['p_' as 'p_NUMBER', `(${number})`],
    (value: string) => `padding:${rem(value)};`,
  ],
  [
    ['pt_' as 'pt_NUMBER', `(${number})`],
    (value: string) => `padding-top:${rem(value)};`,
  ],
  [
    ['pb_' as 'pb_NUMBER', `(${number})`],
    (value: string) => `padding-bottom:${rem(value)};`,
  ],
  [
    ['pl_' as 'pl_NUMBER', `(${number})`],
    (value: string) => `padding-left:${rem(value)};`,
  ],
  [
    ['pr_' as 'pr_NUMBER', `(${number})`],
    (value: string) => `padding-right:${rem(value)};`,
  ],
  [
    ['px_' as 'px_NUMBER', `(${number})`],
    (value: string) =>
      `padding-left:${rem(value)};padding-right:${rem(value)};`,
  ],
  [
    ['py_' as 'py_NUMBER', `(${number})`],
    (value: string) =>
      `padding-top:${rem(value)};padding-bottom:${rem(value)};`,
  ],
] as const;
