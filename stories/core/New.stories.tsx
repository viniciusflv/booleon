import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { hocBooleon } from '../../packages/core/src';
import { font, animation, transform } from '../../packages/modules/src';

const Text = hocBooleon(
  (props) => <span {...props} />,
  font,
  transform,
  animation,
);

export default {
  title: 'Core / New',
  component: Text,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <Text
      from__rt_360
      ani_duration_1s
      ani_iteration_infinite
      ani_forwards
      ani_ease_in_out>
      AAA
    </Text>
  );
};
