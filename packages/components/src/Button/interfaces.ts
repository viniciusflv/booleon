import { ViewProps } from '../../../core/src/View';
type Variant = 'blue' | 'green' | 'red';

export type ButtonProps = Omit<
  & { [key in Variant]?: boolean }
  & ViewProps
  & React.HTMLProps<ViewProps>
,'ref'>
