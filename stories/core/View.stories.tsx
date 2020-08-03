import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { View } from '../../packages/core/src';

export default {
  title: 'Core | View',
  component: View,
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  const [click, setClick] = useState(true);

  return (
    <View.div relative w_15 h_4>
      <View.section
        tabIndex={0}
        onClick={() => setClick(!click)}
        sd_1
        hover__sd_2
        active__sdi_3
        focus__ol_none
        bg_f5f5f5
        cr_pointer
        b_rounded
        w_full
        h_full
        after__content='"content"'
        after__absolute
      />
    </View.div>
  );
};
