import { createElement } from 'react';

import { BooleonModule } from '../../types';
import { createBooleon } from './createBooleon';

export function createComponent<
  E extends keyof React.ReactDOM,
  M extends BooleonModule
>(element: E, module: M) {
  return createBooleon(element, module, (htmlProps, className) =>
    createElement(element, {
      ...htmlProps,
      className,
    }),
  );
}
