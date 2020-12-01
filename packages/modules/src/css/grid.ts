import { LETTER, LOWER_CASE, NUMBER } from '../constants';
import { Fractions } from '../types';

export const grid = [
  ['grid', () => 'display:grid;'],
  [
    'areas',
    (areas: string) =>
      `grid-template-areas:${String(areas).replace(/\n|\s+\s/gm, '')};`,
  ],
  [
    ['rows_' as `rows_${Fractions}`, `((${NUMBER}${LOWER_CASE}|auto)(.*))`],
    (value: string) => `grid-template-rows:${value};`,
  ],
  [
    ['cols_' as `cols_${Fractions}`, `((${NUMBER}${LOWER_CASE}|auto)(.*))`],
    (value: string) => `grid-template-columns:${value};`,
  ],
  [
    ['area_' as `area_${string}`, `(${LETTER})`],
    (value: string) => `grid-area:${value};`,
  ],
  [
    ['cols_span_' as `cols_span_${number}`, `(${NUMBER})`],
    (value: string) => `grid-column:span ${value} / span ${value};`,
  ],
  [
    ['rows_span_' as `rows_span_${number}`, `(${NUMBER})`],
    (value: string) => `grid-row:span ${value} / span ${value};`,
  ],
  [
    ['cols_start_' as `cols_start_${number}`, `(${NUMBER})`],
    (value: string) => `grid-column-start:${value};`,
  ],
  [
    ['cols_end_' as `cols_end_${number}`, `(${NUMBER})`],
    (value: string) => `grid-column-end:${value};`,
  ],
  [
    ['rows_start_' as `rows_start_${number}`, `(${NUMBER})`],
    (value: string) => `grid-row-start:${value};`,
  ],
  [
    ['rows_end_' as `rows_end_${number}`, `(${NUMBER})`],
    (value: string) => `grid-row-end:${value};`,
  ],
] as const;
