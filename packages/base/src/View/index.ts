import { booleon, BooleonHtmlProps } from '@booleon/core';

import { VIEW_MODULE } from './module';
import { VIEW_TAGS } from './tags';

export const View = booleon(VIEW_TAGS, VIEW_MODULE);
export type ViewProps = BooleonHtmlProps<typeof VIEW_MODULE>;
