import { BooleonModule, Props, PrefixHandler } from '@booleon/core';

import { DOM_ELEMENTS } from '../constants';
import { WrappedComponentType } from '../types';
import { hocBooleon } from './hocBooleon';

const withPrefixes = <M extends BooleonModule[]>(
  el: WrappedComponentType,
  modules: M,
) => <P extends Props<string, PrefixHandler>>(prefixes: P) =>
  hocBooleon(el, modules, prefixes);

const appendWithPrefixes = <M extends BooleonModule[], C>(
  constructor: C,
  el: WrappedComponentType,
  modules: M,
) => {
  const prefixes = withPrefixes(el, modules);
  constructor['withPrefixes'] = prefixes;
  return constructor as C & { withPrefixes: typeof prefixes };
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
