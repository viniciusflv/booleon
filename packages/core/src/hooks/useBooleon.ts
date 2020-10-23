import { BooleonModule, Props } from '../types';
import { useClassCompiler } from './useClassCompiler';
import { usePropsFilter } from './usePropsFilter';
import { usePropsReducer } from './usePropsReducer';

export function useBooleon<P, M extends BooleonModule>(
  props: P | React.HTMLProps<{}>,
  module: M,
): [string, string, React.HTMLProps<{}>] {
  const [reactProps, booleonProps] = usePropsFilter<M>(props);
  const reducedProps = usePropsReducer<Props<string>, M>(booleonProps, module);
  const [className, classes] = useClassCompiler(reducedProps);

  return [className, classes, reactProps];
}
