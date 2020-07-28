import { css } from 'styled-components';
import { reducerCss } from '../../helpers/reducer';
import TransitionProps from './interfaces';

const colors = 'background-color, border-color, color, fill, stroke';

const transitionCss = css<TransitionProps>`
  ${reducerCss([
    [/^(ts_duration_)(\d+)/, (value: string) => `transition-duration: ${value}ms;`],
    [/^(ts_delay_)(\d+)/, (value: string) => `transition-delay: ${value}ms;`],
  ])}
  ${({ ts }) => ts && `transition-property: ${colors}, opacity, box-shadow, transform;`}
  ${({ ts_none }) => ts_none &&	'transition-property: none;'}
  ${({ ts_all }) => ts_all &&	'transition-property: all;'}
  ${({ ts_colors }) => ts_colors &&	`transition-property: ${colors};`}
  ${({ ts_opacity }) => ts_opacity &&	'transition-property: opacity;'}
  ${({ ts_shadow }) => ts_shadow &&	'transition-property: box-shadow;'}
  ${({ ts_transform }) => ts_transform &&	'transition-property: transform;'}
  ${({ ts_ease_linear }) => ts_ease_linear && 'transition-timing-function: linear;'}
  ${({ ts_ease_in }) => ts_ease_in && 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);'}
  ${({ ts_ease_out }) =>	ts_ease_out && 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);'}
  ${({ ts_ease_in_out }) =>	ts_ease_in_out && 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);'}
`;

export default transitionCss;
