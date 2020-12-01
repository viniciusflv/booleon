import { NUMBER } from '../constants';
import { rem } from '../utils';

export const margin = [
  [
    ['m_' as `m_${number}`, `(${NUMBER}|auto)`],
    (value: string) => `margin:${rem(value)};`,
  ],
  [
    ['mt_' as `mt_${number}`, `(${NUMBER}|auto)`],
    (value: string) => `margin-top:${rem(value)};`,
  ],
  [
    ['mb_' as `mb_${number}`, `(${NUMBER}|auto)`],
    (value: string) => `margin-bottom:${rem(value)};`,
  ],
  [
    ['ml_' as `ml_${number}`, `(${NUMBER}|auto)`],
    (value: string) => `margin-left:${rem(value)};`,
  ],
  [
    ['mr_' as `mr_${number}`, `(${NUMBER}|auto)`],
    (value: string) => `margin-right:${rem(value)};`,
  ],
  [
    ['mx_' as `mx_${number}`, `(${NUMBER}|auto)`],
    (value: string) => `margin-left:${rem(value)};margin-right:${rem(value)};`,
  ],
  [
    ['my_' as `my_${number}`, `(${NUMBER}|auto)`],
    (value: string) => `margin-top:${rem(value)};margin-bottom:${rem(value)};`,
  ],
] as const;
