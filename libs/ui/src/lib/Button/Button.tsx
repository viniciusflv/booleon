import { Children, forwardRef, Ref } from 'react';

import type { Tag } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import type { AriaLinkOptions } from '@react-aria/link';
import type { AriaButtonProps } from '@react-types/button';
import { useSlots } from 'use-slots';

import { useAction } from '../../hooks/useAction';
import { atLeast } from '../../utils/atLeast';
import { Container } from '../Container';
import { IconText } from '../IconText';

type ButtonRef = HTMLButtonElement;

type ButtonProps = {
  outlined?: boolean;
  type?: 'blue' | 'green';
} & AriaLinkOptions &
  AriaButtonProps;

function Button(
  { children, outlined, type, ...props }: ButtonProps,
  ref: Ref<ButtonRef>,
) {
  const tag: Tag = props.href ? 'a' : 'button';

  const forwardRef = useForwardedRef(ref);
  const { firstIcon, lastIcon } = useSlots(children);
  const { actionProps, isPressed } = useAction(props, forwardRef);

  const onlyOne = Children.count(children) === 1;
  const hasIcon = atLeast(1, firstIcon, lastIcon);
  const isIconButton = hasIcon && onlyOne;

  return (
    <Container
      {...actionProps}
      ref={forwardRef}
      tag={tag}
      href={props.href}
      target={props.target}
      aria-pressed={props.href ? undefined : isPressed}
      cr_pointer
      sd_4
      h_5xl={isIconButton}
      w_5xl={isIconButton}
      h_6xl={!isIconButton}
      w_6xl={!isIconButton}
      w_9xl={!isIconButton}
      p_2xl={!isIconButton}
      px_4xl={!isIconButton}
      sdi_6={isPressed}
      bd_radius_pill
      bd_style_solid
      bd_width_xs={outlined}
      bg_transparent={outlined}
      ft_size_md
      ft_weight_bold
      ft_spacing_px
      ft_family_sans
      ft_no_underline
      ft_color_base_white_100={!outlined}
      hover__ft_color_base_white_100={outlined}
      ol_width_xs
      ol_color_base_orange_900
      dark__ol_color_base_white_100
      focus__ol_style_solid
      within__ol_style_solid
      active__ol_style_solid
      //
      bd_color_base_orange_600={!type}
      bg_color_base_orange_600={!outlined && !type}
      ft_color_base_orange_600={outlined && !type}
      hover__bg_color_base_orange_500={!type}
      hover__bd_color_base_orange_500={!type}
      //
      bd_color_base_blue_600={type === 'blue'}
      bg_color_base_blue_600={!outlined && type === 'blue'}
      ft_color_base_blue_600={outlined && type === 'blue'}
      hover__bg_color_base_blue_500={type === 'blue'}
      hover__bd_color_base_blue_500={type === 'blue'}
      //
      bd_color_base_green_800={type === 'green'}
      bg_color_base_green_800={!outlined && type === 'green'}
      ft_color_base_green_800={outlined && type === 'green'}
      hover__bg_color_base_green_700={type === 'green'}
      hover__bd_color_base_green_700={type === 'green'}
    >
      <IconText>{children}</IconText>
    </Container>
  );
}

export default forwardRef(Button);
