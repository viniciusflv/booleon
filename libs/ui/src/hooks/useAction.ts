import type { RefObject } from 'react';

import type { Props } from '@booleon/core';
import type { Tag } from '@booleon/react';

import { useButton } from '@react-aria/button';
import { useLink } from '@react-aria/link';
import type { AriaLinkOptions } from '@react-aria/link';
import type { AriaButtonProps } from '@react-types/button';

export function useAction<T extends Props & { tag?: Tag }>(
  props: T & AriaLinkOptions & AriaButtonProps,
  ref: RefObject<HTMLElement>,
) {
  const { linkProps, isPressed: isLinkPressed } = useLink(props, ref);
  const { buttonProps, isPressed: isButtonPressed } = useButton(props, ref);

  return {
    actionProps: props.tag === 'a' ? linkProps : buttonProps,
    isPressed: props.tag === 'a' ? isLinkPressed : isButtonPressed,
  };
}
