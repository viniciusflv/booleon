import React, { useMemo } from 'react';
import { Booleon, Indexer } from './interfaces';
import { useReducer } from './reducer';

export function booleon<E extends readonly (keyof React.ReactDOM)[], T>(
  elements: E,
  ...indexers: Indexer<T>[]
): Booleon<E[number], T> {
  return elements.reduce(
    (acc: Booleon<E[number]>, element: E[number]) => ({
      ...acc,
      [element]: (() => {
        function Booleon({ className = '', ...props }) {
          const indexer = useMemo(
            () => indexers.reduce((acc, indexer) => [...acc, ...indexer], []),
            [indexers],
          );

          const [id, classes, htmlProps] = useMemo(
            () => useReducer<T>(props as T, indexer),
            [props, indexer],
          );

          let style = document.getElementById(id);
          if (!style) {
            style = document.createElement('style');
            style.setAttribute('id', id);
            document.head.appendChild(style);
          }
          if (classes !== style.innerHTML) style.innerHTML = classes;

          return React.createElement(element, {
            ...htmlProps,
            className: `${id} ${className}`,
          });
        }

        Booleon.displayName = `Booleon.${element}`;

        return Booleon;
      })(),
    }),
    {} as Booleon<E[number]>,
  );
}
