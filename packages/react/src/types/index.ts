import {
  Props,
  BooleonProps,
  BooleonModule,
  PrefixHandler,
} from '@booleon/core';

import { REACT_PROPS } from '../constants';
import { DOM_ELEMENTS } from '../constants/domElements';

/**
 * @type {BooleonProps} and @type {React.HTMLProps<any>}
 */
export type BooleonHtmlProps<
  M extends BooleonModule | unknown,
  P extends Props<string, PrefixHandler>
> = Props<typeof REACT_PROPS[number], any> & BooleonProps<M, P>;

export type WrappedComponentType =
  | React.ComponentType<any>
  | typeof DOM_ELEMENTS[number];

export type UnionToIntersection<U extends BooleonModule> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;