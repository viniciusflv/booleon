import React, { memo, useMemo } from 'react';

import { Entry, Tuple } from './interfaces';
import { useReducer } from './reducer';
import { RegexMap } from './RegexMap';
import { uniqueClass } from './utils';

export function styledComponent<T extends Tuple>(
  ReactComponent: any,
  map: RegexMap<T>,
) {
  console.log(<ReactComponent />);
  function Booleon({ className = '', ...props }) {
    const [id, classes, htmlProps] = useMemo(
      () => useReducer<Entry<T>, T>(props, map),
      [props, map],
    );

    let style = document.getElementById(id);
    if (!style) {
      style = document.createElement('style');
      style.setAttribute('id', id);
      document.head.appendChild(style);
    }
    if (classes !== style.innerHTML) style.innerHTML = classes;

    return (
      <ReactComponent {...htmlProps} className={uniqueClass(id, className)} />
    );
  }

  Booleon.displayName = 'Booleon.styled';

  return memo(Booleon);
}
