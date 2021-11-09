import { As } from '@booleon/react';

type Path = {
  fill?: string;
  d: string;
};

export type SvgProps = {
  as?: As;
  viewBox?: string;
  paths?: Path[];
  fill?: string;
  width?: string;
  height?: string;
};
