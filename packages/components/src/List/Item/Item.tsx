import React, { FC } from 'react';

import { Text } from '@booleon/core';

const Item: FC = ({ children }) => {
  return <Text.li>{children}</Text.li>;
};

export default Item;
