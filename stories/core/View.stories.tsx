import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { View } from '../../packages/core/src';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withKnobs],
};

export const Default = () => {
  const bg_img = 'https://www.w3schools.com/cssref/img_tree.gif';
  return <View.div data-testid="bg_img" bg_img={bg_img} />;
};
