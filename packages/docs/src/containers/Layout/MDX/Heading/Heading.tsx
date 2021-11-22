import { font, spacing } from '@booleon/modules';
import { booleon } from '@booleon/react';
import type { Tag } from '@booleon/react';

const _Heading = booleon.span({ ...spacing, ...font });

function Heading(tag: Tag) {
  return ({ children }: any) => (
    <_Heading
      id={children}
      tag={tag}
      pt_120rxm
      mt_neg_100rxm
      dark__ft_color_fff
    >
      {children}
    </_Heading>
  );
}

export default Heading;
