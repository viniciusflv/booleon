import type { SVGProps } from 'react';

type Path = SVGProps<SVGPathElement> & {
  animates?: SVGProps<SVGAnimateElement>[];
};

type Gradient = {
  stops: SVGProps<SVGStopElement>[];
};

type Gradients = {
  linearGradient?: Gradient;
  radialGradient?: Gradient;
};

export type SvgProps = SVGProps<SVGSVGElement> &
  Gradients & {
    paths?: Path[];
    defs?: SVGProps<SVGDefsElement> & Gradients;
  };
