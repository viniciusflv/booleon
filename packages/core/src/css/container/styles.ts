import { ContainerProps } from './interfaces';
import { css } from 'styled-components';
import { reducer } from '../../utils/reducer';

const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
export const containerCss = css<ContainerProps>`
  ${reducer([
    [/^(z_)(\d+)/, (value) => `z-index: ${value};`],
    [/^(top_)(\d+)/, (value) => `top: ${value};`],
    [/^(bottom_)(\d+)/, (value) => `bottom: ${value};`],
    [/^(left_)(\d+)/, (value) => `left: ${value};`],
    [/^(right_)(\d+)/, (value) => `right: ${value};`],
    [/^(top_neg_)(\d+)/, (value) => `top: -${value};`],
    [/^(bottom_neg_)(\d+)/, (value) => `bottom: -${value};`],
    [/^(left_neg_)(\d+)/, (value) => `left: -${value};`],
    [/^(right_neg_)(\d+)/, (value) => `right: -${value};`],
  ])}
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
  ${({ hidden }) => hidden && 'display: none;'}
  ${({ visible }) => visible && 'visibility: visible;'}
  ${({ invisible }) => invisible && 'visibility: hidden;'}
`;
