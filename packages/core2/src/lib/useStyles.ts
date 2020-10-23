import { useMemo } from 'react';

import { fastHash } from '../utils';
import { Tuple } from './interfaces';
import { RegexMap } from './RegexMap';

export function useStyles<P, T extends Tuple>(
  props: P | React.HTMLProps<{}>,
  map: RegexMap<T>,
): [string, React.HTMLProps<{}>] {
  const [htmlProps, booleonProps] = useMemo(() => map.filter<P>(props), [
    props,
  ]);
  const id = `bl-${fastHash(JSON.stringify(booleonProps))}`;
  let style = document.getElementById(id);

  if (style) return [id, htmlProps];
  else {
    style = document.createElement('style');
    style.setAttribute('id', id);
    document.head.appendChild(style);
    const classes = map.compile(id, booleonProps);
    if (classes !== style.innerHTML) style.innerHTML = classes;
    return [id, htmlProps];
  }
}
