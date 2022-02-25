import type { SVGProps } from 'react';

import type { Props } from '@booleon/core';
import type { Tag } from '@booleon/react';

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
    tag?: Tag;
    paths?: Path[];
    aria: string;
    defaultFill?: boolean;
    defs?: SVGProps<SVGDefsElement> & Gradients;
  };
