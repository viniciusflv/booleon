import {
  backgroundTuple,
  borderTuple,
  containerTuple,
  cursorTuple,
  filterTuple,
  flexTuple,
  fontTuple,
  gradientTuple,
  gridTuple,
  marginTuple,
  outlineTuple,
  paddingTuple,
  shadowTuple,
  sizingTuple,
  transformTuple,
  transitionTuple,
} from '../css';
import { booleon } from '../lib/booleon';
import { viewTags } from '../lib/constants';

const tuples = [
  ...backgroundTuple,
  ...borderTuple,
  ...containerTuple,
  ...cursorTuple,
  ...filterTuple,
  ...flexTuple,
  ...fontTuple,
  ...gradientTuple,
  ...gridTuple,
  ...marginTuple,
  ...outlineTuple,
  ...paddingTuple,
  ...shadowTuple,
  ...sizingTuple,
  ...transformTuple,
  ...transitionTuple,
] as const;

const View = booleon<typeof viewTags, typeof tuples>(viewTags, tuples);

export default View;
