import { selector } from '@booleon/core';
import modules, {
  animation,
  container,
  flex,
  font,
  sizing,
  spacing,
} from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Wrapper = booleon.div({
  ...flex,
  ...container,
  ...animation,
  ...sizing,
});
const _Input = booleon.input(modules, {
  placeholderShown: selector.pseudo(':placeholder-shown'),
});
const _Label = booleon.label({
  ...font,
  ...container,
  ...spacing,
  ...animation,
});

function Field({ label = 'Label', hidden = false, ...props }: any) {
  return (
    <_Wrapper flex cross_center relative>
      <_Input
        {...props}
        kf_up__from__top
        kf_up__to__top_neg_50$
        focus_sibling__ani_name_up
        w_100$
        m_0
        px_20rxm
        py_10rxm
        bg_transparent
        ft_color_var_font_color
        bd_style_solid
        bd_width_2rxm
        bd_color_d5d5d5
        hover__bd_color_d55901
        focus__bd_color_d55901
        dark__bd_color_var_font_color
        bd_radius_50rxm
        ol_none
        placeholder=" "
        placeholderShown_sibling__hidden
      />
      <_Label
        hidden={hidden}
        z_neg_1
        absolute
        px_20px
        ani_forwards
        ani_duration_300ms
        ani_iteration_1
        ani_ease_in_out
      >
        {label}
      </_Label>
    </_Wrapper>
  );
}

export default Field;
