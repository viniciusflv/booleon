import { useMemo } from 'react';

import {
  sortProps,
  createClassName,
  styleCompiler,
  composeProps,
  uniqueClass,
} from '@booleon/core';
import type { Props, BooleonModule, Attachments } from '@booleon/core';

import { reactStyleAppender } from './reactStyleAppender';
import { useServerSide } from './ServerSideProvider';

export function useBooleon<
  P extends Props,
  M extends BooleonModule,
  A extends Attachments
>({ className = '', ...props }: P, module: M, attachments?: A) {
  const ssrSheet = useServerSide();

  const [booleonProps, forwardProps] = useMemo(
    () => sortProps(props, module, attachments),
    [props],
  );

  const id = createClassName(booleonProps);

  const ssr = reactStyleAppender(id, ssrSheet, () =>
    styleCompiler(id, composeProps(booleonProps), module, attachments),
  );

  return [uniqueClass(id, className), forwardProps as Props, ssr] as const;
}
