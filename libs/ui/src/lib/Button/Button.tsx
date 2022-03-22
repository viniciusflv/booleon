import { Children, forwardRef } from 'react';
import type { Ref } from 'react';

import type { As } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useSlots } from 'use-slots';

import { useAction } from '../../hooks/useAction';
import { atLeast } from '../../utils/atLeast';
import { Container } from '../Container';
import { IconText } from '../IconText';
import { ButtonProps } from './Button.types';

export type ButtonRef = HTMLButtonElement | HTMLAnchorElement;

function Button(props: ButtonProps, ref: Ref<ButtonRef>) {
  const { children, outlined, underlined, variant } = props;
  const as: As = props.href ? 'a' : 'button';

  const forwardRef = useForwardedRef(ref);
  const { firstIcon, lastIcon } = useSlots(children);
  const { actionProps, isPressed } = useAction(props, forwardRef);

  const onlyOne = Children.count(children) === 1;
  const hasIcon = atLeast(1, firstIcon, lastIcon);
  const isIconButton = hasIcon && onlyOne;
  const isDefault = !isIconButton && !underlined;
  const isOrange = isDefault && !variant;
  const isBlue = isDefault && variant === 'blue';
  const isGreen = isDefault && variant === 'green';

  return (
    <Container
      {...actionProps}
      ref={forwardRef}
      as={as}
      title={props.title}
      href={props.href}
      target={props.target}
      aria-pressed={props.href ? undefined : isPressed}
      ts_all={!isIconButton}
      ts_ease_in={!isIconButton}
      ts_duration_md={!isIconButton}
      ft_size_md={!isIconButton}
      ft_color_inherit
      ft_weight_bold
      ft_spacing_px
      ft_family_sans
      ft_no_underline
      cr_pointer
      ol_none
      bd_none={isIconButton || underlined}
      bg_transparent={isIconButton || underlined || outlined}
      after__content={underlined ? '""' : undefined}
      after__block={underlined}
      after__m_auto={underlined}
      after__w_none={underlined}
      after__h_xs={underlined}
      after__bd_radius_circle={underlined}
      after__bg_color_inherit={underlined}
      after__ts_all={underlined && !isPressed}
      after__ts_ease_in={underlined && !isPressed}
      after__ts_duration_md={underlined && !isPressed}
      after__w_percentage_80={underlined && isPressed}
      hover_after__w_percentage_100={underlined && !isPressed}
      focus_after__w_percentage_100={underlined && !isPressed}
      sd_3={!isIconButton && !underlined && !isPressed}
      hover__sd_8={!isIconButton && !underlined && !isPressed}
      focus__sd_8={!isIconButton && !underlined && !isPressed}
      h_5xl={!isIconButton && !underlined}
      min_w_5xl={!isIconButton && !underlined}
      h_6xl={!isIconButton && !underlined}
      min_w_9xl={!isIconButton && !underlined}
      p_2xl={!isIconButton && !underlined}
      px_4xl={!isIconButton && !underlined}
      sdi_6={!isIconButton && !underlined && isPressed}
      sdi_2={isIconButton && isPressed}
      hover__bg_color_base_white_600={isIconButton}
      focus__bg_color_base_white_600={isIconButton}
      dark__hover__bg_color_base_grey_800={isIconButton}
      p_none={isIconButton}
      h_4xl={isIconButton}
      w_4xl={isIconButton}
      bd_radius_pill={!underlined}
      bd_style_solid={!isIconButton && !underlined}
      bd_width_xs={!isIconButton && !underlined && outlined}
      ft_color_base_white_100={!isIconButton && !underlined && !outlined}
      hover__ft_color_base_white_100={!isIconButton && !underlined && outlined}
      focus__ft_color_base_white_100={!isIconButton && !underlined && outlined}
      //
      bd_color_base_orange_600={isOrange}
      bg_color_base_orange_600={isOrange && !outlined}
      ft_color_base_orange_700={(underlined || outlined) && !variant}
      hover__bg_color_base_orange_500={isOrange}
      hover__bd_color_base_orange_500={isOrange}
      focus__bg_color_base_orange_500={isOrange}
      focus__bd_color_base_orange_500={isOrange}
      //
      bd_color_base_blue_600={isBlue}
      bg_color_base_blue_600={isBlue && !outlined}
      ft_color_base_blue_700={(underlined || outlined) && variant === 'blue'}
      hover__bg_color_base_blue_500={isBlue}
      hover__bd_color_base_blue_500={isBlue}
      focus__bg_color_base_blue_500={isBlue}
      focus__bd_color_base_blue_500={isBlue}
      //
      bd_color_base_green_800={isGreen}
      bg_color_base_green_800={isGreen && !outlined}
      ft_color_base_green_800={(underlined || outlined) && variant === 'green'}
      hover__bg_color_base_green_700={isGreen}
      hover__bd_color_base_green_700={isGreen}
      focus__bg_color_base_green_700={isGreen}
      focus__bd_color_base_green_700={isGreen}
    >
      <IconText>{children}</IconText>
    </Container>
  );
}

const ForwardedComponent = forwardRef(Button);

export { ForwardedComponent as Button };
