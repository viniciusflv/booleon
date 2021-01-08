import React from 'react';

import { styledBooleon, useTheme } from '../../packages/react/src';

import {
  spacing,
  sizing,
  background,
  border,
  shadow,
} from '../../packages/modules/src';

export default {
  title: 'Core / New',
};

const Div = styledBooleon.div(background, spacing, sizing, border, shadow);

export const Default = () => {
  const { toggleTheme } = useTheme();
  return (
    <Div
      sd_8
      h_400
      w_400
      b_edge
      btr_rounded
      bbl_rounded
      bg_d5d5d5
      dark__bg_2f2f2f
      onClick={toggleTheme}
    />
  );
};
