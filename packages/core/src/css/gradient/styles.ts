import GradientProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { hexColor } from '../../lib/constants';

const lg = (linear: string) =>
  `background-image: linear-gradient(${linear});`;

const gradientCss: Indexer<GradientProps> = [
  [new RegExp(`^(gx_)${hexColor}`), (value) => lg(`to right,#${value},transparent,#${value}`)],
  [new RegExp(`^(gy_)${hexColor}`), (value) => lg(`to top, #${value}, transparent, #${value}`)],
  [new RegExp(`^(gt_)${hexColor}`), (value) => lg(`to top, transparent, #${value}`)],
  [new RegExp(`^(gb_)${hexColor}`), (value) => lg(`to bottom, transparent, #${value}`)],
  [new RegExp(`^(gl_)${hexColor}`), (value) => lg(`to left, transparent, #${value}`)],
  [new RegExp(`^(gr_)${hexColor}`), (value) => lg(`to right, transparent, #${value}`)],
];

export default gradientCss;