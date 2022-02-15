import tokens from '@booleon/tokens';

import { sym } from '../utils/sym';
import { theme } from '../utils/theme';

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
  ...theme(
    'cols_span',
    tokens.absolute,
    ($) => `grid-column:span ${$} / span ${$};`,
  ),
  ...theme(
    'rows_span',
    tokens.absolute,
    ($) => `grid-row:span ${$} / span ${$};`,
  ),
  ...theme('cols_start', tokens.absolute, ($) => `grid-column-start:${$};`),
  ...theme('cols_end', tokens.absolute, ($) => `grid-column-end:${$};`),
  ...theme('rows_start', tokens.absolute, ($) => `grid-row-start:${$};`),
  ...theme('rows_end', tokens.absolute, ($) => `grid-row-end:${$};`),
  ...theme('grid_gap', tokens.spacing, ($) => `grid-gap:${$};`),
};
