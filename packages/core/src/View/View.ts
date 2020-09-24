import {
  backgroundIndexer,
  backgroundTuple,
  borderIndexer,
  borderTuple,
  containerIndexer,
  containerTuple,
  cursorTuple,
  filterIndexer,
  flexTuple,
  fontIndexer,
  fontTuple,
  gradientIndexer,
  gridIndexer,
  gridTuple,
  marginIndexer,
  outlineIndexer,
  outlineTuple,
  paddingIndexer,
  shadowIndexer,
  sizingIndexer,
  sizingTuple,
  transformIndexer,
  transformTuple,
  transitionIndexer,
  transitionTuple,
} from '../css';
import { booleon } from '../lib/booleon';
import { viewTags } from '../lib/constants';

const tuples = [
  ...sizingTuple,
  ...containerTuple,
  ...fontTuple,
  ...flexTuple,
  ...gridTuple,
  ...backgroundTuple,
  ...borderTuple,
  ...cursorTuple,
  ...outlineTuple,
  ...transformTuple,
  ...transitionTuple,
];

const indexers = [
  ...backgroundIndexer,
  ...containerIndexer,
  ...sizingIndexer,
  ...marginIndexer,
  ...paddingIndexer,
  ...fontIndexer,
  ...gridIndexer,
  ...borderIndexer,
  ...shadowIndexer,
  ...gradientIndexer,
  ...outlineIndexer,
  ...filterIndexer,
  ...transformIndexer,
  ...transitionIndexer,
];

const View = booleon<typeof viewTags, typeof tuples>(
  viewTags,
  tuples,
  indexers,
);

export default View;
