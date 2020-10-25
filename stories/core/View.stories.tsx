import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { View, ViewProps } from '../../packages/base/src';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withKnobs],
};

const Ax: React.FC<ViewProps> = (props) => <View.div {...props}>aaa</View.div>;

export const Default = () => {
  return (
    <Ax
      f_italic
      content="sadsad"
      relative
      bg_0f0
      kf_scale
      kf_duration_1s
      kf_iteration_infinite>
      aaa
    </Ax>
  );
};
