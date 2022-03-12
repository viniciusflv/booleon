import { forwardRef } from 'react';
import type { Ref } from 'react';

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
  transition,
} from '@booleon/modules';
import { booleon, InferBooleonComponent } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';

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
  ...transition,
  ...background,
});

export type ContainerRef = HTMLElement;
export type ContainerProps = InferBooleonComponent<typeof _Container>;

function Container(
  { children, ...props }: ContainerProps,
  ref: Ref<ContainerRef>,
) {
  const forwardRef = useForwardedRef(ref);

  return (
    <_Container {...props} ref={forwardRef}>
      {children}
    </_Container>
  );
}

const ForwardedComponent = forwardRef(Container);

export { ForwardedComponent as Container };
