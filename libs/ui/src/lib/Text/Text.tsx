import { font } from '@booleon/modules';
import { booleon } from '@booleon/react';
import type { Tag } from '@booleon/react';

import { TextProps } from './Text.types';

const _Text = booleon.span(font);

function Text({ tag, children, ...props }: TextProps<typeof _Text>) {
  return (
    <_Text tag={tag as Tag} {...props}>
      {children}
    </_Text>
  );
}

export default Text;
