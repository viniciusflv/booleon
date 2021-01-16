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
} from '@booleon/core';

export function useBooleon<P extends Props, M extends BooleonModule[]>(
  props: P,
  ...modules: M
): [string, Props] {
  const [
    { className: id = '', ...htmlProps },
    lightProps,
    darkProps,
  ] = useMemo(() => filterProps(props), [props]);

  const className = useMemo(() => {
    const hash = stringHash(JSON.stringify({ ...lightProps, ...darkProps }));
    return `bl-${hash}`;
  }, [lightProps, darkProps]);

  const lightClasses = useMemo(() => {
    const reducedLight = propsReducer(lightProps, modules.flat());
    return classCompiler(`.${className}`, reducedLight);
  }, [lightProps]);

  const darkClasses = useMemo(() => {
    const reducedDark = propsReducer(darkProps, modules.flat());
    return classCompiler(`body[data-theme='dark'] .${className}`, reducedDark);
  }, [darkProps]);

  styleAppender(className, lightClasses + darkClasses);

  return [uniqueClass(className, id), htmlProps];
}
