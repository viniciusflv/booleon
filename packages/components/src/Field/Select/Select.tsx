import React, { FC } from 'react';

import { Box } from '../Shared/Box';

const Select: FC<React.HTMLProps<any> & { id: string }> = ({
  id,
  children,
  ...props
}) => {
  return (
    <Box id={id} type="select" {...props}>
      {children}
    </Box>
  );
};

export default Select;
