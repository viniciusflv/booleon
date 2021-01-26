import { sym } from '../utils/sym';

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
  areas: (areas: string) =>
    `grid-template-areas:${String(areas).replace(/\n|\s+\s/gm, '')};`,
  [sym<'rows_FRACTIONS'>('rows_(.*)')]: (value: string) =>
    `grid-template-rows:${value};`,
  [sym<'cols_FRACTIONS'>('cols_(.*)')]: (value: string) =>
    `grid-template-columns:${value};`,
  [sym<'area_AREA'>('area_(.*)')]: (value: string) => `grid-area:${value};`,
  [sym<'cols_span_NUMBER'>('cols_span_(.*)')]: (value: string) =>
    `grid-column:span ${value} / span ${value};`,
  [sym<'rows_span_NUMBER'>('rows_span_(.*)')]: (value: string) =>
    `grid-row:span ${value} / span ${value};`,
  [sym<'cols_start_NUMBER'>('cols_start_(.*)')]: (value: string) =>
    `grid-column-start:${value};`,
  [sym<'cols_end_NUMBER'>('cols_end_(.*)')]: (value: string) =>
    `grid-column-end:${value};`,
  [sym<'rows_start_NUMBER'>('rows_start_(.*)')]: (value: string) =>
    `grid-row-start:${value};`,
  [sym<'rows_end_NUMBER'>('rows_end_(.*)')]: (value: string) =>
    `grid-row-end:${value};`,
};
