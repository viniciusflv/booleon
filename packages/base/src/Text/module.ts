import {
  container,
  cursor,
  font,
  margin,
  transform,
  transition,
} from '@booleon/modules';

export const TEXT_MODULE = [
  ...container,
  ...cursor,
  ...font,
  ...margin,
  ...transform,
  ...transition,
] as const;
