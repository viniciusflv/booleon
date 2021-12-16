import { forwardRef } from 'react';

import type {
  Selectors,
  BooleonModule,
  BooleonOptions,
  Props,
  WithToken,
} from '@booleon/core';

import type { Tag, BooleonHtmlProps } from '../types';
import { changeChildrenTag } from './changeChildrenTag';
import { useBooleon } from './useBooleon';

export function hocBooleon<
  R,
  M extends BooleonModule,
  C extends Tag,
  S extends Selectors,
  T extends Props,
>(
  component: C,
  booleonModule: WithToken<M, T>,
  options?: BooleonOptions<S, T>,
) {
  function BooleonComponent(
    { tag, ...props }: BooleonHtmlProps<M, S>,
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
