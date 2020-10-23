import React, { ComponentType } from 'react';

import { BooleonModule } from '../../types';
import { createBooleon } from './createBooleon';

export function styledComponent<M extends BooleonModule>(
  ReactComponent: ComponentType<any>,
  module: M,
) {
  return createBooleon('styled', module, (htmlProps, className) => (
    <ReactComponent {...htmlProps} className={className} />
  ));
}
