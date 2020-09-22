import { Entry, Indexer } from '../lib/interfaces';

const gridTuple = [
  ['grid', () => 'display:grid;'],
  [
    'areas',
    (areas: string) =>
      `grid-template-areas:${areas.replace(/\n|\s+\s/gm, '')};`,
  ],
] as const;

const gridIndexer: Indexer = [
  [
    () => '^(rows_)(\\d+[a-z]+|auto).*',
    (value) => `grid-template-rows:${value};`,
  ],
  [
    () => '^(cols_)(\\d+[a-z]+|auto).*',
    (value) => `grid-template-columns:${value};`,
  ],
  [() => '^(area_)([A-z]+)', (value) => `grid-area:${value};`],
  [
    () => '^(cols_span_)(\\d+)',
    (value) => `grid-column:span${value}/span${value};`,
  ],
  [
    () => '^(rows_span_)(\\d+)',
    (value) => `grid-row:span${value}/span${value};`,
  ],
  [() => '^(cols_start_)(\\d+)', (value) => `grid-column-start:${value};`],
  [() => '^(cols_end_)(\\d+)', (value) => `grid-column-end:${value};`],
  [() => '^(rows_start_)(\\d+)', (value) => `grid-row-start:${value};`],
  [() => '^(rows_end_)(\\d+)', (value) => `grid-row-end:${value};`],
];

type GridProps = Entry<
  typeof gridTuple,
  | 'area_AREA'
  | 'rows_FRACTIONS'
  | 'cols_FRACTIONS'
  | 'cols_span_NUMBER'
  | 'rows_span_NUMBER'
  | 'cols_start_NUMBER'
  | 'cols_end_NUMBER'
  | 'rows_start_NUMBER'
  | 'rows_end_NUMBER'
>;

export { gridIndexer, gridTuple, GridProps };
