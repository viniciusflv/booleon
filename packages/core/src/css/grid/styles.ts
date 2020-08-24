import GridProps from './interfaces';
import { Indexer } from '../../lib/interfaces';

const gridCss: Indexer<GridProps> = [
  [
    () => /^(rows_)(\d+[a-z]+|auto).*/,
    (value) => `grid-template-rows: ${value};`,
  ],
  [
    () => /^(cols_)(\d+[a-z]+|auto).*/,
    (value) => `grid-template-columns: ${value};`,
  ],
  [() => /^(area_)([A-z]+)/, (value) => `grid-area: ${value};`],
  [
    () => /^(cols_span_)(\d+)/,
    (value) => `grid-column: span ${value} / span ${value};`,
  ],
  [
    () => /^(rows_span_)(\d+)/,
    (value) => `grid-row: span ${value} / span ${value};`,
  ],
  [() => /^(cols_start_)(\d+)/, (value) => `grid-column-start: ${value};`],
  [() => /^(cols_end_)(\d+)/, (value) => `grid-column-end: ${value};`],
  [() => /^(rows_start_)(\d+)/, (value) => `grid-row-start: ${value};`],
  [() => /^(rows_end_)(\d+)/, (value) => `grid-row-end: ${value};`],
  ['grid', () => 'display: grid;'],
  [
    'areas',
    (areas) =>
      `grid-template-areas: ${(areas as string).replace(/\n|\s+\s/gm, '')};`,
  ],
];

export default gridCss;
