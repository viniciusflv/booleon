import { HTMLProps } from 'react';

import {
  Props,
  BooleonProps,
  BooleonModule,
  PrefixHandler,
} from '@booleon/core';

import { DOM_ELEMENTS } from '../constants/domElements';

/**
 * @type {BooleonProps} and @type {React.HTMLProps<any>}
 */
export type BooleonHtmlProps<
  M extends BooleonModule | unknown,
  P extends Props<string, PrefixHandler>
> = { as?: any } & HTMLProps<any> & BooleonProps<M, P>;

export type InferBooleonProps<T> = T extends (props: infer P) => any
  ? P
  : never;

export type WrappedComponentType =
  | React.ComponentType<any>
  | typeof DOM_ELEMENTS[number];

export type UnionToIntersection<U extends BooleonModule> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
