import { BooleonModule } from '@booleon/core';

import { DOM_ELEMENTS } from '../constants';
import { createBooleon } from './createBooleon';
import { hocBooleon } from './hocBooleon';

const styledBooleon = hocBooleon;

export const booleon = DOM_ELEMENTS.map((el) => {
  const assign = <M extends BooleonModule[]>(...modules: M) =>
    createBooleon(el, ...modules);
  styledBooleon[el] = assign;
  return styledBooleon as typeof styledBooleon &
    { [key in typeof el]: typeof assign };
})[DOM_ELEMENTS.length - 1];
