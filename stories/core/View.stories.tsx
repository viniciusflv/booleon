import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { View, Text } from '../../packages/core/src';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  const [click, setClick] = useState(true);

  return (
    <View.button
      onClick={() => setClick(!click)}
      b_none
      sd_1
      hover__sd_3
      active__sdi_6
      focus__ol_none
      bg_0_0_0_50
      cr_pointer
      b_rounded
      py_10
      px_25
    >
      <View.div by_none />
      <Text.span fc_fff fs_12>Aperte o botão</Text.span>
    </View.button>
  );
};
