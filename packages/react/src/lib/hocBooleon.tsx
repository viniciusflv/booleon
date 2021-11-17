import { forwardRef } from 'react';

import type { Selectors, BooleonModule } from '@booleon/core';

import type { As, BooleonHtmlProps } from '../types';
import { changeChildrenTag } from './changeChildrenTag';
import { useBooleon } from './useBooleon';

export function createComponent<
  R,
  M extends BooleonModule,
  C extends As,
  S extends Selectors,
>(component: C, booleonModule: M, customSelectors?: S) {
  function BooleonComponent(
    { as, ...props }: BooleonHtmlProps<M, S>,
    ref: React.Ref<R>,
  ) {
    const [className, forwardProps, ssr] = useBooleon(
      props,
      booleonModule,
      customSelectors,
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
  S extends Selectors,
>(
  c: C,
  m: M,
  s?: S,
) => (s ? createComponent(c, m, s) : createComponent(c, m, {}));
