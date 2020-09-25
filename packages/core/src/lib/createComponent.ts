import { createElement, memo, useMemo } from 'react';

import { Entry, Tuple } from './interfaces';
import { useReducer } from './reducer';
import { RegexMap } from './RegexMap';

export function createComponent<
  T extends Tuple,
  E extends keyof React.ReactDOM
>(element: E, map: RegexMap<T>) {
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

    return createElement(element, {
      ...htmlProps,
      className: `${id} ${className}`,
    });
  }

  Booleon.element = element;
  Booleon.displayName = `Booleon.${element}`;

  return memo(Booleon);
}
