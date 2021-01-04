import { createElement } from 'react';

import { BooleonComponent, BooleonModule } from '../../../core/src';
import { DOM_ELEMENTS } from '../constants';
import { hocBooleon } from './hocBooleon';

export const styledBooleon = (<M extends BooleonModule[]>(): typeof hocBooleon &
  Required<BooleonComponent<typeof DOM_ELEMENTS[number], M[number]>> =>
  hocBooleon as any)();

DOM_ELEMENTS.forEach((element) => {
  styledBooleon[element] = <M extends BooleonModule[]>(...modules: M) =>
    hocBooleon((props) => createElement(element, props), ...modules);
});
