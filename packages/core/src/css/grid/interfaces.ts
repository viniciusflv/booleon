type Options =
  | 'grid'
  | 'cols_start'
  | 'cols_end'
  | 'rows_start'
  | 'rows_end'
  | 'area_AREA'
  | 'rows_FRACTIONS'
  | 'cols_FRACTIONS'
  | 'cols_span_NUMBER'
  | 'rows_span_NUMBER'
  | 'cols_start_NUMBER'
  | 'cols_end_NUMBER'
  | 'rows_start_NUMBER'
  | 'rows_end_NUMBER';

export type GridProps = { areas?: string } & (
  | { [key in Options]?: boolean }
  | { [key in string]?: boolean }
);
