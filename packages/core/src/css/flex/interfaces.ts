type Options =
  | 'flex'
  | 'grow'
  | 'col'
  | 'row'
  | 'row_reverse'
  | 'col_reverse'
  | 'main_between'
  | 'main_around'
  | 'main_evenly'
  | 'main_center'
  | 'cross_center'
  | 'main_stretch'
  | 'cross_stretch'
  | 'main_start'
  | 'cross_start'
  | 'main_end'
  | 'cross_end';

type Props = { [key in Options]?: boolean };

export default Props;
