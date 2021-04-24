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
  const BooleonComponent = ({
    as,
    ...props
  }: { as?: any } & BooleonHtmlProps<UnionToIntersection<M[number]>, P>) => {
    const [className, htmlProps, ssr] = useBooleon(props, modules, prefixes);
    const Tag = as ?? WrappedComponent;
    return (
      <>
        {ssr}
        <Tag className={className} {...htmlProps} />
      </>
    );
  };
  return BooleonComponent;
}
