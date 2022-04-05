import { forwardRef } from 'react';
import type { Ref } from 'react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useToggleButton } from '@react-aria/button';
import { useToggleState } from '@react-stately/toggle';
import { beSlot, useSlots } from 'use-slots';

import { Container } from '../Container';
import { Svg, SvgProps } from '../Svg';
import { ToggleProps } from './Toggle.types';

export type ToggleRef = HTMLButtonElement;

function Toggle({ children, ...props }: ToggleProps, ref: Ref<ToggleRef>) {
  const forwardRef = useForwardedRef(ref);
  const state = useToggleState(props);
  const { buttonProps } = useToggleButton(props, state, forwardRef);
  const { firstIcon, lastIcon } = useSlots(children);

  return (
    <Container
      {...buttonProps}
      as="button"
      ref={forwardRef}
      aria-pressed={state.isSelected}
      flex
      cross_center
      main_between
      gap_lg
      h_4xl
      p_md
      m_none
      cr_pointer
      bd_none
      bd_radius_pill
      bg_color_inherit
      ft_size_lg
      ft_color_base_orange_500
      sdi_4
      ol_none
      relative
      ts_all
      ts_ease_in
      ts_duration_md
      before__ts_all
      before__ts_ease_in
      before__ts_duration_md
      before__content
      before__absolute
      before__top
      before__h_3xl
      before__w_3xl
      before__m_sm
      before__bd_radius_circle
      before__bg_color_base_white_100
      before__sd_4
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
      {firstIcon}
      {lastIcon}
    </Container>
  );
}

const Icon = (props: SvgProps) => (
  <Svg {...props} as="i" color="white" width=".9em" height=".9em" />
);

export const IconOn = beSlot(
  (props: SvgProps) => <Icon {...props} />,
  'firstIcon',
);

export const IconOff = beSlot(
  (props: SvgProps) => <Icon {...props} />,
  'lastIcon',
);

const ForwardedComponent = forwardRef(Toggle);

export { ForwardedComponent as Toggle };
