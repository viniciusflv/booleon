import type { RefObject } from 'react';

import type { Props } from '@booleon/core';
import type { As } from '@booleon/react';

import { useButton } from '@react-aria/button';
import { useLink } from '@react-aria/link';
import type { AriaLinkOptions } from '@react-aria/link';
import type { AriaButtonProps } from '@react-types/button';

export function useAction<T extends Props & { as?: As }>(
  props: T & AriaLinkOptions & AriaButtonProps,
  ref: RefObject<HTMLElement>,
) {
  const { linkProps, isPressed: isLinkPressed } = useLink(props, ref);
  const { buttonProps, isPressed: isButtonPressed } = useButton(props, ref);

  return {
    actionProps: props.as === 'a' ? linkProps : buttonProps,
    isPressed: props.as === 'a' ? isLinkPressed : isButtonPressed,
  };
}
