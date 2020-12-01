import { HEX_COLOR, LOWER_CASE, NUMBER } from '../constants';
import { OutlineStyle } from '../types';
import { rem } from '../utils';

export const outline = [
  ['ol_none', () => 'outline:none;'],
  [
    ['olc_' as 'olc_HEX', `(${HEX_COLOR})`],
    (value: string) => `outline-color:#${value};`,
  ],
  [
    ['olw_' as 'olw_NUMBER', `(${NUMBER})`],
    (value: string) => `outline-width:${rem(value)};`,
  ],
  [
    ['ols_' as `ols_${OutlineStyle}`, `(${LOWER_CASE})`],
    (value: string) => `outline-style:${value};`,
  ],
] as const;
