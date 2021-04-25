import { font, flex, spacing } from '@booleon/modules';
import { booleon } from '@booleon/react';

import { Svg } from '../Svg';
import { IconTextProps } from './IconText.types';

const __Span = booleon.span(font, flex, spacing);

function IconText({
  first,
  last,
  children,
  ...props
}: IconTextProps<typeof __Span>) {
  const svgProps = {
    as: 'span',
    fill: 'currentColor',
    width: '1.5em',
    height: '1.5em',
    flex: true,
  };

  return (
    <__Span
      {...props}
      flex
      main_center
      cross_center
      child__mb_1em={props.col}
      last__mb_0={props.col}
      child__mr_1em={!props.col}
      last__mr_0={!props.col}>
      {first ? <Svg {...first} {...svgProps} /> : null}
      <__Span flex grow ft_select_none>
        {children}
      </__Span>
      {last ? <Svg {...last} {...svgProps} /> : null}
    </__Span>
  );
}

export default IconText;
