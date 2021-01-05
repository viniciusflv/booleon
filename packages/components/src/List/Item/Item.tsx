import React, { FC } from 'react';

import { LiStyled } from './styles';

const Item: FC<any> = ({ children, marker, ...props }) => {
  return (
    <LiStyled li_none relative before__content={`"${marker}"`} {...props}>
      {children}
    </LiStyled>
  );
};

export default Item;
