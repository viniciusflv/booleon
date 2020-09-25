import { RegexMap } from './RegexMap';
import { Tuple } from './interfaces';

export function useReducer<P, T extends Tuple>(
  props: P | React.HTMLProps<{}>,
  map: RegexMap<T>,
): [string, string, React.HTMLProps<{}>] {
  const [htmlProps, booleonProps] = map.filter<P>(props);
  const [id, classes] = map.compile(booleonProps);
  return [id, classes, htmlProps];
}
