import {
  background,
  border,
  container,
  flex,
  grid,
  sizing,
  spacing,
} from '@booleon/modules';
import { booleon } from '@booleon/react';

import { ContainerProps } from './Container.types';

const _Container = booleon.div({
  ...flex,
  ...grid,
  ...border,
  ...sizing,
  ...spacing,
  ...container,
  ...background,
});

function Container({ children, ...props }: ContainerProps<typeof _Container>) {
  return <_Container {...props}>{children}</_Container>;
}

export default Container;
