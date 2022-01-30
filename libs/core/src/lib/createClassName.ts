import type { Props } from '../types';
import { stringHash } from './stringHash';

export function createClassName(booleonProps: Props = {}) {
  const hash = stringHash(
    Object.keys(booleonProps).reduce(
      (acc, k) => (booleonProps[k] ? (acc += `${k}-${booleonProps[k]}`) : acc),
      '',
    ),
  );
  return `bl-${hash}`;
}
