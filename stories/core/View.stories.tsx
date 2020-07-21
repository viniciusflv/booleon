import { View } from '../../packages/core/src';
import React, { FC } from 'react';

export default {
  title: 'Core | View',
  component: View,
};

export const Default: FC = () => (
  <View
    bg_fixed
    b_rounded
    z_max
    cr_pointer
    flex
    f_center
    gb_HEX
  />
);
