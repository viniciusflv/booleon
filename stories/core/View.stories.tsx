import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { View } from '../../packages/core/src';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <View.div w_full h_30 grid cols_1fr_1fr>
      <View.div bg_f00 cols_span_2 />
    </View.div>
  );
};
