import { useMemo } from 'react';

import { reactStyleAppender } from './reactStyleAppender';

import {
  uniqueClass,
  Props,
  BooleonModule,
  filterProps,
  propsReducer,
  classCompiler,
  stringHash,
} from '@booleon/core';

export function useBooleon<P extends Props, M extends BooleonModule[]>(
  props: P,
  ...modules: M
) {
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
    if (Object.values(lightProps).length) {
      const reducedLight = propsReducer(lightProps, modules.flat());
      return classCompiler(`.${className}`, reducedLight);
    }
    return '';
  }, [lightProps]);

  const darkClasses = useMemo(() => {
    if (Object.values(darkProps).length) {
      const reducedDark = propsReducer(darkProps, modules.flat());
      return classCompiler(
        `body[data-theme='dark'] .${className}`,
        reducedDark,
      );
    }
    return '';
  }, [darkProps]);

  const ssr = reactStyleAppender(className, lightClasses + darkClasses);

  return [uniqueClass(className, id), htmlProps, ssr] as const;
}
