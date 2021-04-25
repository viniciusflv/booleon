import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { SvgProps } from './Svg.types';

const __Wrapper = booleon.div(modules);
const __Svg = booleon.svg(modules);
function Svg({
  viewBox,
  paths,
  fill,
  width = '100%',
  height = '100%',
  ...props
}: SvgProps<typeof __Wrapper>) {
  return (
    <__Wrapper flex {...props}>
      <__Svg viewBox={viewBox} width={width} height={height} fill={fill}>
        {paths?.map(({ d, ...props }) => (
          <path key={d} {...props} d={d} />
        ))}
      </__Svg>
    </__Wrapper>
  );
}

export default Svg;
