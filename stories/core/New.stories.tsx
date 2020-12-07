import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { hocBooleon } from '../../packages/core/src';
import { font, animation } from '../../packages/modules/src';

const Text = hocBooleon((props) => <span {...props} />, font, animation);

export default {
  title: 'Core / New',
  component: Text,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <Text
      kf__from__fc_fff
      kf__from__fs_12
      kf__to__fc_0f0
      kf__to__fs_30
      ani_duration_3s
      ani_iteration_infinite
      ani_forwards
      ani_ease_in_out>
      AAA
    </Text>
  );
};
