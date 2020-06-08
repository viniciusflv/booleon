type Options =
  | 'flex'
  | 'grid'
  | 'hidden'
  | 'visible'
  | 'invisible'
  | 'grow'
  | 'col'
  | 'row';

export type ViewProps =
  | { [key in Options]?: boolean }
  | { [id: string]: boolean };
