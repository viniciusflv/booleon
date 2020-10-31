import { booleon, BooleonHtmlProps } from '@booleon/core';

import { TEXT_MODULE } from './module';
import { TEXT_TAGS } from './tags';

export const Text = booleon(TEXT_TAGS, TEXT_MODULE);
export type TextProps = BooleonHtmlProps<typeof TEXT_MODULE>;
