import { BooleonModule, PrefixHandler, Props } from '@booleon/core';

import {
  BooleonHtmlProps,
  WrappedComponentType,
  UnionToIntersection,
} from '../types';
import { useBooleon } from './useBooleon';

export function hocBooleon<
  M extends BooleonModule[],
  P extends Props<string, PrefixHandler>
>(WrappedComponent: WrappedComponentType, modules: M, prefixes?: P) {
  const BooleonComponent = (
    props: BooleonHtmlProps<UnionToIntersection<M[number]>, P>,
  ) => {
    const [className, htmlProps, ssr] = useBooleon(props, modules, prefixes);
    return (
      <>
        {ssr}
        <WrappedComponent className={className} {...htmlProps} />
      </>
    );
  };
  return BooleonComponent;
}
