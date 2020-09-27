import { Entry } from '../lib/interfaces';
import { hexColor, lowerCase, number } from '../lib/regex';
import { divideIfNumber } from '../lib/utils';

const outlineTuple = [
  ['ol_none', () => 'outline:none;'],
  [
    ['olc_' as 'olc_HEX', `(${hexColor})`],
    (value: string) => `outline-color:#${value};`,
  ],
  [
    ['olw_' as 'olw_NUMBER', `(${number})`],
    (value: string) => `outline-width:${divideIfNumber(value, 'rem')};`,
  ],
  [
    ['ols_' as 'ols_STYLE', `(${lowerCase})`],
    (value: string) => `outline-style:${value};`,
  ],
] as const;

type OutlineProps = Entry<typeof outlineTuple>;

export { outlineTuple, OutlineProps };
