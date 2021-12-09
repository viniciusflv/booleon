import { ReactNode } from 'react';

import { Tag } from '@booleon/react';

import { IconTextProps } from '../IconText/IconText.types';

export type ButtonRef = HTMLButtonElement;
export type ButtonProps = IconTextProps & {
  primary?: boolean;
  outlined?: boolean;
  tag?: Tag;
};
