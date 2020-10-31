import { container, transform, transition } from '@booleon/modules';

export const KEYFRAME_MODULE = [
  ...container,
  ...transform,
  ...transition,
] as const;
