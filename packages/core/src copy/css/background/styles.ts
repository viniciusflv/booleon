import { css } from 'styled-components';
import BackgroundProps from './interfaces';
// import { reducerCss } from '../../utils/reducer';

export default css<BackgroundProps>`
  ${({ bg_img }) => bg_img && `background-image: url(${bg_img});`}
  ${({ bg_repeat }) => bg_repeat && 'background-repeat: repeat;'}
  ${({ bg_norepeat }) => bg_norepeat && 'background-repeat: no-repeat;'}
  ${({ bg_auto }) => bg_auto && 'background-size: auto;'}
  ${({ bg_cover }) => bg_cover && 'background-size: cover;'}
  ${({ bg_contain }) => bg_contain && 'background-size: contain;'}
  ${({ bg_fixed }) => bg_fixed && 'background-attachment: fixed;'}
  ${({ bg_local }) => bg_local && 'background-attachment: local;'}
  ${({ bg_scroll }) => bg_scroll && 'background-attachment: scroll;'}
`;
  
// ${reducerCss([
//   [/^(bg_)([A-z0-9]+)/, (value: string) => `background-color: #${value};`],
//   [/^(op_)(\d+)/, (value: string) => `opacity: ${Number(value) / 100};`],
// ])}