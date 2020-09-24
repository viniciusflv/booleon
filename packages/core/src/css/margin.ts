import { Entry } from '../lib/interfaces';
import { number } from '../lib/regex';
import { percentage } from '../lib/utils';

const marginTuple = [
  [
    ['m_' as 'm_NUMBER', `(${number}|auto)`],
    (value: string) => `margin:${percentage(value)}rem;`,
  ],
  [
    ['mt_' as 'mt_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-top:${percentage(value)}rem;`,
  ],
  [
    ['mb_' as 'mb_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-bottom:${percentage(value)}rem;`,
  ],
  [
    ['ml_' as 'ml_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-left:${percentage(value)}rem;`,
  ],
  [
    ['mr_' as 'mr_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-right:${percentage(value)}rem;`,
  ],
  [
    ['mx_' as 'mx_NUMBER', `(${number}|auto)`],
    (value: string) =>
      `margin-left:${percentage(value)}rem;margin-right:${percentage(
        value,
      )}rem;`,
  ],
  [
    ['my_' as 'my_NUMBER', `(${number}|auto)`],
    (value: string) =>
      `margin-top:${percentage(value)}rem;margin-bottom:${percentage(
        value,
      )}rem;`,
  ],
] as const;

type MarginProps = Entry<typeof marginTuple>;

export { MarginProps, marginTuple };
