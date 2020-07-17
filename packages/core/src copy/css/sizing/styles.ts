import { SizingProps } from './interfaces';
import { css } from 'styled-components';
import { reducer } from '../../utils/reducer';

export const sizingCss = css<SizingProps>`
  ${({ h_full }) => h_full && 'height: 100%;'}
  ${({ h_max_full }) => h_max_full && 'max-height: 100%;'}
  ${({ h_min_full }) => h_min_full && 'min-height: 100%;'}
  ${({ h_auto }) => h_auto && 'height: auto;'}
  ${({ h_max_auto }) => h_max_auto && 'max-height: auto;'}
  ${({ h_min_auto }) => h_min_auto && 'min-height: auto;'}
  ${({ w_full }) => w_full && 'width: 100%;'}
  ${({ w_max_full }) => w_max_full && 'max-width: 100%;'}
  ${({ w_min_full }) => w_min_full && 'min-width: 100%;'}
  ${({ w_auto }) => w_auto && 'width: auto;'}
  ${({ w_max_auto }) => w_max_auto && 'max-width: auto;'}
  ${({ w_min_auto }) => w_min_auto && 'min-width: auto;'}
  ${reducer([
    [/^(h_)(\d+)/, (value: string) => `height: ${value}rem;`],
    [/^(h_max_)(\d+)/, (value: string) => `max-height: ${value}rem;`],
    [/^(h_min_)(\d+)/, (value: string) => `min-height: ${value}rem;`],
    [/^(w_)(\d+)/, (value: string) => `width: ${value}rem;`],
    [/^(w_max_)(\d+)/, (value: string) => `max-width: ${value}rem;`],
    [/^(w_min_)(\d+)/, (value: string) => `min-width: ${value}rem;`],
    [/^(w_screen_)(\d+)/, (value: string) => `width: ${value}vw;`],
    [/^(w_max_screen_)(\d+)/, (value: string) => `max-width: ${value}vw;`],
    [/^(w_min_screen_)(\d+)/, (value: string) => `min-width: ${value}vw;`],
    [/^(h_screen_)(\d+)/, (value: string) => `height: ${value}vh;`],
    [/^(h_max_screen_)(\d+)/, (value: string) => `max-height: ${value}vh;`],
    [/^(h_min_screen_)(\d+)/, (value: string) => `min-height: ${value}vh;`],
  ])}
`;
