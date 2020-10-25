import { container, transform, transition } from '../../../modules/src';

export const KEYFRAME_MODULE = [
  ...container,
  ...transform,
  ...transition,
] as const;
