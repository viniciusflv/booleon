import { BooleonProps, Props } from '@booleon/core';

import { REACT_PROPS } from '../constants';

export function filterProps(props: Props): [BooleonProps<any>, Props] {
  return Object.keys(props).reduce(
    ([booleonProps, forwardProps], key) => {
      const value = props[key];
      if (value) {
        if (REACT_PROPS.includes(key as any)) {
          forwardProps = { ...forwardProps, [key]: value };
        } else {
          booleonProps = { ...booleonProps, [key]: value };
        }
      }
      return [booleonProps, forwardProps];
    },
    [{}, {}],
  );
}
