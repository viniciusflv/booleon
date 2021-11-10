import { forwardRef } from 'react';

import type { Attachments, BooleonModule } from '@booleon/core';

import type { As, BooleonHtmlProps } from '../types';
import { changeChildrenTag } from './changeChildrenTag';
import { useBooleon } from './useBooleon';

export function createComponent<
  Y,
  M extends BooleonModule,
  C extends As,
  A extends Attachments
>(component: C, module: M, attachments?: A) {
  function BooleonComponent(
    { as, ...props }: BooleonHtmlProps<M, A>,
    ref: React.Ref<Y>,
  ) {
    const [className, forwardProps, ssr] = useBooleon(
      props,
      module,
      attachments,
    );

    return (
      <>
        {ssr}
        {changeChildrenTag(as, component, {
          ref,
          className,
          ...forwardProps,
        })}
      </>
    );
  }

  return forwardRef(BooleonComponent);
}

export const hocBooleon = <
  C extends As,
  M extends BooleonModule,
  A extends Attachments
>(
  c: C,
  m: M,
  a?: A,
) => (a ? createComponent(c, m, a) : createComponent(c, m, {}));
