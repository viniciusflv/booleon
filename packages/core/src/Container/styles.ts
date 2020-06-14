import { Height } from '../Height';
import { Width } from '../Width';
import styled from 'styled-components';

const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
export const ContainerStyle = styled(Height.withComponent(Width))<any>`
  box-sizing: border-box;
  ${({ z_max }) => z_max && `z-index: ${MAX_SAFE_INTEGER};`}
  ${({ z_neg }) => z_neg && 'z-index: -1;'}
  ${({ z_auto }) => z_auto && 'z-index: auto;'}
  ${({ z_0 }) => z_0 && 'z-index: 0;'}
  ${({ z_10 }) => z_10 && 'z-index: 10;'}
  ${({ z_20 }) => z_20 && 'z-index: 20;'}
  ${({ z_30 }) => z_30 && 'z-index: 30;'}
  ${({ z_40 }) => z_40 && 'z-index: 40;'}
  ${({ z_50 }) => z_50 && 'z-index: 50;'}
  ${({ s_auto }) => s_auto && 'overflow: auto;'}
  ${({ s_hidden }) => s_hidden && 'overflow: hidden;'}
  ${({ s_visible }) => s_visible && 'overflow: visible;'}
  ${({ sy_auto }) => sy_auto && 'overflow-y: auto;'}
  ${({ sy_hidden }) => sy_hidden && 'overflow-y: hidden;'}
  ${({ sy_visible }) => sy_visible && 'overflow-y: visible;'}
  ${({ sx_auto }) => sx_auto && 'overflow-x: auto;'}
  ${({ sx_hidden }) => sx_hidden && 'overflow-x: hidden;'}
  ${({ sx_visible }) => sx_visible && 'overflow-x: visible;'}
  ${({ fixed }) => fixed && 'position: fixed;'}
  ${({ absolute }) => absolute && 'position: absolute;'}
  ${({ relative }) => relative && 'position: relative;'}
  ${({ sticky }) => sticky && 'position: sticky;'}
  
  ${({ top }) => top && 'top: 0;'}
  ${({ right }) => right && 'right: 0;'}
  ${({ bottom }) => bottom && 'bottom: 0;'}
  ${({ left }) => left && 'left: 0;'}
  ${({ cover }) => cover && 'left: 0;top: 0;right: 0;bottom: 0;'}

  
`;

// .object-contain	object-fit: contain;
// .object-cover	object-fit: cover;
// .object-fill	object-fit: fill;
// .object-none	object-fit: none;
// .object-scale-down	object-fit: scale-down;

// .pointer-events-none	pointer-events: none;
// .outline-none	outline: 0;
// .cursor-auto	cursor: auto;
// .cursor-default	cursor: default;
// .cursor-pointer	cursor: pointer;
// .cursor-wait	cursor: wait;
// .cursor-text	cursor: text;
// .cursor-move	cursor: move;
// .cursor-not-allowed	cursor: not-allowed;