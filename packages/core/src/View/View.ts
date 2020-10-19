import {
  animationTuple,
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
import { VIEW_TAGS } from '../lib/constants';

const tuples = [
  ...animationTuple,
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

const View = booleon<typeof VIEW_TAGS, typeof tuples>(VIEW_TAGS, tuples);

export default View;
