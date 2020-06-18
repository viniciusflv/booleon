import { View, ViewProps } from '../../../../core/src';
import React, { FC } from 'react';

export const Card: FC<ViewProps> = ({ children, ...props }) => {
  return (
    <View
      section
      flex
      col
      cross_center
      main_between
      w_full
      h_full
      w_max_full
      h_max_full
      h_min_16
      w_min_8
      px_sm
      py_md
      b_edge
      bg_fff
      sd_1
      {...props}>
      {children}
    </View>
  );
};
