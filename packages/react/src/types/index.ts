import { Props, BooleonProps, BooleonModule } from '@booleon/core';

import { REACT_PROPS } from '../constants';
import { DOM_ELEMENTS } from '../constants/domElements';

/**
 * @type {BooleonProps} and @type {React.HTMLProps<any>}
 */
export type BooleonHtmlProps<M extends BooleonModule> = Props<
  typeof REACT_PROPS[number],
  any
> &
  BooleonProps<M>;

export type WrappedComponentType =
  | React.ComponentType<any>
  | typeof DOM_ELEMENTS[number];
