import React, { FC } from 'react';

import { Text } from '../../../../base/src';

const Item: FC<any> = ({ children, marker, ...props }) => {
  return (
    <Text.li li_none relative before__content={`"${marker}"`} {...props}>
      {children}
    </Text.li>
  );
};

export default Item;
