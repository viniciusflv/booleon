import { Entry } from '../lib/interfaces';
import { number } from '../lib/regex';
import { divideIfNumber } from '../lib/utils';

const marginTuple = [
  [
    ['m_' as 'm_NUMBER', `(${number}|auto)`],
    (value: string) => `margin:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['mt_' as 'mt_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-top:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['mb_' as 'mb_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-bottom:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['ml_' as 'ml_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-left:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['mr_' as 'mr_NUMBER', `(${number}|auto)`],
    (value: string) => `margin-right:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['mx_' as 'mx_NUMBER', `(${number}|auto)`],
    (value: string) =>
      `margin-left:${divideIfNumber(
        value,
        'rem',
        10,
      )};margin-right:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['my_' as 'my_NUMBER', `(${number}|auto)`],
    (value: string) =>
      `margin-top:${divideIfNumber(
        value,
        'rem',
        10,
      )};margin-bottom:${divideIfNumber(value, 'rem', 10)};`,
  ],
] as const;

type MarginProps = Entry<typeof marginTuple>;

export { MarginProps, marginTuple };
