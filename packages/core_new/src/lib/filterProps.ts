import { REACT_PROPS } from '../constants';
import { Props, BooleonProps } from '../types';

export function filterProps<P extends Props, M extends readonly any[]>(
  props: P,
): [Pick<P, typeof REACT_PROPS[number]>, BooleonProps<M>] {
  return Object.keys(props).reduce(
    ([html, belong], key) => {
      REACT_PROPS.includes(key as typeof REACT_PROPS[number])
        ? (html = { ...html, [key]: props[key] })
        : (belong = { ...belong, [key]: props[key] });
      return [html, belong];
    },
    [{}, {}] as [Pick<P, typeof REACT_PROPS[number]>, BooleonProps<M>],
  );
}
