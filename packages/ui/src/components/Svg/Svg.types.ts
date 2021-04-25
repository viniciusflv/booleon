import { InferBooleonProps } from '@booleon/react';

type Path = {
  fill?: string;
  d: string;
};

export type SvgProps<T> = {
  viewBox?: string;
  paths?: Path[];
  fill?: string;
  width?: string;
  height?: string;
} & InferBooleonProps<T>;
