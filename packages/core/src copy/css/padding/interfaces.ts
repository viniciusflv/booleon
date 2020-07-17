type Options =
  | 'p_NUMBER'
  | 'px_NUMBER'
  | 'py_NUMBER'
  | 'pt_NUMBER'
  | 'pb_NUMBER'
  | 'pl_NUMBER'
  | 'pr_NUMBER'
  | 'p_auto'
  | 'px_auto'
  | 'py_auto'
  | 'pt_auto'
  | 'pb_auto'
  | 'pl_auto'
  | 'pr_auto';

export type PaddingProps =
  | { [key in Options]?: boolean }
  | { [key in string]?: boolean };
