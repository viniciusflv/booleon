import { letter, lowerCase, number } from '../constants/regex';

export const gridTuple = [
  ['grid', () => 'display:grid;'],
  [
    'areas',
    (areas: string) =>
      `grid-template-areas:${String(areas).replace(/\n|\s+\s/gm, '')};`,
  ],
  [
    ['rows_' as 'rows_FRACTIONS', `((${number}${lowerCase}|auto)(.*))`],
    (value: string) => `grid-template-rows:${value};`,
  ],
  [
    ['cols_' as 'cols_FRACTIONS', `((${number}${lowerCase}|auto)(.*))`],
    (value: string) => `grid-template-columns:${value};`,
  ],
  [
    ['area_' as 'area_AREA', `(${letter})`],
    (value: string) => `grid-area:${value};`,
  ],
  [
    ['cols_span_' as 'cols_span_NUMBER', `(${number})`],
    (value: string) => `grid-column:span ${value} / span ${value};`,
  ],
  [
    ['rows_span_' as 'rows_span_NUMBER', `(${number})`],
    (value: string) => `grid-row:span ${value} / span ${value};`,
  ],
  [
    ['cols_start_' as 'cols_start_NUMBER', `(${number})`],
    (value: string) => `grid-column-start:${value};`,
  ],
  [
    ['cols_end_' as 'cols_end_NUMBER', `(${number})`],
    (value: string) => `grid-column-end:${value};`,
  ],
  [
    ['rows_start_' as 'rows_start_NUMBER', `(${number})`],
    (value: string) => `grid-row-start:${value};`,
  ],
  [
    ['rows_end_' as 'rows_end_NUMBER', `(${number})`],
    (value: string) => `grid-row-end:${value};`,
  ],
] as const;
