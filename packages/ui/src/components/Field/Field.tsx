import { selector } from '@booleon/core';
import {
  animation,
  container,
  flex,
  font,
  sizing,
  spacing,
  border,
  background,
} from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Wrapper = booleon.div({
  ...flex,
  ...container,
  ...animation,
  ...sizing,
});
const _Input = booleon.input(
  {
    ...container,
    ...animation,
    ...spacing,
    ...sizing,
    ...font,
    ...border,
    ...background,
  },
  {
    placeholderShown: selector.pseudo(':placeholder-shown'),
  },
);
const _Label = booleon.label({
  ...font,
  ...container,
  ...spacing,
  ...animation,
});

function Field({
  label = 'Label',
  hidden = false,
  placeholder = ' ',
  ...props
}: any) {
  const orange = '#d55901';
  const grey = '#d5d5d5';
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
        ft_size_14rxm
        bd_style_solid
        bd_width_2rxm
        bd_color_$={grey}
        hover__bd_color_$={orange}
        focus__bd_color_$={orange}
        hover_sibling__ft_color_$={orange}
        focus_sibling__ft_color_$={orange}
        dark__bd_color_var_font_color
        dark__hover__bd_color_$={orange}
        dark__focus__bd_color_$={orange}
        dark__hover_sibling__ft_color_$={orange}
        dark__focus_sibling__ft_color_$={orange}
        bd_radius_50rxm
        ol_none
        placeholder={placeholder}
        not_placeholderShown_sibling__ani_name_up
      />
      <_Label
        hidden={hidden}
        z_neg_1
        absolute
        px_20rxm
        ft_size_14rxm
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
