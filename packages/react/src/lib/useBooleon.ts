import { useMemo } from 'react';

import {
  uniqueClass,
  Props,
  BooleonModule,
  filterProps,
  propsReducer,
  classCompiler,
  stringHash,
  categorizeProps,
} from '../../../core/src';
import { reactStyleAppender } from './reactStyleAppender';

export function useBooleon<P extends Props, M extends BooleonModule[]>(
  { className = '', ...props }: P,
  ...modules: M
) {
  const [booleonProps, forwardProps] = useMemo(() => filterProps(props), [
    props,
  ]);
  const hash = stringHash(JSON.stringify(booleonProps));
  const id = `bl-${hash}`;

  const ssr = reactStyleAppender(id, () => {
    let acc = '';
    const booleonModules = Object.assign({}, ...modules);
    const [lightProps, darkProps] = categorizeProps(booleonProps);

    const reducedBooleon = propsReducer(lightProps, booleonModules);
    acc += classCompiler(`.${id}`, reducedBooleon);

    if (Object.values(darkProps).length) {
      const reducedTheme = propsReducer(darkProps, booleonModules);
      acc += classCompiler(`body[data-theme='dark'] .${id}`, reducedTheme);
    }

    return acc;
  });

  return [uniqueClass(id, className), forwardProps as Props, ssr] as const;
}
