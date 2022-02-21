import type { Props } from '@booleon/core';
import type { InferBooleonComponent } from '@booleon/react';

export type TextProps<T = Props<string, boolean>> = InferBooleonComponent<T>;
