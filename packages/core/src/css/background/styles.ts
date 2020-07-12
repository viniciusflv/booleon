import { BackgroundProps } from './interfaces';
import { css } from 'styled-components';
import { reducer } from '../../utils/reducer';

const linearGradient = (...args: string[]) =>
  `background-image: linear-gradient(${args.join(',')});`;

const gradientCss = css`
  :after {
    content: '';
    position: absolute;
    top: -0.08rem;
    bottom: -0.08rem;
    left: -0.08rem;
    right: -0.08rem;
    z-index: -1;
    ${reducer([
    [/^(g_op_)(\d+)/, (value) => `opacity: ${Number(value) / 100};`],
    [/^(gx_)([A-z0-9]+)/, (value) => linearGradient('to right',`#${value}`,'transparent',`#${value}`)],
    [/^(gy_)([A-z0-9]+)/, (value) => linearGradient('to top', `#${value}`, 'transparent', `#${value}`)],
    [/^(gt_)([A-z0-9]+)/, (value) => linearGradient('to top', 'transparent', `#${value}`)],
    [/^(gb_)([A-z0-9]+)/, (value) => linearGradient('to bottom', 'transparent', `#${value}`)],
    [/^(gl_)([A-z0-9]+)/, (value) => linearGradient('to left', 'transparent', `#${value}`)],
    [/^(gr_)([A-z0-9]+)/, (value) => linearGradient('to right', 'transparent', `#${value}`)],
  ])}
  }
`;

export const backgroundCss = css<BackgroundProps>`
  ${({ bg_img }) => bg_img && `background-image: url(${bg_img});`}
  ${({ bg_repeat }) => bg_repeat && 'background-repeat: repeat;'}
  ${({ bg_norepeat }) => bg_norepeat && 'background-repeat: no-repeat;'}
  ${({ bg_auto }) => bg_auto && 'background-size: auto;'}
  ${({ bg_cover }) => bg_cover && 'background-size: cover;'}
  ${({ bg_contain }) => bg_contain && 'background-size: contain;'}
  ${({ bg_fixed }) => bg_fixed && 'background-attachment: fixed;'}
  ${({ bg_local }) => bg_local && 'background-attachment: local;'}
  ${({ bg_scroll }) => bg_scroll && 'background-attachment: scroll;'}
  ${reducer([
    [/^(bg_)([A-z0-9]+)/, (value) => `background-color: #${value};`],
    [/^(op_)(\d+)/, (value) => `opacity: ${Number(value) / 100};`],
  ])}
  ${gradientCss}
`;
