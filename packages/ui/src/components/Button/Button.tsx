import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Button = booleon.button(modules);
function Button({ primary = true, children, ...props }: any) {
  return (
    <_Button
      cr_pointer
      px_30
      py_15
      ol_none
      bd_none
      bd_radius_30
      ft_color_fff
      ft_weight_bold
      ft_spacing_1
      ft_size_15
      bg_color_d55901={primary}
      bg_color_22202c={!primary}
      focus__bd_2_solid_22202c={primary}
      active__bd_2_solid_22202c={primary}
      focus__bd_2_solid_d55901={!primary}
      active__bd_2_solid_d55901={!primary}
      {...props}>
      {children}
    </_Button>
  );
}

export default Button;
