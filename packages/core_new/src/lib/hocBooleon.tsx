import React from 'react';

import { BooleonHtmlProps, BooleonModule, ConcatTuples } from '../types';
import { useBooleon } from './useBooleon';

export function hocBooleon<M extends BooleonModule[]>(
  WrappedComponent: React.ComponentType,
  ...modules: M
) {
  const BooleonComponent: React.FC<
    BooleonHtmlProps<ConcatTuples<M[number]>>
  > = (props: BooleonHtmlProps<ConcatTuples<M[number]>>) => (
    <WrappedComponent {...useBooleon(props, ...modules)} />
  );
  return BooleonComponent;
}
