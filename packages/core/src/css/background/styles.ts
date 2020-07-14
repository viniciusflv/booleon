import { BackgroundProps } from './interfaces';
import { css } from 'styled-components';
import { reducer } from '../../utils/reducer';

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
`;
