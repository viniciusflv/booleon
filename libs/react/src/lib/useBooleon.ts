import { useMemo } from 'react';

import {
  composeProps,
  createClassName,
  sortProps,
  styleCompiler,
  uniqueClass,
} from '@booleon/core';
import type {
  BooleonModule,
  BooleonOptions,
  Props,
  Selectors,
  WithToken,
} from '@booleon/core';

import { reactStyleAppender } from './reactStyleAppender';
import { useServerSide } from './ServerSideProvider';

export function useBooleon<
  P extends Props,
  M extends BooleonModule,
  S extends Selectors,
  T extends Props,
>(
  { className = '', ...props }: P,
  booleonModule: WithToken<M, T>,
  options?: BooleonOptions<S, T>,
) {
  const ssrSheet = useServerSide();

  const [booleonProps, forwardProps] = useMemo(
    () => sortProps(props, booleonModule, options?.selectors),
    [props],
  );

  const id = createClassName(booleonProps);

  const ssr = reactStyleAppender(id, ssrSheet, () =>
    styleCompiler(id, composeProps(booleonProps), booleonModule, options),
  );

  return [uniqueClass(id, className), forwardProps as Props, ssr] as const;
}
