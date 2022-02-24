import {
  background,
  border,
  container,
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
  ...sizing,
  ...spacing,
  ...container,
  ...background,
});

export type ContainerProps = InferBooleonComponent<typeof _Container>;

export function Container({ children, ...props }: ContainerProps) {
  return <_Container {...props}>{children}</_Container>;
}
