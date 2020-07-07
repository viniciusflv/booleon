import { ContainerProps } from './interfaces';
import { css } from 'styled-components';

const zIndex = /z_\d/g;
const top = /top_\d/g;
const bottom = /bottom_\d/g;
const left = /left_\d/g;
const right = /right_\d/g;

const dynamic = (props: any) =>
  Object.keys(props).reduce((acc, key) => {
    const splitted = key.split('_');
    const value = splitted[splitted.length - 1];
    if (key.match(zIndex)) acc += `z-index: ${value};`;
    if (key.match(top)) acc += `top: ${value};`;
    if (key.match(bottom)) acc += `bottom: ${value};`;
    if (key.match(left)) acc += `left: ${value};`;
    if (key.match(right)) acc += `right: ${value};`;
    if (key.startsWith('top_neg_')) acc += `top: -${value};`;
    if (key.startsWith('bottom_neg_')) acc += `bottom: -${value};`;
    if (key.startsWith('left_neg_')) acc += `left: -${value};`;
    if (key.startsWith('right_neg_')) acc += `right: -${value};`;
    return acc;
  }, '');

const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
export const containerCss = css<ContainerProps>`
  ${({ z_max }) => z_max && `z-index: ${MAX_SAFE_INTEGER};`}
  ${({ z_neg }) => z_neg && 'z-index: -1;'}
  ${({ z_auto }) => z_auto && 'z-index: auto;'}
  ${({ sc_auto }) => sc_auto && 'overflow: auto;'}
  ${({ sc_hidden }) => sc_hidden && 'overflow: hidden;'}
  ${({ sc_visible }) => sc_visible && 'overflow: visible;'}
  ${({ scy_auto }) => scy_auto && 'overflow-y: auto;'}
  ${({ scy_hidden }) => scy_hidden && 'overflow-y: hidden;'}
  ${({ scy_visible }) => scy_visible && 'overflow-y: visible;'}
  ${({ scx_auto }) => scx_auto && 'overflow-x: auto;'}
  ${({ scx_hidden }) => scx_hidden && 'overflow-x: hidden;'}
  ${({ scx_visible }) => scx_visible && 'overflow-x: visible;'}
  ${({ fixed }) => fixed && 'position: fixed;'}
  ${({ absolute }) => absolute && 'position: absolute;'}
  ${({ relative }) => relative && 'position: relative;'}
  ${({ sticky }) => sticky && 'position: sticky;'}
  ${({ top }) => top && 'top: 0;'}
  ${({ top_neg }) => top_neg && 'top: -100%;'}
  ${({ right }) => right && 'right: 0;'}
  ${({ right_neg }) => right_neg && 'right: -100%;'}
  ${({ bottom }) => bottom && 'bottom: 0;'}
  ${({ bottom_neg }) => bottom_neg && 'bottom: -100%;'}
  ${({ left }) => left && 'left: 0;'}
  ${({ left_neg }) => left_neg && 'left: -100%;'}
  ${({ cover }) => cover && 'left: 0;top: 0;right: 0;bottom: 0;'}
  ${({ fit_contain }) => fit_contain && 'object-fit: contain;'}
  ${({ fit_cover }) => fit_cover && 'object-fit: cover;'}
  ${({ fit_fill }) => fit_fill && 'object-fit: fill;'}
  ${({ fit_none }) => fit_none && 'object-fit: none;'}
  ${({ pointer_none }) => pointer_none && 'pointer-events: none;'}
  ${({ outline_none }) => outline_none && 'outline: none;'}
  ${({ cursor_auto }) => cursor_auto && 'cursor: auto;'}
  ${({ cursor_default }) => cursor_default && 'cursor: default;'}
  ${({ cursor_pointer }) => cursor_pointer && 'cursor: pointer;'}
  ${({ cursor_wait }) => cursor_wait && 'cursor: wait;'}
  ${({ cursor_text }) => cursor_text && 'cursor: text;'}
  ${({ cursor_move }) => cursor_move && 'cursor: move;'}
  ${({ cursor_not_allowed }) => cursor_not_allowed && 'cursor: not-allowed;'}
  ${dynamic}
`;
