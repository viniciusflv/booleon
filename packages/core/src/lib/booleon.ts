import { BooleonModule, Props } from '../types';
import { classCompiler } from './classCompiler';
import { filterProps } from './filterProps';
import { propsReducer } from './propsReducer';
import { stringHash } from './stringHash';
import { styleAppender } from './styleAppender';
import { uniqueClass } from './uniqueClass';

export function booleon<P extends Props, M extends BooleonModule[]>(
  props: P,
  ...modules: M
) {
  const [htmlProps, booleonProps] = filterProps(props);
  const id = stringHash(JSON.stringify(booleonProps));
  const className = `bl-${id}`;

  styleAppender(className, () => {
    const reducedProps = propsReducer(booleonProps, modules.flat());
    return classCompiler(className, reducedProps);
  });

  return {
    ...htmlProps,
    className: uniqueClass(className, props.className ?? ''),
  };
}
