import React, { FC } from 'react';

import { Inline } from '../Shared/Inline';

const Checkbox: FC<React.HTMLProps<any> & { id: string }> = ({
  id,
  children,
  ...props
}) => {
  return (
    <Inline id={id} type="checkbox" {...props}>
      {children}
    </Inline>
  );
};

export default Checkbox;
