import { GridProps } from './interfaces';
import { css } from 'styled-components';
import { reducer } from '../../utils/reducer';

const rows = /rows_\d/g;
const cols = /cols_\d/g;

const dynamic = (props: GridProps) =>
  Object.keys(props).reduce((acc, key) => {
    // @ts-expect-error
    const [_, ...splitted] = key.split('_');
    const value = splitted[splitted.length - 1];
    if (key.startsWith('area_')) acc += `grid-area: ${value};`;
    if (key.startsWith('cols_span')) acc += `grid-column: span ${value} / span ${value};`;
    if (key.startsWith('rows_span')) acc += `grid-row: span ${value} / span ${value};`;
    if (key.startsWith('cols_start_')) acc += `grid-column-start: ${value};`;
    if (key.startsWith('cols_end_')) acc += `grid-column-end: ${value};`;
    if (key.startsWith('rows_start_')) acc += `grid-row-start: ${value};`;
    if (key.startsWith('rows_end_')) acc += `grid-row-end: ${value};`;
    return acc;
  }, '');

const gridFlow = ({ dense, flow_rows, flow_cols }: GridProps) => {
  switch (true) {
  case dense && flow_rows: return 'grid-auto-flow: row dense;';
  case dense && flow_cols: return 'grid-auto-flow: column dense;';
  case flow_rows: return 'grid-auto-flow: row;';
  case flow_cols: return 'grid-auto-flow: column;';
  default: return 'grid-auto-flow: dense;';
  }
};

export const gridCss = css<GridProps>`
  ${({ grid }) => grid && 'display: grid;'}
  ${({ areas }) => areas && `grid-template-areas: ${areas};`}
  ${({ cols_start }) => cols_start && 'grid-column-start: 1;'}
  ${({ cols_end }) => cols_end && 'grid-column-end: 1;'}
  ${({ rows_start }) => rows_start && 'grid-row-start: 1;'}
  ${({ rows_end }) => rows_end && 'grid-row-end: 1;'}
  ${gridFlow}
  ${dynamic}
  ${reducer([
    [/^(rows_)(\d+[a-z]+|auto).*/, (value) => `grid-template-rows: ${value};`],
    [/^(cols_)(\d+[a-z]+|auto).*/, (value) => `grid-template-columns: ${value};`],
  ])}
  `;
  
// ${(props) => {
//   const a = Object.keys(props).join(' ');
//   const cols = 'cols_1fr_2fr_auto_1px';
//   const rg = /(?<=cols.*)([^_])+/g;
//   const m = cols.match(rg);
//   if (m) console.log(m);
// }}
