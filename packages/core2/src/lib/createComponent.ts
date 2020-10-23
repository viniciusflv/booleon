import { createElement } from 'react';

import { uniqueClass } from '../utils';
import { Entry, Tuple } from './interfaces';
import { RegexMap } from './RegexMap';
import { useStyles } from './useStyles';

export function createComponent<
  T extends Tuple,
  E extends keyof React.ReactDOM | string
>(element: E, map: RegexMap<T>) {
  function Booleon({ className = '', ...props }) {
    const [id, htmlProps] = useStyles<Entry<T>, T>(props, map);

    return createElement(element, {
      ...htmlProps,
      className: uniqueClass(id, className),
    });
  }

  Booleon.displayName = `Booleon.${element}`;

  return Booleon;
}
