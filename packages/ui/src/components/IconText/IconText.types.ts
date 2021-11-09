import type { ReactNode } from 'react';

import type { SvgProps } from '../Svg';

export type IconTextRef = HTMLSpanElement;
export type IconTextProps = {
  children: ReactNode;
  col?: boolean;
  first?: SvgProps;
  last?: SvgProps;
};
