import { createClassName } from '@booleon/core';
import { flex } from '@booleon/modules';
import { booleon } from '@booleon/react';

import { SvgProps } from './Svg.types';

const _Wrapper = booleon.div(flex);

const _Stop = booleon.stop({
  stopColor: ($) => `stop-color:${$};`,
});

function Svg({
  tag,
  alt,
  viewBox,
  paths,
  color = 'currentColor',
  width = '100%',
  height = '100%',
  defaultFill = true,
  ...props
}: SvgProps) {
  const { linearGradient, radialGradient } = props?.defs ?? props ?? {};
  const Gradient = radialGradient ? 'radialGradient' : 'linearGradient';
  const gradient = linearGradient || radialGradient;
  let gradientId = '';

  if (gradient) {
    gradientId = createClassName(linearGradient ?? radialGradient);
  }

  return (
    <_Wrapper tag={tag} flex role="img" aria-label={alt}>
      <svg
        viewBox={viewBox}
        width={width}
        height={height}
        fill={color}
        aria-hidden="true"
      >
        {gradient ? (
          <Gradient id={gradientId}>
            {gradient?.stops?.map((stop) => (
              <_Stop key={stop?.offset} {...stop} />
            ))}
          </Gradient>
        ) : null}
        {paths?.map(({ d, animates, ...pathProps }) => (
          <path
            {...pathProps}
            key={d}
            d={d}
            fill={
              gradient
                ? `url(#${gradientId})`
                : defaultFill
                ? pathProps.fill
                : color
            }
          >
            {animates?.map((animate, i) => (
              <animate key={i} {...animate} />
            ))}
          </path>
        ))}
      </svg>
    </_Wrapper>
  );
}

export default Svg;
