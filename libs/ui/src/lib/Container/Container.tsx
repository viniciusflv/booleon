import {
  background,
  border,
  container,
  cursor,
  flex,
  font,
  grid,
  outline,
  shadow,
  sizing,
  spacing,
} from '@booleon/modules';
import { booleon, InferBooleonComponent } from '@booleon/react';

const _Container = booleon.div({
  ...flex,
  ...font,
  ...grid,
  ...border,
  ...cursor,
  ...sizing,
  ...shadow,
  ...spacing,
  ...outline,
  ...container,
  ...background,
});

export type ContainerProps = InferBooleonComponent<typeof _Container>;

export function Container({ children, ...props }: ContainerProps) {
  return <_Container {...props}>{children}</_Container>;
}
