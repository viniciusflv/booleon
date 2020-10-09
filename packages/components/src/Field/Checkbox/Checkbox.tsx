import React, { FC } from 'react';

import { Text, View } from '../../../../core/src';

const Checkbox: FC<any> = ({ id, children, ...props }) => {
  return (
    <View.div flex cross_center fc_555>
      <View.input
        {...props}
        id={id}
        type="checkbox"
        noappearance
        ol_none
        cr_pointer
        w_50
        h_50
        relative
        flex
        b_edge
        cross_center
        main_center
        fs_30
        fc_fff
        bw_1
        bc_555
        bs_solid
        bg_d5d5d5
        mr_10
        ts_all
        ease_in
        ts_duration_500ms
        hover__bg_fafafa
        checked__bg_00f
        focus__bc_00f
        checked__before__content='"✔"'
        before__absolute
        focus__sibling__fc_00f
      />
      {children ? (
        <Text.label htmlFor={id} fsl_none cr_pointer fs_20 ff_sans>
          {children}
        </Text.label>
      ) : null}
    </View.div>
  );
};

export default Checkbox;
