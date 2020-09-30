import { createElement, useMemo } from 'react';

import { Entry, Tuple } from './interfaces';
import { useReducer } from './reducer';
import { RegexMap } from './RegexMap';
import { uniqueClass, handleStyle } from './utils';

export function createComponent<
  T extends Tuple,
  E extends keyof React.ReactDOM
>(element: E, map: RegexMap<T>) {
  function Booleon({ className = '', ...props }) {
    const [id, classes, htmlProps] = useMemo(
      () => useReducer<Entry<T>, T>(props, map),
      [props, map],
    );

    handleStyle(id, classes);

    return createElement(element, {
      ...htmlProps,
      className: uniqueClass(id, className),
    });
  }

  Booleon.displayName = `Booleon.${element}`;

  return Booleon;
}
