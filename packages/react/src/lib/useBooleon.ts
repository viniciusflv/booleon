import { useMemo } from 'react';

import {
  sortProps,
  createClassName,
  styleCompiler,
  composeProps,
  uniqueClass,
} from '@booleon/core';
import type { Props, BooleonModule, Selectors } from '@booleon/core';

import { reactStyleAppender } from './reactStyleAppender';
import { useServerSide } from './ServerSideProvider';

export function useBooleon<
  P extends Props,
  M extends BooleonModule,
  S extends Selectors,
>({ className = '', ...props }: P, booleonModule: M, customSelectors?: S) {
  const ssrSheet = useServerSide();

  const [booleonProps, forwardProps] = useMemo(
    () => sortProps(props, booleonModule, customSelectors),
    [props],
  );

  const id = createClassName(booleonProps);

  const ssr = reactStyleAppender(id, ssrSheet, () =>
    styleCompiler(
      id,
      composeProps(booleonProps),
      booleonModule,
      customSelectors,
    ),
  );

  return [uniqueClass(id, className), forwardProps as Props, ssr] as const;
}
