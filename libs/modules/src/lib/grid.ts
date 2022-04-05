import { sym, theme } from '@booleon/core';
import { absolute, spaces } from '@booleon/tokens';

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
  [sym('rows_$')]: ($: string) => `grid-template-rows:${$.replace(/_/g, ' ')};`,
  [sym('cols_$')]: ($: string) =>
    `grid-template-columns:${$.replace(/_/g, ' ')};`,
  [sym('area_$')]: ($: string) => `grid-area:${$};`,
  ...theme('cols_span', absolute, ($) => `grid-column:span ${$} / span ${$};`),
  ...theme('rows_span', absolute, ($) => `grid-row:span ${$} / span ${$};`),
  ...theme('cols_start', absolute, ($) => `grid-column-start:${$};`),
  ...theme('cols_end', absolute, ($) => `grid-column-end:${$};`),
  ...theme('rows_start', absolute, ($) => `grid-row-start:${$};`),
  ...theme('rows_end', absolute, ($) => `grid-row-end:${$};`),
  ...theme('grid_gap', spaces, ($) => `grid-gap:${$};`),
};
