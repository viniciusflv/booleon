import React, { ComponentType } from 'react';

import { uniqueClass } from '../utils';
import { BooleonHtmlProps, Entry, Tuple } from './interfaces';
import { RegexMap } from './RegexMap';
import { useStyles } from './useStyles';

export function styledComponent<T extends Tuple>(
  ReactComponent: ComponentType<any>,
  map: RegexMap<T>,
) {
  function Booleon({ className = '', ...props }) {
    const [id, htmlProps] = useStyles<Entry<T>, T>(props, map);

    return (
      <ReactComponent {...htmlProps} className={uniqueClass(id, className)} />
    );
  }

  Booleon.displayName = 'Booleon.styled';

  return Booleon as BooleonHtmlProps<Entry<T>>;
}
