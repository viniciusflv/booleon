import { flex } from '@booleon/modules';
import { booleon } from '@booleon/react';

import { SvgProps } from './Svg.types';

const _Wrapper = booleon.div(flex);

function Svg({
  viewBox,
  paths,
  fill,
  width = '100%',
  height = '100%',
}: SvgProps) {
  return (
    <_Wrapper flex>
      <svg viewBox={viewBox} width={width} height={height} fill={fill}>
        {paths?.map(({ d, ...pathProps }) => (
          <path key={d} d={d} {...pathProps} />
        ))}
      </svg>
    </_Wrapper>
  );
}

export { Svg };
