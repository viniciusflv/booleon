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
} from '@booleon/modules';
import { booleon } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';

import type { ButtonProps, ButtonRef } from './Button.type';

const _Button = booleon.button({
  ...cursor,
  ...spacing,
  ...outline,
  ...background,
  ...border,
  ...font,
  ...shadow,
});

function Button(
  { primary = true, outlined = false, children, ...props }: ButtonProps,
  ref: Ref<ButtonRef>,
) {
  const buttonRef = useForwardedRef(ref);

  return (
    <_Button
      {...props}
      ref={buttonRef}
      cr_pointer
      px_40rxm
      py_20rxm
      ol_none
      bg_transparent
      bd_none
      bd_radius_30rxm
      ft_color_fff
      ft_weight_bold
      ft_spacing_1rxm
      ft_size_16rxm
      sd_4
      bd_width_2rxm
      bd_style_solid
      bd_color_282A36={!primary}
      bd_color_d55901={primary}
      bg_color_d55901={!outlined && primary}
      bg_color_282A36={!outlined && !primary}
      ft_color_d55901={outlined && primary}
      ft_color_282A36={outlined && !primary}
      active__sdi_6
    >
      {children}
    </_Button>
  );
}

const ForwardedComponent = forwardRef(Button);

export { ForwardedComponent as Button };
