import { css } from 'styled-components';
import { reducerCss } from '../../helpers/reducer';
import GradientProps from './interfaces';

const linearGradient = (...args: string[]) =>
  `background-image: linear-gradient(${args.join(',')});`;

const gradientCss = css<GradientProps>`
  ${reducerCss([
    [/^(gx_)([A-z0-9]+)/, (value: string) => linearGradient('to right',`#${value}`,'transparent',`#${value}`)],
    [/^(gy_)([A-z0-9]+)/, (value: string) => linearGradient('to top', `#${value}`, 'transparent', `#${value}`)],
    [/^(gt_)([A-z0-9]+)/, (value: string) => linearGradient('to top', 'transparent', `#${value}`)],
    [/^(gb_)([A-z0-9]+)/, (value: string) => linearGradient('to bottom', 'transparent', `#${value}`)],
    [/^(gl_)([A-z0-9]+)/, (value: string) => linearGradient('to left', 'transparent', `#${value}`)],
    [/^(gr_)([A-z0-9]+)/, (value: string) => linearGradient('to right', 'transparent', `#${value}`)],
  ])}
`;

export default gradientCss;