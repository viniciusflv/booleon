import { useBooleon, useUniqueClass, useStyleAppender } from '../../hooks';
import { BooleonModule } from '../../types';
import { BooleonFC } from '../../types';

export function createBooleon<E extends string, M extends BooleonModule>(
  element: E,
  module: M,
  cb: (htmlProps: React.HTMLProps<any>, className: string) => React.ReactNode,
) {
  function Booleon({ className = '', ...props }) {
    const [id, classes, htmlProps] = useBooleon(props, module);

    useStyleAppender(id, classes);

    return cb(htmlProps, useUniqueClass(id, className));
  }

  Booleon.displayName = `Booleon.${element}`;

  return Booleon as BooleonFC<M>;
}
