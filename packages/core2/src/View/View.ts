import { VIEW_TAGS } from '../constants/tags';
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
