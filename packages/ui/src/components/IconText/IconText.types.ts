import { ReactNode } from 'react';

import { InferBooleonProps } from '@booleon/react';

export type IconTextProps<T> = {
  children: ReactNode;
  first?: any;
  last?: any;
} & InferBooleonProps<T>;
