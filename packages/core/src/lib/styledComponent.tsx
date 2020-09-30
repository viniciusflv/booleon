import React, { ComponentType, useMemo } from 'react';

import { Entry, Tuple } from './interfaces';
import { useReducer } from './reducer';
import { RegexMap } from './RegexMap';
import { uniqueClass, handleStyle } from './utils';

export function styledComponent<T extends Tuple>(
  ReactComponent: ComponentType<any>,
  map: RegexMap<T>,
) {
  function Booleon({ className = '', ...props }) {
    const [id, classes, htmlProps] = useMemo(
      () => useReducer<Entry<T>, T>(props, map),
      [props, map],
    );

    handleStyle(id, classes);

    return (
      <ReactComponent {...htmlProps} className={uniqueClass(id, className)} />
    );
  }

  Booleon.displayName = 'Booleon.styled';

  return Booleon;
}
