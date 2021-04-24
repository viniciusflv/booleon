import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Link = booleon.a(modules);
function Link({ as = 'a', children, ...props }: any) {
  return (
    <_Link
      {...props}
      as={as}
      ft_color_inherit
      ft_no_underline
      focus__ft_color_d55901
      hover__ft_color_d55901>
      {children}
    </_Link>
  );
}

export default Link;
