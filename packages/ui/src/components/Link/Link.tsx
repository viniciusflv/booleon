import { font, outline } from '@booleon/modules';
import { booleon } from '@booleon/react';

import { IconText } from '../IconText';

const _Link = booleon.a(font, outline);
function Link({ as = 'a', title, children, first, last, col, ...props }: any) {
  return (
    <_Link
      {...props}
      as={as}
      title={title || (typeof children === 'string' ? children : 'Link')}
      ol_none
      ft_color_inherit
      ft_no_underline
      focus__ft_color_d55901
      dark__focus__ft_color_d55901
      hover__ft_color_d55901
      dark__hover__ft_color_d55901>
      <IconText first={first} last={last} col={col}>
        {children}
      </IconText>
    </_Link>
  );
}

export default Link;
