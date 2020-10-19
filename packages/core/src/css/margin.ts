import { number } from '../lib/regex';
import { rem } from '../lib/utils';

export const marginTuple = [
  [
    ['m_' as 'm_NUMBER', `(${number}|auto)`],
    (value: string) => `margin:${rem(value)};`,
  ],
  [
    ['mt_' as 'mt_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-top:${rem(value)};`,
  ],
  [
    ['mb_' as 'mb_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-bottom:${rem(value)};`,
  ],
  [
    ['ml_' as 'ml_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-left:${rem(value)};`,
  ],
  [
    ['mr_' as 'mr_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-right:${rem(value)};`,
  ],
  [
    ['mx_' as 'mx_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-left:${rem(value)};margin-right:${rem(value)};`,
  ],
  [
    ['my_' as 'my_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-top:${rem(value)};margin-bottom:${rem(value)};`,
  ],
] as const;
