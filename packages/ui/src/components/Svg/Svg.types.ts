import type { SVGProps } from 'react';

import type { Props } from '@booleon/core';

type Path = SVGProps<SVGPathElement> & {
  animates?: SVGProps<SVGAnimateElement>[];
};

type Stop = {
  offset: '50%';
  stopColor: '#d55901';
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
