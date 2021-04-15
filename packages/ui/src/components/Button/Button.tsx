import { ReactNode } from 'react';

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

type ButtonProps = { primary: boolean; outlined: boolean; children: ReactNode };
const _Button = booleon.button(
  cursor,
  spacing,
  outline,
  background,
  border,
  font,
  shadow,
);
function Button({
  primary = true,
  outlined = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <_Button
      cr_pointer
      px_40
      py_20
      ol_none
      bg_transparent
      bd_none
      bd_radius_30
      ft_color_fff
      ft_weight_bold
      ft_spacing_1
      ft_size_16
      sd_4
      bg_color_d55901={!outlined && primary}
      bg_color_282A36={!outlined && !primary}
      bd_2_solid_d55901={outlined && primary}
      ft_color_d55901={outlined && primary}
      bd_2_solid_282A36={outlined && !primary}
      ft_color_282A36={outlined && !primary}
      active__sdi_6
      {...props}>
      {children}
    </_Button>
  );
}

export default Button;
