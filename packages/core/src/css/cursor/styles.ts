import { Indexer } from '../../lib/interfaces';
import CursorProps from './interfaces';

const cursorCss: Indexer<CursorProps> = [
  ['cr_auto', () => 'cursor: auto;'],
  ['cr_default', () => 'cursor: default;'],
  ['cr_pointer', () => 'cursor: pointer;'],
  ['cr_wait', () => 'cursor: wait;'],
  ['cr_text', () => 'cursor: text;'],
  ['cr_move', () => 'cursor: move;'],
  ['cr_disallowed', () => 'cursor: not-allowed;'],
  ['cr_cross', () => 'cursor: crosshair;'],
  ['cr_grabbing', () => 'cursor: grabbing;'],
  ['cr_help', () => 'cursor: help;'],
  ['cry_resize', () => 'cursor: col-resize;'],
  ['cra_resize', () => 'cursor: nesw-resize;'],
  ['crb_resize', () => 'cursor: nwse-resize;'],
  ['crx_resize', () => 'cursor: row-resize;'],
  ['cr_no_drop', () => 'cursor: no-drop;'],
  ['cr_none', () => 'cursor: none;'],
  ['cr_progress', () => 'cursor: progress;'],
  ['cr_zoom_in', () => 'cursor: zoom-in;'],
  ['cr_zoom_out', () => 'cursor: zoom-out;'],
  ['cr_noevents', () => 'pointer-events: none;'],
  ['cr_events', () => 'pointer-events: auto;'],
  ['cr_url', (cr_url) => `cursor: url(${cr_url}),auto;`],
];

export default cursorCss;
