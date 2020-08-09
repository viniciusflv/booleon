import ViewProps from '../../../core/src/View/interfaces';

type Variant = 'blue' | 'green' | 'red';

export type ButtonProps =
  & ViewProps
  & { [key in Variant]?: boolean }
  & React.DOMAttributes<any>;
