import { forwardRef } from 'react';
import type { Ref } from 'react';

import {
  cursor,
  spacing,
  outline,
  background,
  border,
  font,
  shadow,
  flex,
} from '@booleon/modules';
import { booleon } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';

import { IconText } from '../IconText';
import type { ButtonProps, ButtonRef } from './Button.type';

const _Button = booleon.button({
  ...flex,
  ...cursor,
  ...spacing,
  ...outline,
  ...background,
  ...border,
  ...font,
  ...shadow,
});

function Button(
  {
    tag = 'button',
    primary,
    outlined = false,
    children,
    first,
    last,
    col,
    ...props
  }: ButtonProps,
  ref: Ref<ButtonRef>,
) {
  const buttonRef = useForwardedRef(ref);

  return (
    <_Button
      {...props}
      tag={tag}
      ref={buttonRef}
      flex
      main_center
      px_40rxm={Boolean(children)}
      py_20rxm={Boolean(children)}
      p_20rxm={!children}
      cr_pointer
      ol_none
      ft_color_inherit
      ft_no_underline
      dark__ft_color_fff
      ft_weight_bold
      ft_spacing_1rxm
      ft_size_16rxm
      bd_none
      bd_radius_50rxm
      bd_width_2rxm
      bd_style_solid
      bd_color_fff={!primary}
      dark__bd_color_282A36={!primary}
      bd_color_d55901={primary}
      bg_transparent
      bg_color_d55901={!outlined && primary}
      bg_color_fff={!outlined && !primary}
      dark__bg_color_282A36={!outlined && !primary}
      ft_color_fff={outlined && primary}
      ft_color_d55901={outlined && !primary}
      sd_4={!outlined}
      active__sdi_6
    >
      <IconText first={first} last={last} col={col}>
        {children}
      </IconText>
    </_Button>
  );
}

const ForwardedComponent = forwardRef(Button);

export { ForwardedComponent as Button };
