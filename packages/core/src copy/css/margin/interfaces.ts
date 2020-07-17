type Options =
  | 'm_NUMBER'
  | 'mx_NUMBER'
  | 'my_NUMBER'
  | 'mt_NUMBER'
  | 'mb_NUMBER'
  | 'ml_NUMBER'
  | 'mr_NUMBER'
  | 'm_auto'
  | 'mx_auto'
  | 'my_auto'
  | 'mt_auto'
  | 'mb_auto'
  | 'ml_auto'
  | 'mr_auto';

export type MarginProps =
  | { [key in Options]?: boolean }
  | { [key in string]?: boolean };
