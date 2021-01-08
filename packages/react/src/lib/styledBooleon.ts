import { BooleonModule } from '../../../core/src';
import { DOM_ELEMENTS } from '../constants';
import { createBooleon } from './createBooleon';
import { hocBooleon } from './hocBooleon';

const styledConst = hocBooleon;

export const styledBooleon = DOM_ELEMENTS.map((el) => {
  const assign = <M extends BooleonModule[]>(...modules: M) =>
    createBooleon(el, ...modules);
  styledConst[el] = assign;
  return styledConst as typeof styledConst &
    { [key in typeof el]: typeof assign };
})[DOM_ELEMENTS.length - 1];
