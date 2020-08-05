import React from 'react';
import { classReducer,cleanProps } from './reducers';
import { Indexer, Booleon } from './interfaces';

export function booleon<E extends readonly (keyof React.ReactDOM)[], T>(
  elements: E,
  ...indexers: Indexer<T>[]
): Booleon<E[number], T> {
  return elements.reduce(
    (acc: Booleon<E[number]>, element: E[number]) => ({
      ...acc,
      [element]: ({ className = '', ...props }) => {
        const cleanedProps = cleanProps<T>(props as T, ...indexers)
        const [id, classes] = classReducer<T>(props as T, ...indexers);

        let style = document.getElementById(id);
        if (!style) {
          style = document.createElement('style');
          style.setAttribute('id', id);
          document.head.appendChild(style);
        }
        if (classes !== style.innerHTML) style.innerHTML = classes;

        return React.createElement(element, {
          ...cleanedProps,
          className: id + className,
        });
      },
    }),
    {} as Booleon<E[number]>,
  );
}
