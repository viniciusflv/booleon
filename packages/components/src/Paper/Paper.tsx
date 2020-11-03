import React, { FC } from 'react';

import { View, ViewProps } from '@booleon/base';

const Paper: FC<ViewProps> = ({ children, ...props }) => {
  return (
    <View.section bg_fff b_edge sd_3 hover__sd_6 {...props}>
      {children}
    </View.section>
  );
};

export default Paper;
