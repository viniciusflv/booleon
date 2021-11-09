import { forwardRef } from 'react';
import type { Ref } from 'react';

import { font, flex, spacing, container } from '@booleon/modules';
import { booleon } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';

import { Svg } from '../Svg';
import type { IconTextProps, IconTextRef } from './IconText.types';

const _Span = booleon.span({ ...font, ...flex, ...spacing, ...container });

function IconText(
  { children, col, first, last }: IconTextProps,
  ref: Ref<IconTextRef>,
) {
  const iconTextRef = useForwardedRef(ref);

  const svgProps = {
    as: 'span',
    fill: 'currentColor',
    width: '1.5em',
    height: '1.5em',
    flex: true,
  };

  return (
    <_Span
      ref={iconTextRef}
      flex
      main_center
      cross_center
      col={col}
      child__mb_1em={Boolean(children) && col}
      last__mb_0={Boolean(children) && col}
      child__mr_1em={Boolean(children) && !col}
      last__mr_0={Boolean(children) && !col}>
      {first ? <Svg {...first} {...svgProps} /> : null}
      <_Span flex grow ft_select_none>
        {children}
      </_Span>
      {last ? <Svg {...last} {...svgProps} /> : null}
    </_Span>
  );
}

const ForwardedComponent = forwardRef(IconText);
export { ForwardedComponent as IconText };
