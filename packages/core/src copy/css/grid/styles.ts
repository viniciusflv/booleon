import { css } from 'styled-components';
import { reducerCss } from '../../helpers/reducer';
import GridProps from './interfaces';

const gridFlow = ({ dense, flow_rows, flow_cols }: GridProps) => {
  switch (true) {
  case dense && flow_rows: return 'grid-auto-flow: row dense;';
  case dense && flow_cols: return 'grid-auto-flow: column dense;';
  case flow_rows: return 'grid-auto-flow: row;';
  case flow_cols: return 'grid-auto-flow: column;';
  case dense: return 'grid-auto-flow: dense;';
  default: return '';
  }
};

const gridCss = css<GridProps>`
  ${reducerCss([
    [/^(rows_)(\d+[a-z]+|auto).*/, (value: string) => `grid-template-rows: ${value};`],
    [/^(cols_)(\d+[a-z]+|auto).*/, (value: string) => `grid-template-columns: ${value};`],
    [/^(area_)([A-z]+)/, (value: string) => `grid-area: ${value};`],
    [/^(cols_span_)(\d+)/, (value: string) => `grid-column: span ${value} / span ${value};`],
    [/^(rows_span_)(\d+)/, (value: string) => `grid-row: span ${value} / span ${value};`],
    [/^(cols_start_)(\d+)/, (value: string) => `grid-column-start: ${value};`],
    [/^(cols_end_)(\d+)/, (value: string) => `grid-column-end: ${value};`],
    [/^(rows_start_)(\d+)/, (value: string) => `grid-row-start: ${value};`],
    [/^(rows_end_)(\d+)/, (value: string) => `grid-row-end: ${value};`],
  ])}
  ${gridFlow}
  ${({ grid }) => grid && 'display: grid;'}
  ${({ areas }) => areas && `grid-template-areas: ${areas};`}
  ${({ cols_start }) => cols_start && 'grid-column-start: 1;'}
  ${({ cols_end }) => cols_end && 'grid-column-end: 1;'}
  ${({ rows_start }) => rows_start && 'grid-row-start: 1;'}
  ${({ rows_end }) => rows_end && 'grid-row-end: 1;'}
`;

export default gridCss;
