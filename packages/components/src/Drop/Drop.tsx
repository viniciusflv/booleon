import React, { FC, ReactNode } from 'react';

import { View, ViewProps } from '@booleon/base';
import { Keyframe } from '@booleon/keyframe';

import { Paper } from '../Paper';

const Drop: FC<ViewProps & { trigger: ReactNode; click?: boolean }> = ({
  children,
  trigger,
  click,
  ...props
}: any) => {
  return (
    <View.div
      relative
      cr_pointer
      focus__child__visible={!click}
      focus__child__kf_drop={!click}
      within__child__visible={!click}
      within__child__kf_drop={!click}
      hover__child__visible={!click}
      hover__child__kf_drop={!click}>
      {trigger}
      {click ? (
        <View.input
          type="checkbox"
          op_0
          cr_pointer
          absolute
          inset
          w_full
          h_full
          checked__sibling__visible
          checked__sibling__kf_drop
        />
      ) : null}
      <Keyframe.provider drop>
        <Keyframe.state top />
        <Keyframe.state top_full />
      </Keyframe.provider>
      <Paper
        {...props}
        flex
        col
        absolute
        invisible
        ani_duration_300ms
        ani_iteration_1
        ani_forwards
        ani_ease_in_out>
        {children}
      </Paper>
    </View.div>
  );
};

export default Drop;
