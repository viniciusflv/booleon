import { useMemo } from 'react';

import {
  uniqueClass,
  Props,
  BooleonModule,
  filterProps,
  propsReducer,
  classCompiler,
  stringHash,
} from '../../../core/src';
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

    const reducedBooleon = propsReducer(
      booleonProps,
      Object.assign({}, ...modules),
    );
    acc += classCompiler(`.${id}`, reducedBooleon);

    if (booleonThemes) {
      Object.keys(booleonThemes).forEach((key) => {
        const reducedTheme = propsReducer(
          booleonThemes[key],
          Object.assign({}, ...modules),
        );
        acc += classCompiler(`body[data-theme='${key}'] .${id}`, reducedTheme);
      });
    }

    return acc;
  });

  return [uniqueClass(id, className), htmlProps as Props, ssr] as const;
}
