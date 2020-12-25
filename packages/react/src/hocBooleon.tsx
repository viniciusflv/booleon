import React from 'react';

import { BooleonHtmlProps, BooleonModule } from '../../core/src';
import { useBooleon } from './useBooleon';

export function hocBooleon<M extends BooleonModule[]>(
  WrappedComponent: React.ComponentType,
  ...modules: M
) {
  const BooleonComponent: React.FC<BooleonHtmlProps<M[number]>> = (
    props: BooleonHtmlProps<M[number]>,
  ) => <WrappedComponent {...useBooleon(props, ...modules)} />;
  return BooleonComponent;
}
