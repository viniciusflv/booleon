import { useMemo } from 'react';

import {
  uniqueClass,
  Props,
  BooleonModule,
  filterProps,
  propsReducer,
  classCompiler,
  stringHash,
} from '@booleon/core';

import { reactStyleAppender } from './reactStyleAppender';

export function useBooleon<P extends Props, M extends BooleonModule[]>(
  props: P,
  ...modules: M
) {
  const {
    htmlProps: { className = '', ...htmlProps },
    booleonProps,
    ...booleonThemes
  } = useMemo(() => filterProps(props), [props]);
  const hash = stringHash(JSON.stringify({ booleonProps, booleonThemes }));
  const id = `bl-${hash}`;

  const ssr = reactStyleAppender(id, () => {
    let acc = '';

    const reducedBooleon = propsReducer(booleonProps, modules.flat());
    acc += classCompiler(`.${id}`, reducedBooleon);

    if (booleonThemes) {
      Object.keys(booleonThemes).forEach((key) => {
        const reducedTheme = propsReducer(booleonThemes[key], modules.flat());
        acc += classCompiler(`body[data-theme='${key}'] .${id}`, reducedTheme);
      });
    }

    return acc;
  });

  return [uniqueClass(id, className), htmlProps, ssr];
}
