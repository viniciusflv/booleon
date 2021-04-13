import { BooleonModule } from '@booleon/core';

import { DOM_ELEMENTS } from '../constants';
import { WrappedComponentType } from '../types';
import { hocBooleon } from './hocBooleon';

const withPrefixes = <M extends BooleonModule[], P>(
  el: WrappedComponentType,
  modules: M,
) => (prefixes: P) => hocBooleon(el, modules, prefixes);

const appendWithPrefixes = <M extends BooleonModule[], C>(
  constructor: C,
  el: WrappedComponentType,
  modules: M,
) => {
  constructor['withPrefixes'] = withPrefixes(el, modules);
  return constructor as C & { withPrefixes: C };
};

const styledBooleon = <M extends BooleonModule[]>(
  el: WrappedComponentType,
  ...modules: M
) => appendWithPrefixes(hocBooleon(el, modules), el, modules);

export const booleon = DOM_ELEMENTS.map((el) => {
  const assign = <M extends BooleonModule[]>(...modules: M) =>
    appendWithPrefixes(styledBooleon(el, ...modules), el, modules);

  styledBooleon[el] = assign;

  return styledBooleon as typeof styledBooleon &
    { [key in typeof el]: typeof assign };
})[DOM_ELEMENTS.length - 1];
