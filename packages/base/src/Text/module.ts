import {
  container,
  cursor,
  font,
  margin,
  transform,
  transition,
} from '../../../modules/src';

export const TEXT_MODULE = [
  ...container,
  ...cursor,
  ...font,
  ...margin,
  ...transform,
  ...transition,
] as const;
