import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { Link as GatsbyLink } from 'gatsby';

const _Anchor = booleon.a(modules);

function Anchor({ href, children, ...props }: any) {
  const isTag = href.startsWith('//#');
  const isLocal = !isTag && href.startsWith('/');
  return (
    <_Anchor
      {...props}
      tag={GatsbyLink}
      href={isLocal ? undefined : href?.replace('//', '')}
      to={isLocal ? href : undefined}
      ol_none
      ft_color_inherit
      ft_weight_bold
      focus__ft_color_d55901
      hover__ft_color_d55901
    >
      {children}
    </_Anchor>
  );
}

export default Anchor;
