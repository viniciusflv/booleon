import { useMemo } from 'react';

import { BooleonModule, ConcatTuples, BooleonHtmlProps } from '../types';
import { classCompiler } from './classCompiler';
import { concatTuples } from './concatTuples';
import { filterProps } from './filterProps';
import { propsReducer } from './propsReducer';
import { styleAppender } from './styleAppender';
import { uniqueClass } from './uniqueClass';

/**
 * @param props @type {BooleonProps} and @type {React.HTMLProps<M>}
 * @param modules @type {BooleonModule[]}
 * @returns @type {React.HTMLProps<any>}
 */
export function useBooleon<
  P extends BooleonHtmlProps<any>,
  M extends BooleonModule[]
>(props: P, ...modules: M) {
  const module = useMemo(() => concatTuples(...modules), [modules]);

  const [htmlProps, booleonProps] = useMemo(
    () => filterProps<P, ConcatTuples<M[number]>>(props),
    [props],
  );

  const reducedProps = useMemo(() => propsReducer(booleonProps, module), [
    booleonProps,
    module,
  ]);

  const [id, css] = useMemo(() => classCompiler(reducedProps), [reducedProps]);

  styleAppender(id, css);

  return {
    ...htmlProps,
    className: uniqueClass(id, props.className ?? ''),
  };
}
