import { createElement } from 'react';

import { styleAppender } from '@booleon/core';

export function reactStyleAppender(
  className: string,
  ssrSheet: any,
  cb: () => string,
) {
  try {
    styleAppender(className, cb);
    return [] as any[];
  } catch (error) {
    if (ssrSheet?.compileSheet) {
      ssrSheet.compileSheet(className, cb?.());
      return [] as any[];
    }
    return createElement('style', { 'data-booleon': className }, cb?.());
  }
}
