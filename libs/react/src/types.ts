import type { ForwardRefExoticComponent } from 'react';

import type {
  BooleonModule,
  BooleonProps,
  Props,
  Selectors,
} from '@booleon/core';

export type As = React.ComponentType<any> | keyof React.ReactHTML;

export type BooleonHtmlProps<
  M extends BooleonModule,
  S extends Selectors = undefined,
> = React.HTMLProps<any> &
  BooleonProps<M, S> & {
    as?: As;
  };

export type Fn = (...args: any[]) => any;

export type HandlerReturnValue<H> = H extends (...args: any[]) => infer R
  ? Props<keyof React.ReactDOM, R>
  : never;

export type ProxyReturnValue<T, H> = T & HandlerReturnValue<H>;

export type InferBooleonComponent<T> = T extends ForwardRefExoticComponent<
  infer P
>
  ? P
  : never;
