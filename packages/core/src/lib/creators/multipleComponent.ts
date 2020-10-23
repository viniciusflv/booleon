import { Children, cloneElement, useCallback } from 'react';

import { useUniqueClass } from '../../hooks/useUniqueClass';
import { BooleonModule } from '../../types';
import { createBooleon } from './createBooleon';

export function multipleComponent<M extends BooleonModule>(module: M) {
  return createBooleon('multiple', module, ({ children }, className) => {
    const applyClassName = useCallback(
      (el) =>
        cloneElement(el, {
          className: useUniqueClass(className, el.props.className),
        }),
      [className],
    );

    return Children.map(children, (child) => applyClassName(child));
  });
}
