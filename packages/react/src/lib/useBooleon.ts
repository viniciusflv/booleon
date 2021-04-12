import { useMemo } from 'react';

import {
  composeProps,
  styleCompiler,
  uniqueClass,
  Props,
  BooleonModule,
  stringHash,
} from '@booleon/core';

import { filterProps } from './filterProps';
import { reactStyleAppender } from './reactStyleAppender';
import { useServerSide } from './ServerSideProvider';

export function useBooleon<P extends Props, M extends BooleonModule[]>(
  { className = '', ...props }: P,
  modules: M,
  prefixes?: any,
) {
  const ssrSheet = useServerSide();
  const [booleonProps, forwardProps] = useMemo(() => filterProps(props), [
    props,
  ]);
  const hash = stringHash(
    Object.keys(booleonProps).reduce(
      (acc, k) => (booleonProps[k] ? (acc += k) : acc),
      '',
    ),
  );
  const id = `bl-${hash}`;

  const ssr = reactStyleAppender(id, ssrSheet, () => {
    const booleonModules = Object.assign({}, ...modules);
    return styleCompiler(
      id,
      composeProps(booleonProps),
      booleonModules,
      prefixes,
    );
  });

  return [uniqueClass(id, className), forwardProps as Props, ssr] as const;
}
