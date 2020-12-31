import { useMemo } from 'react';

import {
  uniqueClass,
  Props,
  BooleonModule,
  filterProps,
  propsReducer,
  classCompiler,
  styleAppender,
  stringHash,
  BooleonProps,
} from '../../core/src';

export function useBooleon<P extends Props, M extends BooleonModule[]>(
  props: P,
  ...modules: M
): [string, Props, BooleonProps<M[number]>] {
  const [{ className: id = '', ...htmlProps }, booleonProps] = useMemo(
    () => filterProps(props),
    [props],
  );

  const className = useMemo(() => {
    const id = stringHash(JSON.stringify(booleonProps));
    const className = `bl-${id}`;

    styleAppender(className, () => {
      const reducedProps = propsReducer(booleonProps, modules.flat());
      return classCompiler(className, reducedProps);
    });

    return className;
  }, [booleonProps]);

  return [uniqueClass(className, id), htmlProps, booleonProps];
}
