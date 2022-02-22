import { flex, font } from '@booleon/modules';
import { booleon } from '@booleon/react';

import { TextProps } from './Text.types';

const _Text = booleon.span({ ...font, ...flex });

function Text({ children, ...props }: TextProps<typeof _Text>) {
  return <_Text {...props}>{children}</_Text>;
}

export default Text;
