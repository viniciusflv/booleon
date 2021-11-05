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

const m = { flex: () => '' };
const att = { atta: () => '' };

function bool<
  Y,
  M extends BooleonModule,
  C extends As,
  A extends Attachments = undefined,
>(component: C, module: M, attachments?: A) {
  return {} as BooleonHtmlProps<M, A>;
}

const { kf__flex } = bool('div', m);
const { atta__flex } = bool('div', m, att);

export type BooleonTarget = (
  component: As,
  modules: BooleonModule,
  attachments?: Attachments,
) => unknown;

export type BooleonHandler = (
  name: string | symbol,
) => (modules: BooleonModule, attachments?: Attachments) => unknown;

export type HandlerReturnValue<H extends BooleonHandler> = H extends (
  ...args: any[]
) => infer R
  ? Props<keyof React.ReactHTML, R>
  : never;

export type ProxyReturnValue<
  T extends BooleonTarget,
  H extends BooleonHandler,
> = T & HandlerReturnValue<H>;
