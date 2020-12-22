import { useMemo } from 'react';

import { BooleonModule, Props } from '../types';
import { classCompiler } from './classCompiler';
import { filterProps } from './filterProps';
import { propsReducer } from './propsReducer';
import { styleAppender } from './styleAppender';
import { uniqueClass } from './uniqueClass';

export function useBooleon<P extends Props, M extends BooleonModule[]>(
  props: P,
  ...modules: M
) {
  const [htmlProps, booleonProps] = useMemo(() => filterProps(props), [props]);

  const className = useMemo(() => {
    const reducedProps = propsReducer(booleonProps, modules.flat());
    const [id, css] = classCompiler(reducedProps);

    styleAppender(id, css);

    return id;
  }, [booleonProps]);

  return {
    ...htmlProps,
    className: uniqueClass(className, props.className ?? ''),
  };
}
