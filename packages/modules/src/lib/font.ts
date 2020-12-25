import { HEX_COLOR, LETTER, LOWER_CASE, NUMBER } from '../constants';
import { TextAlign, TextTransform, UserSelect } from '../types';
import { rem } from '../utils';

export const font = [
  [
    ['fb_' as 'fb_HEX', `(${HEX_COLOR})`],
    (value: string) =>
      `text-shadow:-1px 0 #${value},0 1px #${value},1px 0 #${value},0 -1px #${value};`,
  ],
  [
    ['fc_' as 'fc_HEX', `(${HEX_COLOR})`],
    (value: string) => `color:#${value};`,
  ],
  [
    ['fs_' as 'fs_NUMBER', `(${NUMBER})`],
    (value: string) => `font-size:${rem(value)};`,
  ],
  [
    ['ls_' as 'ls_NUMBER', `(${NUMBER})`],
    (value: string) => `letter-spacing:${rem(value)};`,
  ],
  [
    ['ls_neg_' as 'ls_neg_NUMBER', `(${NUMBER})`],
    (value: string) => `letter-spacing:-${rem(value)};`,
  ],
  [
    ['lh_' as 'lh_NUMBER', `(${NUMBER})`],
    (value: string) => `line-height:${rem(value)};`,
  ],
  [
    ['fsl_' as UserSelect, `(${LOWER_CASE})`],
    (value: string) => `user-select:${value};`,
  ],
  [
    ['fa_' as TextAlign, `(${LOWER_CASE})`],
    (value: string) => `text-align:${value};`,
  ],
  [
    ['ft_' as TextTransform, `(${LOWER_CASE})`],
    (value: string) => `text-transform:${value};`,
  ],
  [
    ['ff_' as 'ff_FAMILY', `(${LETTER}).*`],
    (value: string) => `font-family:${value};`,
  ],
  ['ff_sans', () => 'font-family:sans-serif;'],
  ['ff_serif', () => 'font-family:serif;'],
  ['ff_mono', () => 'font-family:monospace;'],
  ['f_italic', () => 'font-style:italic;'],
  ['fw_lightest', () => 'font-weight:100;'],
  ['fw_lighter', () => 'font-weight:200;'],
  ['fw_light', () => 'font-weight:300;'],
  ['fw_normal', () => 'font-weight:400;'],
  ['fw_medium', () => 'font-weight:500;'],
  ['fw_semibold', () => 'font-weight:600;'],
  ['fw_bold', () => 'font-weight:700;'],
  ['fw_bolder', () => 'font-weight:800;'],
  ['fw_black', () => 'font-weight:900;'],
  ['li_none', () => 'list-style-type:none;'],
  ['li_disc', () => 'list-style-type:disc;'],
  ['li_decimal', () => 'list-style-type:decimal;'],
  ['li_inside', () => 'list-style-position:inside;'],
  ['li_outside', () => 'list-style-position:outside;'],
  ['f_underline', () => 'text-decoration:underline;'],
  ['f_line_through', () => 'text-decoration:line-through;'],
  ['f_no_underline', () => 'text-decoration:none;'],
  ['f_wrap_space', () => 'white-space:normal;'],
  ['f_wrap_word', () => 'overflow-wrap:break-word;'],
  ['f_wrap_letter', () => 'word-break:break-all;'],
  [
    'f_no_wrap',
    () => 'white-space:nowrap;word-break:normal;overflow-wrap:normal;',
  ],
  [
    'f_truncate',
    () => 'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;',
  ],
] as const;
