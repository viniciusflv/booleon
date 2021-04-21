import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const __Wrapper = booleon.div(modules);
const __Svg = booleon.svg(modules);
function Svg({ viewBox, paths, fill, ...props }: any) {
  return (
    <__Wrapper {...props}>
      <__Svg viewBox={viewBox} width="100%" height="100%" fill={fill}>
        {paths?.map(({ d, ...props }: any) => (
          <path key={d} {...props} d={d} />
        ))}
      </__Svg>
    </__Wrapper>
  );
}

export default Svg;
