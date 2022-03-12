import type { AriaLinkOptions } from '@react-aria/link';
import type { AriaButtonProps } from '@react-types/button';

export type ButtonProps = {
  underlined?: boolean;
  outlined?: boolean;
  title: string;
  type?: 'blue' | 'green';
} & AriaLinkOptions &
  AriaButtonProps;
