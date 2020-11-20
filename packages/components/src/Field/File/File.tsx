import React, { FC, useCallback, useState } from 'react';

import { Box } from '../Shared/Box';

const aa = (size: number, counter: number): number => {
  console.log(size, counter);
  const x = size / 1024;
  if (x > 0) {
    return aa(x, ++counter);
  }
  return size;
};

const File: FC<React.HTMLProps<any> & { id: string }> = ({
  id,
  children,
  ...props
}) => {
  const [filename, setFilename] = useState<string>();

  const onFileSelect = useCallback((e) => {
    console.log(aa(e?.target?.files?.[0]?.size, 0));
    setFilename(
      `${(e?.target?.files?.[0]?.size / 1024).toFixed(2)}KB - ${
        e?.target?.files?.[0]?.name
      }`,
    );
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
