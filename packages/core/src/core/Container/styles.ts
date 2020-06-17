import { Background } from '../Background';
import { Base } from '../Base';
import { Border } from '../Border';
import { ContainerProps } from './interfaces';
import { Height } from '../Height';
import { Margin } from '../Margin';
import { Padding } from '../Padding';
import { Shadow } from '../Shadow';
import { Width } from '../Width';
import styled from 'styled-components';

const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
export const ContainerStyle = styled(
  Height.withComponent(
    Width.withComponent(
      Margin.withComponent(
        Padding.withComponent(
          Background.withComponent(
            Border.withComponent(Shadow.withComponent(Base)),
          ),
        ),
      ),
    ),
  ),
)<ContainerProps>`
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
`;
