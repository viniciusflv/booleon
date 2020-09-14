import React, { memo, useMemo } from 'react';
import { Booleon, Indexer } from './interfaces';
import { useReducer } from './reducer';

function createComponent<T, E extends readonly (keyof React.ReactDOM)[]>(
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

    return React.createElement(element, {
      ...htmlProps,
      className: `${id} ${className}`,
    });
  }

  Booleon.element = element;
  Booleon.displayName = `Booleon.${element}`;

  return memo(Booleon);
}

export function booleon<E extends readonly (keyof React.ReactDOM)[], T>(
  elements: E,
  ...indexers: Indexer<T>[]
) {
  const indexer: Indexer<T, RegExp> = indexers
    .reduce((acc, indexer) => [...acc, ...indexer], [])
    .map(([index, cb]) => [
      index instanceof Function ? new RegExp(index()) : index,
      cb,
    ]);
  return elements.reduce(
    (acc: Booleon<E[number]>, element: E[number]) => ({
      ...acc,
      [element]: createComponent<T, E>(element, indexer),
    }),
    {} as Booleon<E[number], T>,
  );
}
