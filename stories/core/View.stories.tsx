import { Text, View } from '../../packages/core/src';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <View.div flex cross_center fc_555>
      <View.input
        id="checkbox"
        type="checkbox"
        noappearance
        ol_none
        cr_pointer
        w_200
        h_200
        relative
        flex
        b_edge
        cross_center
        main_center
        fs_20
        fc_fff
        bw_1
        bc_555
        bs_solid
        bg_d5d5d5
        checked__bg_00f
        focus__bc_00f
        checked__before__content='"✔"'
        before__absolute
        focus__sibling__fc_00f
      />
      <Text.label htmlFor="checkbox" fsl_none cr_pointer fs_12 ff_sans>
        Checkbox
      </Text.label>
    </View.div>
  );
};
