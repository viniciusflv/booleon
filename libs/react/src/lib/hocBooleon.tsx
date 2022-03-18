import React, { forwardRef } from 'react';

import type {
  BooleonModule,
  BooleonOptions,
  Props,
  Selectors,
  WithToken,
} from '@booleon/core';

import type { As, BooleonHtmlProps } from '../types';
import { changeChildrenTag } from './changeChildrenTag';
import { useBooleon } from './useBooleon';

export function hocBooleon<
  R,
  M extends BooleonModule,
  C extends As,
  S extends Selectors,
  T extends Props,
>(
  component: C,
  booleonModule: WithToken<M, T>,
  options?: BooleonOptions<S, T>,
) {
  function BooleonComponent(
    { as: tag, ...props }: BooleonHtmlProps<M, S>,
    ref: React.Ref<R>,
  ) {
    const [className, forwardProps, ssr] = useBooleon(
      props,
      booleonModule,
      options,
    );

    return (
      <>
        {ssr}
        {changeChildrenTag(tag, component, {
          ref,
          className,
          ...forwardProps,
        })}
      </>
    );
  }

  return forwardRef(BooleonComponent);
}