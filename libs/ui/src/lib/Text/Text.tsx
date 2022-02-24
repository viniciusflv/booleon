import { flex, font } from '@booleon/modules';
import { booleon } from '@booleon/react';
import type { InferBooleonComponent } from '@booleon/react';

const _Text = booleon.span({ ...font, ...flex });

export type TextProps = InferBooleonComponent<typeof _Text>;

export default function Text({ children, ...props }: TextProps) {
  return <_Text {...props}>{children}</_Text>;
}
