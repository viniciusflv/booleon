import React, { FC, useCallback, useState } from 'react';

import { Box } from '../Shared/Box';

const File: FC<React.HTMLProps<any> & { id: string }> = ({
  id,
  children,
  ...props
}) => {
  const [filename, setFilename] = useState();

  const onFileSelect = useCallback((e) => {
    setFilename(e?.target?.files?.[0]?.name);
    props?.onChange?.(e);
  }, []);

  return (
    <Box
      id={id}
      type="file"
      cr_pointer
      op_0
      {...props}
      onChange={onFileSelect}
      placeholder={filename || props?.placeholder}>
      {children}
    </Box>
  );
};

export default File;
