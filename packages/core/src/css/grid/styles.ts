import GridProps from './interfaces';
import { indexerCss } from '../../lib/indexer';

const gridCss = indexerCss<GridProps>([
  [/^(rows_)(\d+[a-z]+|auto).*/, (value) => `grid-template-rows: ${value};`],
  [/^(cols_)(\d+[a-z]+|auto).*/, (value) => `grid-template-columns: ${value};`],
  [/^(area_)([A-z]+)/, (value) => `grid-area: ${value};`],
  [/^(cols_span_)(\d+)/, (value) => `grid-column: span ${value} / span ${value};`],
  [/^(rows_span_)(\d+)/, (value) => `grid-row: span ${value} / span ${value};`],
  [/^(cols_start_)(\d+)/, (value) => `grid-column-start: ${value};`],
  [/^(cols_end_)(\d+)/, (value) => `grid-column-end: ${value};`],
  [/^(rows_start_)(\d+)/, (value) => `grid-row-start: ${value};`],
  [/^(rows_end_)(\d+)/, (value) => `grid-row-end: ${value};`],
  ['grid', () => 'display: grid;'],
  ['areas', (areas) => `grid-template-areas: ${areas};`],
  ['cols_start', () => 'grid-column-start: 1;'],
  ['cols_end', () => 'grid-column-end: 1;'],
  ['rows_start', () => 'grid-row-start: 1;'],
  ['rows_end', () => 'grid-row-end: 1;'],
])

export default gridCss;
