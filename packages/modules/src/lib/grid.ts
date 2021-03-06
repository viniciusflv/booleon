import { FRACTIONS, LETTER, NUMBER } from '../constants';
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
  [sym<'rows_FRACTIONS'>(`^rows_(${FRACTIONS})`)]: (value: string) =>
    `grid-template-rows:${value.replace(/_/g, ' ')};`,
  [sym<'cols_FRACTIONS'>(`^cols_(${FRACTIONS})`)]: (value: string) =>
    `grid-template-columns:${value.replace(/_/g, ' ')};`,
  [sym<'area_AREA'>(`^area_(${LETTER})`)]: (value: string) =>
    `grid-area:${value};`,
  [sym<'cols_span_NUMBER'>(`^cols_span_(${NUMBER})`)]: (value: string) =>
    `grid-column:span ${value} / span ${value};`,
  [sym<'rows_span_NUMBER'>(`^rows_span_(${NUMBER})`)]: (value: string) =>
    `grid-row:span ${value} / span ${value};`,
  [sym<'cols_start_NUMBER'>(`^cols_start_(${NUMBER})`)]: (value: string) =>
    `grid-column-start:${value};`,
  [sym<'cols_end_NUMBER'>(`^cols_end_(${NUMBER})`)]: (value: string) =>
    `grid-column-end:${value};`,
  [sym<'rows_start_NUMBER'>(`^rows_start_(${NUMBER})`)]: (value: string) =>
    `grid-row-start:${value};`,
  [sym<'rows_end_NUMBER'>(`^rows_end_(${NUMBER})`)]: (value: string) =>
    `grid-row-end:${value};`,
};
