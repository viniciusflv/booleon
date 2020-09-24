import { createElement, memo, useMemo } from 'react';

export function createComponent<T, E extends readonly (keyof React.ReactDOM)[]>(
  element: E[number],
  indexer: Indexer<T, RegExp>,
) {
  function Booleon({ className = '', ...props }) {
    const [id, classes, htmlProps] = useMemo(
      () => useReducer<T>({ ...props } as T, indexer),
      [props, indexer],
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
