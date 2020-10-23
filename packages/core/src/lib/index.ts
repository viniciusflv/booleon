import { ComponentType } from 'react';

import { BooleonModule, BooleonComponent } from '../types';
import {
  createComponent,
  styledComponent,
  multipleComponent,
} from './creators';

export function booleon<
  E extends readonly (keyof React.ReactDOM)[],
  M extends BooleonModule
>(elements: E, module: M) {
  const components = elements.reduce(
    (acc, element) => ({
      ...acc,
      [element]: createComponent(element, module),
    }),
    {} as BooleonComponent<E[number], M>,
  );

  return {
    multiple: multipleComponent(module),
    styled: (c: ComponentType<any>) => styledComponent(c, module),
    ...components,
  };
}
