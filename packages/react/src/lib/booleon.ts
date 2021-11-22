import type { Selectors, BooleonModule } from '@booleon/core';

import type { Tag, Fn, ProxyReturnValue } from '../types';
import { hocBooleon } from './hocBooleon';

function BooleonProxy<T extends Fn, H extends Fn>(target: T, handler: H) {
  return new Proxy(target, {
    get(_, name) {
      return handler(name);
    },
  }) as ProxyReturnValue<T, H>;
}

const booleonStyled = <
  C extends Tag,
  M extends BooleonModule,
  S extends Selectors,
>(
  component: C,
  booleonModules: M,
  customSelectors?: S,
) => hocBooleon(component, booleonModules, customSelectors);

const booleonTagged =
  (name: string) =>
  <M extends BooleonModule, S extends Selectors>(
    booleonModules: M,
    customSelectors?: S,
  ) =>
    hocBooleon(name as Tag, booleonModules, customSelectors);

export const booleon = BooleonProxy(booleonStyled, booleonTagged);
