import { FlattenIntersection } from '../../helpers/interfaces';

type Options =
  | 'grid'
  | 'cols_start'
  | 'cols_end'
  | 'rows_start'
  | 'rows_end'
  | 'dense'
  | 'flow_rows'
  | 'flow_cols'
  | 'area_AREA'
  | 'rows_FRACTIONS'
  | 'cols_FRACTIONS'
  | 'cols_span_NUMBER'
  | 'rows_span_NUMBER'
  | 'cols_start_NUMBER'
  | 'cols_end_NUMBER'
  | 'rows_start_NUMBER'
  | 'rows_end_NUMBER';

type Props = FlattenIntersection<
  { areas?: string } & (
    | { [key in Options]?: boolean }
    | { [key in string]?: boolean }
  )
>;

export default Props;