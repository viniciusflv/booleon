import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { View } from '../packages/base/src';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withKnobs],
};

export const Default = () => {
  return <View.div fc_f00>aaa</View.div>;
};
