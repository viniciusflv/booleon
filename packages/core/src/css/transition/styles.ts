import { TransitionProps } from './interfaces';
import { css } from 'styled-components';

const dynamic = (props: TransitionProps) => Object.keys(props).reduce((acc, key) => {
  const splitted = key.split('_');
  const value = splitted[splitted.length - 1];
  if (key.startsWith('ts_duration')) acc += `transition-duration: ${value}ms;`;
  if (key.startsWith('ts_delay')) acc += `transition-delay: ${value}ms;`;
  return acc;
}, '');

const colors = 'background-color, border-color, color, fill, stroke';

export const transitionCss = css<TransitionProps>`
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
  ${dynamic}
`;