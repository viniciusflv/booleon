import { useMemo } from 'react';

import { REACT_PROPS } from '../constants';
import { Props } from '../types';

export function usePropsFilter<P>(props: Props): [Props, P] {
  return useMemo(
    () =>
      Object.keys(props).reduce(
        ([html, belong], key) => {
          REACT_PROPS.includes(key)
            ? (html = { ...html, [key]: props[key] })
            : (belong = { ...belong, [key]: props[key] });
          return [html, belong];
        },
        [{}, {} as P],
      ),
    [props],
  );
}
