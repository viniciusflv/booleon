import type {
  BooleonModule,
  BooleonOptions,
  Props,
  Selectors,
  WithToken,
} from '@booleon/core';

import type { As, Fn, ProxyReturnValue } from '../types';
import { hocBooleon } from './hocBooleon';

function BooleonProxy<T extends Fn, H extends Fn>(target: T, handler: H) {
  return new Proxy(target, {
    get(_, name) {
      return handler(name);
    },
  }) as ProxyReturnValue<T, H>;
}

const booleonStyled = <
  C extends As,
  M extends BooleonModule,
  S extends Selectors,
  T extends Props,
>(
  component: C,
  booleonModules: WithToken<M, T>,
  options?: BooleonOptions<S, T>,
) => hocBooleon(component, booleonModules, options);

const booleonTagged =
  (name: string) =>
  <M extends BooleonModule, S extends Selectors, T extends Props>(
    booleonModules: WithToken<M, T>,
    options?: BooleonOptions<S, T>,
  ) =>
    hocBooleon(name as As, booleonModules, options);

export const booleon = BooleonProxy(booleonStyled, booleonTagged);