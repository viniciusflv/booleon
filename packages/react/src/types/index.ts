import { Props, BooleonProps, BooleonModule } from '@booleon/core';

import { REACT_PROPS } from '../constants';

/**
 * @type {BooleonProps} and @type {React.HTMLProps<any>}
 */
export type BooleonHtmlProps<M extends BooleonModule> = Props<
  typeof REACT_PROPS[number],
  any
> &
  BooleonProps<M>;
