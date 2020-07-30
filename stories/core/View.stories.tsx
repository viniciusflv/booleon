import { View } from '../../packages/core/src';
import React, { FC, useState } from 'react';

export default {
  title: 'Core | View',
  component: View,
};

export const Default: FC = () => {
  const [click, setClick] = useState(true);
  console.log(click);
  return (
    <View.section
      onClick={() => setClick(!click)}
      style={{ height: 50, width: 50 }}
      after__bg_ff0
      md__bg_000
      bg_f00={click}
      bg_ff0={!click}
    />
  );
};
