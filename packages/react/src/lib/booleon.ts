import type { Attachments, BooleonModule } from '@booleon/core';

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
  A extends Attachments,
>(
  component: C,
  modules: M,
  attachments?: A,
) => hocBooleon(component, modules, attachments);

const booleonTagged =
  (name: string) =>
  <M extends BooleonModule, A extends Attachments>(
    modules: M,
    attachments?: A,
  ) =>
    hocBooleon(name as As, modules, attachments);

export const booleon = BooleonProxy(booleonStyled, booleonTagged);
