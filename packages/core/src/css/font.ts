import { Entry, Indexer } from '../lib/interfaces';
import { hexColor } from 'lib/regex';
import { percentage } from 'lib/utils';

const fontTuple = [
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

const fontIndexer: Indexer = [
  [
    () => `^(fb_)${hexColor}`,
    (value) =>
      `text-shadow:-1px0#${value},01px#${value},1px0#${value},0-1px#${value};`,
  ],
  [() => `^(fc_)${hexColor}`, (value) => `color:#${value};`],
  [() => '^(fs_)(\\d+)', (value) => `font-size:${percentage(value)}rem;`],
  [() => '^(fsl_)([a-z]+)', (value) => `user-select:${value};`],
  [() => '^(ls_)(\\d+)', (value) => `letter-spacing:${percentage(value)}rem;`],
  [
    () => '^(ls_neg_)(\\d+)',
    (value) => `letter-spacing:-${percentage(value)}rem;`,
  ],
  [() => '^(lh_)(\\d+)', (value) => `line-height:${percentage(value)}rem;`],
  [() => '^(fa_)([a-z]+)', (value) => `text-align:${value};`],
  [() => '^(ft_)([a-z]+)', (value) => `text-transform:${value};`],
  [() => '^(ff_)([A-z]+).*', (value) => `font-family:${value};`],
];

type FontProps = Entry<
  typeof fontTuple,
  | 'fb_HEX'
  | 'fc_HEX'
  | 'fs_NUMBER'
  | 'fsl_none'
  | 'fsl_text'
  | 'fsl_all'
  | 'fsl_auto'
  | 'ls_NUMBER'
  | 'ls_neg_NUMBER'
  | 'lh_NUMBER'
  | 'fa_ALIGN'
  | 'ft_TRANSFORM'
  | 'ff_FAMILY'
>;

export { fontTuple, fontIndexer, FontProps };
