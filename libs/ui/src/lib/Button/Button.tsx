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
  underlined?: boolean;
  outlined?: boolean;
  type?: 'blue' | 'green';
} & AriaLinkOptions &
  AriaButtonProps;

function Button(
  { children, outlined, underlined, type, ...props }: ButtonProps,
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
      ft_size_md
      ft_weight_bold
      ft_spacing_px
      ft_family_sans
      ft_no_underline
      ol_none={underlined}
      bd_none={underlined}
      bg_transparent={underlined || outlined}
      relative={underlined}
      after__content={underlined ? '""' : undefined}
      after__bd_radius_circle={underlined}
      after__left={underlined}
      after__absolute={underlined}
      after__h_xs={underlined}
      hover_after__w_percentage_100={underlined && !isPressed}
      focus_after__w_percentage_100={underlined && !isPressed}
      after__w_percentage_80={underlined && isPressed}
      after__mx_percentage_10={underlined && isPressed}
      after__bg_color_inherit={underlined}
      sd_4={!underlined}
      h_5xl={!underlined && isIconButton}
      w_5xl={!underlined && isIconButton}
      h_6xl={!underlined && !isIconButton}
      w_6xl={!underlined && !isIconButton}
      w_9xl={!underlined && !isIconButton}
      p_2xl={!underlined && !isIconButton}
      px_4xl={!underlined && !isIconButton}
      sdi_6={!underlined && isPressed}
      bd_radius_pill={!underlined}
      bd_style_solid={!underlined}
      bd_width_xs={!underlined && outlined}
      ft_color_base_white_100={!underlined && !outlined}
      hover__ft_color_base_white_100={!underlined && outlined}
      ol_width_xs={!underlined}
      ol_color_base_orange_900={!underlined}
      dark__ol_color_base_white_100={!underlined}
      focus__ol_style_solid={!underlined}
      within__ol_style_solid={!underlined}
      active__ol_style_solid={!underlined}
      //
      bd_color_base_orange_600={!underlined && !type}
      bg_color_base_orange_600={!underlined && !outlined && !type}
      ft_color_base_orange_700={(underlined || outlined) && !type}
      focus__ft_color_base_orange_500={underlined && !type}
      hover__ft_color_base_orange_500={underlined && !type}
      hover__bg_color_base_orange_500={!underlined && !type}
      hover__bd_color_base_orange_500={!underlined && !type}
      //
      bd_color_base_blue_600={!underlined && type === 'blue'}
      bg_color_base_blue_600={!underlined && !outlined && type === 'blue'}
      ft_color_base_blue_700={(underlined || outlined) && type === 'blue'}
      focus__ft_color_base_blue_500={underlined && type === 'blue'}
      hover__ft_color_base_blue_500={underlined && type === 'blue'}
      hover__bg_color_base_blue_500={!underlined && type === 'blue'}
      hover__bd_color_base_blue_500={!underlined && type === 'blue'}
      //
      bd_color_base_green_800={!underlined && type === 'green'}
      bg_color_base_green_800={!underlined && !outlined && type === 'green'}
      ft_color_base_green_800={(underlined || outlined) && type === 'green'}
      focus__ft_color_base_green_700={underlined && type === 'green'}
      hover__ft_color_base_green_700={underlined && type === 'green'}
      hover__bg_color_base_green_700={!underlined && type === 'green'}
      hover__bd_color_base_green_700={!underlined && type === 'green'}
    >
      <IconText>{children}</IconText>
    </Container>
  );
}

export default forwardRef(Button);
