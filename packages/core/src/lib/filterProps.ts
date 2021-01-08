import { REACT_PROPS } from '../constants';
import { Props, BooleonProps } from '../types';

export function filterProps<P extends Props, M extends readonly any[]>(
  props: P,
): [
  Partial<Pick<P, typeof REACT_PROPS[number]>>,
  BooleonProps<M>,
  BooleonProps<M>,
] {
  return Object.keys(props).reduce(
    ([html, light, dark], key) => {
      if (REACT_PROPS.includes(key as typeof REACT_PROPS[number])) {
        html = { ...html, [key]: props[key] };
      } else if (props[key]) {
        if (key.startsWith('dark__')) {
          dark = { ...dark, [key.replace('dark__', '')]: props[key] };
        }
        light = { ...light, [key]: props[key] };
      }
      return [html, light, dark];
    },
    [{}, {}, {}] as [
      Partial<Pick<P, typeof REACT_PROPS[number]>>,
      BooleonProps<M>,
      BooleonProps<M>,
    ],
  );
}
