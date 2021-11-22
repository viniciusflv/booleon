import type {
  Props,
  Selectors,
  BooleonProps,
  BooleonModule,
} from '@booleon/core';

export type Tag = React.ComponentType<any> | keyof React.ReactHTML;

export type BooleonHtmlProps<
  M extends BooleonModule,
  S extends Selectors = undefined,
> = React.HTMLProps<any> &
  BooleonProps<M, S> & {
    tag?: Tag;
  };

export type Fn = (...args: any[]) => any;

export type HandlerReturnValue<H> = H extends (...args: any[]) => infer R
  ? Props<keyof React.ReactDOM, R>
  : never;

export type ProxyReturnValue<T, H> = T & HandlerReturnValue<H>;
