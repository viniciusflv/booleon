import React from 'react';

import { styleAppender } from '@booleon/core';

export function reactStyleAppender(className: string, css: string) {
  try {
    styleAppender(className, css);
    return [] as any[];
  } catch (error) {
    return React.createElement('style', { 'data-booleon': className }, css);
  }
}
