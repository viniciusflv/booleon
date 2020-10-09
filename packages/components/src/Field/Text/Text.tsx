import React, { FC } from 'react';

import { Box } from '../Shared/Box';

const Text: FC<React.HTMLProps<any> & { id: string }> = ({
  id,
  children,
  ...props
}) => {
  return (
    <Box id={id} type="text" {...props}>
      {children}
    </Box>
  );
};

export default Text;
