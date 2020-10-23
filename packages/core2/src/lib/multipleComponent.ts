import { Children, cloneElement, ReactNodeArray, useCallback } from 'react';

import { uniqueClass } from '../utils';
import { Entry, Tuple, BooleonProps } from './interfaces';
import { RegexMap } from './RegexMap';
import { useStyles } from './useStyles';

export function multipleComponent<T extends Tuple>(map: RegexMap<T>) {
  function Booleon({ children, ...props }: { children: ReactNodeArray }) {
    const [id] = useStyles<Entry<T>, T>(props, map);

    const applyClassName = useCallback(
      (el) =>
        cloneElement(el, {
          className: uniqueClass(id, el.props.className),
        }),
      [id],
    );

    return Children.map(children, (child) => applyClassName(child));
  }

  Booleon.displayName = 'Booleon.multiple';

  return Booleon as BooleonProps<{ children: ReactNodeArray }>;
}
