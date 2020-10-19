import { hexColor } from '../lib/regex';

const lg = (linear: string) => `background-image:linear-gradient(${linear});`;

export const gradientTuple = [
  [
    ['gx_' as 'gx_HEX', `(${hexColor})`],
    (value: string) => lg(`to right,#${value},transparent,#${value}`),
  ],
  [
    ['gy_' as 'gy_HEX', `(${hexColor})`],
    (value: string) => lg(`to top,#${value},transparent,#${value}`),
  ],
  [
    ['gt_' as 'gt_HEX', `(${hexColor})`],
    (value: string) => lg(`to top,transparent,#${value}`),
  ],
  [
    ['gb_' as 'gb_HEX', `(${hexColor})`],
    (value: string) => lg(`to bottom,transparent,#${value}`),
  ],
  [
    ['gl_' as 'gl_HEX', `(${hexColor})`],
    (value: string) => lg(`to left,transparent,#${value}`),
  ],
  [
    ['gr_' as 'gr_HEX', `(${hexColor})`],
    (value: string) => lg(`to right,transparent,#${value}`),
  ],
] as const;
