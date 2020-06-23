type Options =
  | 'm_0'
  | 'm_auto'
  | 'm_xs'
  | 'm_sm'
  | 'm_md'
  | 'm_lg'
  | 'm_xl'
  | 'mx_0'
  | 'mx_auto'
  | 'mx_xs'
  | 'mx_sm'
  | 'mx_md'
  | 'mx_lg'
  | 'mx_xl'
  | 'my_0'
  | 'my_auto'
  | 'my_xs'
  | 'my_sm'
  | 'my_md'
  | 'my_lg'
  | 'my_xl'
  | 'mt_0'
  | 'mt_auto'
  | 'mt_xs'
  | 'mt_sm'
  | 'mt_md'
  | 'mt_lg'
  | 'mt_xl'
  | 'mb_0'
  | 'mb_auto'
  | 'mb_xs'
  | 'mb_sm'
  | 'mb_md'
  | 'mb_lg'
  | 'mb_xl'
  | 'ml_0'
  | 'ml_auto'
  | 'ml_xs'
  | 'ml_sm'
  | 'ml_md'
  | 'ml_lg'
  | 'ml_xl'
  | 'mr_0'
  | 'mr_auto'
  | 'mr_xs'
  | 'mr_sm'
  | 'mr_md'
  | 'mr_lg'
  | 'mr_xl';

export type MarginProps = { [key in Options]?: boolean };