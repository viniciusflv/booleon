import { LETTER, LOWER_CASE, NUMBER } from '../constants';

/**
 * Module for `grid` options
 * @example
 * const Component = styledBooleon.div(grid);
 * @example
 * ```jsx
 * <Component grid rows_1fr_auto_1px area_myArea />
 * ```
 */
export const grid = [
  ['grid', () => 'display:grid;'],
  [
    'areas',
    (areas: string) =>
      `grid-template-areas:${String(areas).replace(/\n|\s+\s/gm, '')};`,
  ],
  [
    ['rows_' as 'rows_FRACTIONS', `((${NUMBER}${LOWER_CASE}|auto)(.*))`],
    (value: string) => `grid-template-rows:${value};`,
  ],
  [
    ['cols_' as 'cols_FRACTIONS', `((${NUMBER}${LOWER_CASE}|auto)(.*))`],
    (value: string) => `grid-template-columns:${value};`,
  ],
  [
    ['area_' as 'area_AREA', `(${LETTER})`],
    (value: string) => `grid-area:${value};`,
  ],
  [
    ['cols_span_' as 'cols_span_NUMBER', `(${NUMBER})`],
    (value: string) => `grid-column:span ${value} / span ${value};`,
  ],
  [
    ['rows_span_' as 'rows_span_NUMBER', `(${NUMBER})`],
    (value: string) => `grid-row:span ${value} / span ${value};`,
  ],
  [
    ['cols_start_' as 'cols_start_NUMBER', `(${NUMBER})`],
    (value: string) => `grid-column-start:${value};`,
  ],
  [
    ['cols_end_' as 'cols_end_NUMBER', `(${NUMBER})`],
    (value: string) => `grid-column-end:${value};`,
  ],
  [
    ['rows_start_' as 'rows_start_NUMBER', `(${NUMBER})`],
    (value: string) => `grid-row-start:${value};`,
  ],
  [
    ['rows_end_' as 'rows_end_NUMBER', `(${NUMBER})`],
    (value: string) => `grid-row-end:${value};`,
  ],
] as const;
