import { createElement } from 'react';

import { styleAppender } from '@booleon/core';

export function reactStyleAppender(className: string, cb: () => string) {
  try {
    styleAppender(className, cb);
    return [] as any[];
  } catch (error) {
    return createElement('style', { 'data-booleon': className }, cb?.());
  }
}
