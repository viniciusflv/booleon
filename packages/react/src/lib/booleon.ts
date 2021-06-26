import { BooleonModule, Props, PrefixHandler } from '@booleon/core';

import { DOM_ELEMENTS } from '../constants';
import { WrappedComponentType } from '../types';
import { hocBooleon } from './hocBooleon';

const withPrefixes = <M extends BooleonModule[]>(
  el: WrappedComponentType,
  modules: M,
) => <P extends Props<string, PrefixHandler>>(prefixes: P) =>
  hocBooleon(el, modules, prefixes);

const styledBooleon = <M extends BooleonModule[]>(
  el: WrappedComponentType,
  ...modules: M
) => {
  const styled = hocBooleon(el, modules);
  const prefixes = withPrefixes(el, modules);
  styled['withPrefixes'] = prefixes;
  return styled as typeof styled & { withPrefixes: typeof prefixes };
};

export const booleon = DOM_ELEMENTS.map((el) => {
  const assign = <M extends BooleonModule[]>(...modules: M) =>
    styledBooleon(el, ...modules);

  styledBooleon[el] = assign;

  return styledBooleon as typeof styledBooleon &
    { [key in typeof el]: typeof assign };
})[DOM_ELEMENTS.length - 1];
