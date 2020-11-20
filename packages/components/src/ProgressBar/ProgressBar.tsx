import React, { FC } from 'react';

import { View } from '@booleon/base';

const ProgressBar: FC<
  {
    value: string | number;
    max: string | number;
  } & any
> = (props) => {
  return <View.progress {...props} />;
};

export default ProgressBar;
