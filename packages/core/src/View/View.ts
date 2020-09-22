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
  ...backgroundTuple,
  ...borderTuple,
  ...containerTuple,
  ...cursorTuple,
  ...flexTuple,
  ...fontTuple,
  ...gridTuple,
  ...outlineTuple,
  ...sizingTuple,
  ...transformTuple,
  ...transitionTuple,
];

const indexers = [
  ...backgroundIndexer,
  ...borderIndexer,
  ...containerIndexer,
  ...filterIndexer,
  ...fontIndexer,
  ...gradientIndexer,
  ...gridIndexer,
  ...marginIndexer,
  ...outlineIndexer,
  ...paddingIndexer,
  ...sizingIndexer,
  ...transformIndexer,
  ...transitionIndexer,
  ...shadowIndexer,
];

const View = booleon<typeof viewTags, typeof tuples>(
  viewTags,
  tuples,
  indexers,
);

export default View;
