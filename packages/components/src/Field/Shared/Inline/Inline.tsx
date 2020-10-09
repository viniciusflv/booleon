import React, { FC } from 'react';

import { Text, View } from '@booleon/core';

const Inline: FC<
  React.HTMLProps<any> & { id: string; type: 'radio' | 'checkbox' | string }
> = ({ id, type, children, ...props }) => {
  return (
    <View.div flex cross_center fc_555>
      <View.input
        {...props}
        id={id}
        type={type}
        noappearance
        ol_none
        cr_pointer
        w_45
        h_45
        relative
        flex
        b_edge={type === 'checkbox'}
        b_circular={type === 'radio'}
        cross_center
        main_center
        fs_50={type === 'radio'}
        fs_30={type === 'checkbox'}
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
        checked__before__content={`"${type === 'radio' ? '•' : '✔'}"`}
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

export default Inline;
