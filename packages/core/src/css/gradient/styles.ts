import GradientProps from './interfaces';
import { Indexer } from '../../lib/interfaces';

const linearGradient = (...args: string[]) =>
  `background-image: linear-gradient(${args.join(',')});`;

const gradientCss: Indexer<GradientProps> = [
  [/^(gx_)([A-z0-9]+)/, (value) => linearGradient('to right',`#${value}`,'transparent',`#${value}`)],
  [/^(gy_)([A-z0-9]+)/, (value) => linearGradient('to top', `#${value}`, 'transparent', `#${value}`)],
  [/^(gt_)([A-z0-9]+)/, (value) => linearGradient('to top', 'transparent', `#${value}`)],
  [/^(gb_)([A-z0-9]+)/, (value) => linearGradient('to bottom', 'transparent', `#${value}`)],
  [/^(gl_)([A-z0-9]+)/, (value) => linearGradient('to left', 'transparent', `#${value}`)],
  [/^(gr_)([A-z0-9]+)/, (value) => linearGradient('to right', 'transparent', `#${value}`)],
];

export default gradientCss;