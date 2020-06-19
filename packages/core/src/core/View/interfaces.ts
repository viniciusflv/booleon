type Options =
  | 'flex'
  | 'grid'
  | 'hidden'
  | 'visible'
  | 'invisible'
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
  | 'cross_end'
  | 'area_NAME'
  | 'cols_NUMBER_VALUE'
  | 'cols_NUMBER_VALUE_NUMBER_VALUE'
  | 'xs_PROP'
  | 'sm_PROP'
  | 'md_PROP'
  | 'lg_PROP'
  | 'xl_PROP';

export type ViewProps = (
  | { [key in Options]?: boolean }
  | { [id: string]: boolean }
) & { areas?: string };
