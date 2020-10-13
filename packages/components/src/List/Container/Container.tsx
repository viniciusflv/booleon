import React, { FC } from 'react';

import { View } from '@booleon/core';

const Container: FC<any> = ({ type, children }) => {
  const Tag = type === 'numbered' ? View.ol : View.ul;
  return <Tag>{children}</Tag>;
};

export default Container;
