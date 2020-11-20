import React, { FC } from 'react';

import { View } from '@booleon/base';

const Accordion: FC = ({ children }) => {
  return (
    <View.details>
      <View.summary cr_pointer>aasd</View.summary>
      {children}
    </View.details>
  );
};

export default Accordion;
