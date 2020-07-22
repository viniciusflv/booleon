import { css } from 'styled-components';
import { reducerCss } from '../../helpers/reducer';
import OutlineProps from './interfaces';

const outlineCss = css<OutlineProps>`
  ${reducerCss([
    [/^(olw_)(\d+)/, (value: string) => `outline-width: ${Number(value) / 10}rem;`],
    [/^(olc_)([A-z0-9]+)/, (value: string) => `outline-color: #${value};`],
  ])}
  ${({ ol_none }) => ol_none && 'outline: none;'}
  ${({ ol_dotted }) => ol_dotted && 'outline-style: dotted;'}
  ${({ ol_dashed }) => ol_dashed && 'outline-style: dashed;'}
  ${({ ol_solid }) => ol_solid && 'outline-style: solid;'}
  ${({ ol_double }) => ol_double && 'outline-style: double;'}
  ${({ ol_groove }) => ol_groove && 'outline-style: groove;'}
  ${({ ol_ridge }) => ol_ridge && 'outline-style: ridge;'}
  ${({ ol_inset }) => ol_inset && 'outline-style: inset;'}
  ${({ ol_outset }) => ol_outset && 'outline-style: outset;'}
`;

export default outlineCss;