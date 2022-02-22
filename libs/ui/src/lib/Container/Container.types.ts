import type { Props } from '@booleon/core';
import type { InferBooleonComponent } from '@booleon/react';

export type ContainerProps<T = Props<string, boolean>> =
  InferBooleonComponent<T>;
