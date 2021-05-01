import { ReactNode } from 'react';

import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { beSlot, useSlot } from '../../hooks/useSlot';

const __Drop = booleon.section(modules);
const __Checkbox = booleon.input(modules);
const __Content = booleon.div(modules);
function Drop({ click = false, children }: any) {
  const { trigger, content } = useSlot(children);
  return (
    <__Drop
      relative
      kf_drop__from__top
      kf_drop__to__top_100$
      focus_child__visible={!click}
      focus_child__ani_name_drop={!click}
      within_child__visible={!click}
      within_child__ani_name_drop={!click}
      hover_child__visible={!click}
      hover_child__ani_name_drop={!click}>
      {trigger}
      {click ? (
        <__Checkbox
          type="checkbox"
          op_0
          absolute
          inset
          w_full
          h_full
          checked_sibling__visible
          checked_sibling__ani_name_drop
        />
      ) : null}
      <__Content
        flex
        main_end
        absolute
        invisible
        left
        ani_forwards
        ani_duration_300ms
        ani_iteration_1
        ani_ease_in_out>
        {content}
      </__Content>
    </__Drop>
  );
}

Drop.Trigger = beSlot(
  ({ children }: { children: ReactNode }) => children,
  'trigger',
);

Drop.Content = beSlot(
  ({ children }: { children: ReactNode }) => children,
  'content',
);

export default Drop;
