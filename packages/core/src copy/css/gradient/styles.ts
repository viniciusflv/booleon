import GradientProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { hexColor } from '../../lib/constants';

const lg = (linear: string) => `background-image: linear-gradient(${linear});`;

const gradientCss: Indexer<GradientProps> = [
  [
    () => `^(gx_)${hexColor}`,
    (value) => lg(`to right,#${value},transparent,#${value}`),
  ],
  [
    () => `^(gy_)${hexColor}`,
    (value) => lg(`to top, #${value}, transparent, #${value}`),
  ],
  [() => `^(gt_)${hexColor}`, (value) => lg(`to top, transparent, #${value}`)],
  [
    () => `^(gb_)${hexColor}`,
    (value) => lg(`to bottom, transparent, #${value}`),
  ],
  [() => `^(gl_)${hexColor}`, (value) => lg(`to left, transparent, #${value}`)],
  [
    () => `^(gr_)${hexColor}`,
    (value) => lg(`to right, transparent, #${value}`),
  ],
];

export default gradientCss;
