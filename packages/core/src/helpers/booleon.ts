import { backgroundCss } from '../css';
import { handleClasses } from './handleClasses';
import { reducerCss } from './reducer';
import React from 'react';

type Booleon<T extends keyof React.ReactDOM> = {
  [key in T]?: React.ElementType;
};

export function booleon<T extends keyof React.ReactDOM>(
  elements: readonly T[] = [],
): Booleon<T> {
  return elements.reduce(
    (acc, element) => ({
      ...acc,
      [element]: function Booleon({ className = '', ...props }: any) {
        let sty = document.getElementById('booleon');
        if (!sty) {
          console.log('created');
          sty = document.createElement('style');
          sty.setAttribute('id', 'booleon');
          document.head.appendChild(sty);
        }

        const css = reducerCss(props, backgroundCss);
        const [cssClass, innerHTML] = handleClasses(sty.innerHTML, css);

        if (sty.innerHTML !== innerHTML) sty.innerHTML = innerHTML;

        return React.createElement(element, {
          ...props,
          className: cssClass + className,
        });
      },
    }),
    {},
  );
}
