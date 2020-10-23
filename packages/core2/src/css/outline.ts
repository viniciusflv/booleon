import { hexColor, lowerCase, number } from '../constants/regex';
import { rem } from '../utils';

type ols_STYLE =
  | 'ols_auto'
  | 'ols_none'
  | 'ols_dotted'
  | 'ols_dashed'
  | 'ols_solid'
  | 'ols_double'
  | 'ols_groove'
  | 'ols_ridge'
  | 'ols_inset'
  | 'ols_outset'
  | 'ols_inherit'
  | 'ols_initial'
  | 'ols_unset';

export const outlineTuple = [
  ['ol_none', () => 'outline:none;'],
  [
    ['olc_' as 'olc_HEX', `(${hexColor})`],
    (value: string) => `outline-color:#${value};`,
  ],
  [
    ['olw_' as 'olw_NUMBER', `(${number})`],
    (value: string) => `outline-width:${rem(value)};`,
  ],
  [
    ['ols_' as ols_STYLE, `(${lowerCase})`],
    (value: string) => `outline-style:${value};`,
  ],
] as const;
