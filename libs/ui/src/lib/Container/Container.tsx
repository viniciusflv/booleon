import {
  background,
  border,
  container,
  cursor,
  flex,
  grid,
  sizing,
  spacing,
} from '@booleon/modules';
import { booleon, InferBooleonComponent } from '@booleon/react';

const _Container = booleon.div({
  ...flex,
  ...grid,
  ...border,
  ...cursor,
  ...sizing,
  ...spacing,
  ...container,
  ...background,
});

export type ContainerProps = InferBooleonComponent<typeof _Container>;

export function Container({ children, ...props }: ContainerProps) {
  return <_Container {...props}>{children}</_Container>;
}
