import { Entry } from '../lib/interfaces';
import { number } from '../lib/regex';
import { divideIfNumber } from '../lib/utils';

const paddingTuple = [
  [
    ['p_' as 'p_NUMBER', `(${number})`],
    (value: string) => `padding:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['pt_' as 'pt_NUMBER', `(${number})`],
    (value: string) => `padding-top:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['pb_' as 'pb_NUMBER', `(${number})`],
    (value: string) => `padding-bottom:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['pl_' as 'pl_NUMBER', `(${number})`],
    (value: string) => `padding-left:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['pr_' as 'pr_NUMBER', `(${number})`],
    (value: string) => `padding-right:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['px_' as 'px_NUMBER', `(${number})`],
    (value: string) =>
      `padding-left:${divideIfNumber(
        value,
        'rem',
        10,
      )};padding-right:${divideIfNumber(value, 'rem', 10)};`,
  ],
  [
    ['py_' as 'py_NUMBER', `(${number})`],
    (value: string) =>
      `padding-top:${divideIfNumber(
        value,
        'rem',
        10,
      )};padding-bottom:${divideIfNumber(value, 'rem', 10)};`,
  ],
] as const;

type PaddingProps = Entry<typeof paddingTuple>;

export { PaddingProps, paddingTuple };
