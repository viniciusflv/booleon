import { forwardRef } from 'react';
import type { Ref } from 'react';

import { selector } from '@booleon/core';
import { close, search } from '@booleon/icons';
import {
  animation,
  background,
  border,
  container,
  flex,
  font,
  outline,
  sizing,
  spacing,
} from '@booleon/modules';
import { booleon } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useSearchField } from '@react-aria/searchfield';
import { useSearchFieldState } from '@react-stately/searchfield';

import { Button } from '../Button';
import { IconFirst } from '../IconText';
import { Svg } from '../Svg';

const _Wrapper = booleon.div({
  ...flex,
  ...container,
  ...font,
});

const _Input = booleon.input(
  {
    ...container,
    ...outline,
    ...animation,
    ...spacing,
    ...sizing,
    ...font,
    ...border,
    ...background,
  },
  {
    selectors: {
      placeholderShown: selector.pseudo(':placeholder-shown'),
      searchCancelButton: selector.pseudo('::-webkit-search-cancel-button'),
      searchDecoration: selector.pseudo('::-webkit-search-decoration'),
    },
  },
);

const _Label = booleon.label({
  ...font,
  ...container,
  ...spacing,
  ...sizing,
  ...animation,
});

const _Icon = booleon.div({
  ...container,
  ...spacing,
});

export type SearchFieldRef = HTMLInputElement;

function SearchField(props: any, ref: Ref<SearchFieldRef>) {
  const { label, hidden = false, placeholder = ' ' } = props;
  const forwardRef = useForwardedRef(ref);
  const state = useSearchFieldState(props);
  const { labelProps, inputProps, clearButtonProps } = useSearchField(
    props,
    state,
    forwardRef,
  );

  return (
    <_Wrapper
      flex
      cross_center
      relative
      ft_color_base_grey_400
      dark__ft_color_base_grey_200
      within__ft_color_base_orange_500
    >
      <_Input
        {...inputProps}
        w_percentage_100
        ol_none
        m_none
        px_5xl
        py_xl
        ft_color_inherit
        ft_family_sans
        ft_size_sm
        bg_color_transparent
        bd_style_solid
        bd_width_xs
        bd_color_inherit
        bd_radius_pill
        hover__bd_color_inherit
        focus__bd_color_inherit
        hover_sibling__bd_color_inherit
        focus_sibling__bd_color_inherit
        kf_up__from__top
        kf_up__half__top_neg_percentage_60
        kf_up__to__px_2xl
        kf_up__to__top_neg_percentage_60
        focus_sibling__ani_name_up
        searchCancelButton__hidden
        searchDecoration__hidden
        not_placeholderShown_sibling__ani_name_up
        placeholder={placeholder}
        sibling__ani_name_up={placeholder !== ' '}
      />
      <_Label
        {...labelProps}
        hidden={hidden}
        z_neg_1
        absolute
        px_5xl
        ft_color_inherit
        ft_family_sans
        ft_truncate
        max_w_percentage_100
        ani_forwards
        ani_duration_lg
        ani_iteration_1
        ani_ease_in_out
      >
        {label}
      </_Label>
      <_Icon absolute px_2xl>
        <Svg {...search} alt="Search" width="1.2em" height="1.2em" />
      </_Icon>
      <_Icon absolute px_2xl right>
        <Button
          onPress={clearButtonProps.onPress}
          title={clearButtonProps['aria-label'] ?? 'Reset'}
          aria-label={clearButtonProps['aria-label']}
        >
          <IconFirst {...close} alt="Reset" width="1.2em" height="1.2em" />
        </Button>
      </_Icon>
    </_Wrapper>
  );
}

const ForwardedComponent = forwardRef(SearchField);

export { ForwardedComponent as SearchField };
