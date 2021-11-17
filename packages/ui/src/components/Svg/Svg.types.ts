import type { SVGProps } from 'react';

type Path = SVGProps<SVGPathElement>;

export type SvgProps = SVGProps<SVGSVGElement> & {
  paths?: Path[];
};
