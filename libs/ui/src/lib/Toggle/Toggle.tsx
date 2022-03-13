import { forwardRef } from 'react';
import type { Ref } from 'react';

import { dark, light } from '@booleon/icons';
import { useTheme } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useToggleButton } from '@react-aria/button';
import { useToggleState } from '@react-stately/toggle';

import { Container } from '../Container';
import { Svg } from '../Svg';

function Toggle(props: any, ref: Ref<HTMLButtonElement>) {
  const forwardRef = useForwardedRef(ref);
  const state = useToggleState(props);
  const { buttonProps } = useToggleButton(props, state, forwardRef);
  const { toggleTheme } = useTheme();

  return (
    <Container
      {...buttonProps}
      onClick={toggleTheme}
      as="button"
      ref={forwardRef}
      aria-pressed={state.isSelected}
      flex
      cross_center
      main_between
      gap_lg
      h_5xl
      p_md
      m_none
      cr_pointer
      bd_none
      bd_radius_pill
      bd_width_xs
      bd_color_inherit
      bd_style_solid
      ft_color_base_orange_500
      dark__ft_color_base_orange_900
      ft_size_lg
      sdi_3
      ol_none
      relative
      before__ts_all
      before__ts_ease_in
      before__ts_duration_md
      before__content
      before__absolute
      before__m_neg_xs
      before__top
      before__h_5xl
      before__w_5xl
      before__bd_radius_circle
      before__bg_color_inherit
      before__sd_1
      kf_on__from__left
      kf_on__half__left_percentage_50
      kf_on__to__right
      kf_off__from__right
      kf_off__half__right_percentage_50
      kf_off__to__left
      before__ani_forwards
      before__ani_iteration_1
      before__ani_duration_2xl
      before__ani_ease_out
      before__ani_name_on={state.isSelected}
      before__ani_name_off={!state.isSelected}
    >
      <Svg {...dark} alt="dark" width="1.5em" height="1.5em" />
      <Svg {...light} alt="light" width="1.5em" height="1.5em" />
    </Container>
  );
}

const ForwardedComponent = forwardRef(Toggle);

export { ForwardedComponent as Toggle };
