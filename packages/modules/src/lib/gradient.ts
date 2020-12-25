import { HEX_COLOR } from '../constants';

const lg = (linear: string) => `background-image:linear-gradient(${linear});`;

export const gradient = [
  [
    ['gx_' as 'gx_HEX', `(${HEX_COLOR})`],
    (value: string) => lg(`to right,#${value},transparent,#${value}`),
  ],
  [
    ['gy_' as 'gy_HEX', `(${HEX_COLOR})`],
    (value: string) => lg(`to top,#${value},transparent,#${value}`),
  ],
  [
    ['gt_' as 'gt_HEX', `(${HEX_COLOR})`],
    (value: string) => lg(`to top,transparent,#${value}`),
  ],
  [
    ['gb_' as 'gb_HEX', `(${HEX_COLOR})`],
    (value: string) => lg(`to bottom,transparent,#${value}`),
  ],
  [
    ['gl_' as 'gl_HEX', `(${HEX_COLOR})`],
    (value: string) => lg(`to left,transparent,#${value}`),
  ],
  [
    ['gr_' as 'gr_HEX', `(${HEX_COLOR})`],
    (value: string) => lg(`to right,transparent,#${value}`),
  ],
] as const;
