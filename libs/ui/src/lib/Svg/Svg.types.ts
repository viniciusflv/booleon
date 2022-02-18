import type { SVGProps } from 'react';

import type { Props } from '@booleon/core';

type Path = SVGProps<SVGPathElement> & {
  animates?: SVGProps<SVGAnimateElement>[];
};

type Stop = {
  offset: string;
  stopColor: string;
} & Props;

type Gradient = {
  stops: Stop[];
};

type Gradients = {
  linearGradient?: Gradient;
  radialGradient?: Gradient;
};

export type SvgProps = SVGProps<SVGSVGElement> &
  Gradients & {
    paths?: Path[];
    defs?: SVGProps<SVGDefsElement> & Gradients;
    defaultFill?: boolean;
  };
