import { BooleonModule } from '@booleon/core';

import { BooleonHtmlProps } from '../types';
import { useBooleon } from './useBooleon';

export function hocBooleon<M extends BooleonModule[]>(
  WrappedComponent: React.ComponentType<any> | keyof React.ReactDOM,
  modules: M,
  prefixes?: any,
) {
  const BooleonComponent: React.FC<BooleonHtmlProps<M[number]>> = (
    props: BooleonHtmlProps<M[number]>,
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
