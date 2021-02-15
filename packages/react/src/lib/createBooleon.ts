import { createElement } from 'react';

import { BooleonModule } from '@booleon/core';

import { DOM_ELEMENTS } from '../constants';
import { hocBooleon } from './hocBooleon';

export const createBooleon = <M extends BooleonModule[]>(
  element: typeof DOM_ELEMENTS[number],
  ...modules: M
) => hocBooleon((props) => createElement(element, props), ...modules);
