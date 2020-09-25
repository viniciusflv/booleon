import { Entry } from '../lib/interfaces';
import { number } from '../lib/regex';
import { percentage } from '../lib/utils';

const paddingTuple = [
  [
    ['p_' as 'p_NUMBER', `(${number})`],
    (value: string) => `padding:${percentage(value, 'rem')};`,
  ],
  [
    ['pt_' as 'pt_NUMBER', `(${number})`],
    (value: string) => `padding-top:${percentage(value, 'rem')};`,
  ],
  [
    ['pb_' as 'pb_NUMBER', `(${number})`],
    (value: string) => `padding-bottom:${percentage(value, 'rem')};`,
  ],
  [
    ['pl_' as 'pl_NUMBER', `(${number})`],
    (value: string) => `padding-left:${percentage(value, 'rem')};`,
  ],
  [
    ['pr_' as 'pr_NUMBER', `(${number})`],
    (value: string) => `padding-right:${percentage(value, 'rem')};`,
  ],
  [
    ['px_' as 'px_NUMBER', `(${number})`],
    (value: string) =>
      `padding-left:${percentage(value, 'rem')};padding-right:${percentage(
        value,
        'rem',
      )};`,
  ],
  [
    ['py_' as 'py_NUMBER', `(${number})`],
    (value: string) =>
      `padding-top:${percentage(value, 'rem')};padding-bottom:${percentage(
        value,
        'rem',
      )};`,
  ],
] as const;

type PaddingProps = Entry<typeof paddingTuple>;

export { PaddingProps, paddingTuple };
