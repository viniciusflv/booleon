import { forwardRef } from 'react';

import type { Attachments, BooleonModule } from '@booleon/core';

import type { As, BooleonHtmlProps } from '../types';
import { changeChildrenTag } from './changeChildrenTag';
import { useBooleon } from './useBooleon';

export function hocBooleon<
  Y,
  M extends BooleonModule,
  C extends As,
  A extends Attachments
>(component: C, module: M, attachments?: A) {
  function BooleonComponent(
    { as, ...props }: BooleonHtmlProps<M, A>,
    ref: React.Ref<Y>,
  ) {
    const [className, htmlProps, ssr] = useBooleon(props, module, attachments);

    return (
      <>
        {ssr}
        {changeChildrenTag(as, component, {
          ref,
          className,
          ...htmlProps,
        })}
      </>
    );
  }

  return forwardRef(BooleonComponent);
}
