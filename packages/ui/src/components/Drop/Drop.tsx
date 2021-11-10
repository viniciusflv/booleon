import { forwardRef, useState, useEffect } from 'react';
import type { Ref } from 'react';

import { container, animation, cursor, sizing, flex } from '@booleon/modules';
import { booleon } from '@booleon/react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { beSlot, useSlots } from 'use-slots';

import type { DropProps, DropRef } from './Drop.type';

const _Drop = booleon.section({ ...container, ...animation });
const _Checkbox = booleon.input({
  ...container,
  ...animation,
  ...cursor,
  ...sizing,
});
const _Content = booleon.div({
  ...container,
  ...animation,
  ...flex,
});

function Drop(
  { open = false, click = false, children }: DropProps,
  ref: Ref<DropRef>,
) {
  const dropRef = useForwardedRef(ref);
  const { trigger, content } = useSlots(children);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <_Drop
      ref={dropRef}
      relative
      kf_drop__from__top
      kf_drop__to__top_100$
      focus_child__visible={!click}
      focus_child__ani_name_drop={!click}
      within_child__visible={!click}
      within_child__ani_name_drop={!click}
      hover_child__visible={!click}
      hover_child__ani_name_drop={!click}
      child__visible={isOpen && !click}
      child__ani_name_drop={isOpen && !click}
    >
      {trigger}
      {click ? (
        <_Checkbox
          type="checkbox"
          onClick={({ target }) =>
            setIsOpen((target as HTMLInputElement)?.checked)
          }
          checked={isOpen}
          cr_pointer
          op_0
          absolute
          inset
          w_100$
          h_100$
          checked_sibling__visible
          checked_sibling__ani_name_drop
        />
      ) : null}
      <_Content
        flex
        main_end
        absolute
        invisible
        left
        w_100$
        ani_forwards
        ani_duration_300ms
        ani_iteration_1
        ani_ease_in_out
      >
        {content}
      </_Content>
    </_Drop>
  );
}

const ForwardedComponent = forwardRef(Drop);
export { ForwardedComponent as Drop };

export const DropTrigger = beSlot(
  ({ children }: { children: any }) => children,
  'trigger',
);

export const DropContent = beSlot(
  ({ children }: { children: any }) => children,
  'content',
);
