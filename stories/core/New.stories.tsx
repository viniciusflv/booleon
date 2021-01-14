import React from 'react';

import { booleon, useTheme } from '../../packages/react/src';

import {
  flex,
  spacing,
  sizing,
  background,
  border,
  shadow,
  animation,
  transform,
} from '../../packages/modules/src';

export default {
  title: 'Core / New',
};

const Div = booleon.div(
  flex,
  background,
  spacing,
  sizing,
  border,
  shadow,
  animation,
  transform,
);

export const Default = () => {
  const { toggleTheme } = useTheme();
  return (
    <Div w_full h_full sdi_24 dark__bg_2f2f2f>
      <Div flex main_center cross_center h_screen w_full>
        <Div flex sdi_24 b_edge>
          <Div
            sd_8
            h_screen_15
            w_screen_20
            sm__h_screen_40
            sm__w_screen_20
            b_edge
            bg_d5d5d5
            dark__bg_fff
            bg_2f2f2f
            kf__a
            from__sky_neg_0
            to__sky_45
            ani_name_a
            ani_forwards
            ani_duration_2s
            ani_iteration_1
            onClick={toggleTheme}
          />
          <Div
            sd_8
            h_screen_15
            w_screen_20
            sm__h_screen_40
            sm__w_screen_20
            b_edge
            bg_d5d5d5
            dark__bg_fff
            bg_2f2f2f
            kf__b
            from__sky_0
            to__sky_neg_45
            ani_name_b
            ani_forwards
            ani_duration_2s
            ani_iteration_1
            onClick={toggleTheme}
          />
        </Div>
      </Div>
      <Div>asdasd</Div>
    </Div>
  );
};
