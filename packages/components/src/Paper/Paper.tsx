import React, { FC } from 'react';

import { PaperStyled } from './styles';

const Paper: FC<any> = ({ children, ...props }) => {
  return (
    <PaperStyled bg_fff b_edge sd_3 hover__sd_6 {...props}>
      {children}
    </PaperStyled>
  );
};

export default Paper;
