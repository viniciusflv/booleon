import type {
  BooleonProps,
  BooleonModule,
  Attachments,
  Props,
} from '@booleon/core';

export type As = React.ComponentType<any> | keyof React.ReactHTML;

export type BooleonHtmlProps<
  M extends BooleonModule | unknown,
  P extends Attachments
> = React.HTMLProps<any> &
  BooleonProps<M, P> & {
    as?: As;
  };

export type BooleonTarget = (
  component: As,
  modules: BooleonModule,
  attachments?: Attachments,
) => any;

export type BooleonHandler = (
  name: string | symbol,
) => (modules: BooleonModule, attachments?: Attachments) => any;

export type HandlerReturnValue<H extends BooleonHandler> = H extends (
  ...args: any[]
) => infer R
  ? Props<keyof React.ReactHTML, R>
  : never;

export type ProxyReturnValue<
  T extends BooleonTarget,
  H extends BooleonHandler
> = T & HandlerReturnValue<H>;
