import type {
  Props,
  Attachments,
  BooleonProps,
  BooleonModule,
} from '@booleon/core';

export type As = React.ComponentType<any> | keyof React.ReactHTML;

export type BooleonHtmlProps<
  M extends BooleonModule,
  A extends Attachments = undefined,
> = React.HTMLProps<any> &
  BooleonProps<M, A> & {
    as?: As;
  };

export type Fn = (...args: any[]) => any;

export type HandlerReturnValue<H> = H extends (...args: any[]) => infer R
  ? Props<keyof React.ReactHTML, R>
  : never;

export type ProxyReturnValue<T, H> = T & HandlerReturnValue<H>;
