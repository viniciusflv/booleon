import React from 'react';

import { BooleonHtmlProps, BooleonModule } from '../../core/src';
import { useBooleon } from './useBooleon';

export function hocBooleon<M extends BooleonModule[]>(
  WrappedComponent: React.ComponentType<any>,
  ...modules: M
) {
  const BooleonComponent: React.FC<BooleonHtmlProps<M[number]>> = (
    props: BooleonHtmlProps<M[number]>,
  ) => {
    const [className, htmlProps] = useBooleon(props, ...modules);
    return <WrappedComponent className={className} {...htmlProps} />;
  };
  return BooleonComponent;
}
