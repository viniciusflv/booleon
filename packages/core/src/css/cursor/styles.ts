import { css } from 'styled-components';
import CursorProps from './interfaces';

const cursorCss = css<CursorProps>`
  ${({ cr_auto }) => cr_auto && 'cursor: auto;'}
  ${({ cr_default }) => cr_default && 'cursor: default;'}
  ${({ cr_pointer }) => cr_pointer && 'cursor: pointer;'}
  ${({ cr_wait }) => cr_wait && 'cursor: wait;'}
  ${({ cr_text }) => cr_text && 'cursor: text;'}
  ${({ cr_move }) => cr_move && 'cursor: move;'}
  ${({ cr_disallowed }) => cr_disallowed && 'cursor: not-allowed;'}
  ${({ cr_cross }) => cr_cross && 'cursor: crosshair;'}
  ${({ cr_grabbing }) => cr_grabbing && 'cursor: grabbing;'}
  ${({ cr_help }) => cr_help && 'cursor: help;'}
  ${({ cry_resize }) => cry_resize && 'cursor: col-resize;'}
  ${({ cra_resize }) => cra_resize && 'cursor: nesw-resize;'}
  ${({ crb_resize }) => crb_resize && 'cursor: nwse-resize;'}
  ${({ crx_resize }) => crx_resize && 'cursor: row-resize;'}
  ${({ cr_no_drop }) => cr_no_drop && 'cursor: no-drop;'}
  ${({ cr_none }) => cr_none && 'cursor: none;'}
  ${({ cr_progress }) => cr_progress && 'cursor: progress;'}
  ${({ cr_zoom_in }) => cr_zoom_in && 'cursor: zoom-in;'}
  ${({ cr_zoom_out }) => cr_zoom_out && 'cursor: zoom-out;'}
  ${({ cr_noevents }) => cr_noevents && 'pointer-events: none;'}
  ${({ cr_events }) => cr_events && 'pointer-events: auto;'}
  ${({ cr_url }) => cr_url && `cursor: url(${cr_url}),auto;`}
`;

export default cursorCss;