import { KeyframeProvider, KeyframeState } from '../provider';
import { KEYFRAME_MODULE } from './module';

export const Keyframe = {
  provider: KeyframeProvider,
  state: KeyframeState(KEYFRAME_MODULE),
};
