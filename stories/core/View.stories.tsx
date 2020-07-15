import { View } from '../../packages/core/src';
import React, { FC } from 'react';

export default {
  title: 'Core | View',
  component: View,
};

export const Default: FC = () => (
  <View
    flex
    main_center
    cross_center
    w_full
    h_screen_50
    by_thick
    bg_f00
    sdi_8
  >
    <View
      w_8
      h_8
      bg_000
      btl_rounded
      bb_circular
      gl_fff
      g_op_30
      sd_8
    />
  </View>
);
