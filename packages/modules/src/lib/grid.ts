import { sym } from '../utils';

/**
 * Module for `grid` options
 * @example
 * const Component = booleon.div(grid);
 * @example
 * ```jsx
 * <Component grid rows_1fr_auto_1px area_myArea />
 * ```
 */
export const grid = {
  grid: () => 'display:grid;',
  areas: ($: string) => `grid-template-areas:${$};`,
  [sym('grid_gap_$')]: ($: string) => `grid-gap:${$};`,
  [sym('rows_$')]: ($: string) => `grid-template-rows:${$.replace(/_/g, ' ')};`,
  [sym('cols_$')]: ($: string) =>
    `grid-template-columns:${$.replace(/_/g, ' ')};`,
  [sym('area_$')]: ($: string) => `grid-area:${$};`,
  [sym('cols_span_$')]: ($: string) => `grid-column:span ${$} / span ${$};`,
  [sym('rows_span_$')]: ($: string) => `grid-row:span ${$} / span ${$};`,
  [sym('cols_start_$')]: ($: string) => `grid-column-start:${$};`,
  [sym('cols_end_$')]: ($: string) => `grid-column-end:${$};`,
  [sym('rows_start_$')]: ($: string) => `grid-row-start:${$};`,
  [sym('rows_end_$')]: ($: string) => `grid-row-end:${$};`,
};
