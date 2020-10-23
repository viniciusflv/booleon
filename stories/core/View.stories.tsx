import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { View } from '../../packages/base/src';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <View.div
      content="sadsad"
      relative
      bg_0f0
      kf_scale
      kf_duration_1s
      kf_iteration_infinite>
      aaa
    </View.div>
  );
};
