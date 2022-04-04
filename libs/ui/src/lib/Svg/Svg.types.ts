import type { SVGProps } from 'react';

import type { Props } from '@booleon/core';
import type { As } from '@booleon/react';

type Path = Partial<Record<keyof SVGProps<SVGPathElement>, string>> & {
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
    as?: As;
    paths?: Path[];
    alt: string;
    defaultFill?: boolean;
    defs?: SVGProps<SVGDefsElement> & Gradients;
  };
