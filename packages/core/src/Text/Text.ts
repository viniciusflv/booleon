import { booleon } from '../lib/booleon';
import {
  containerTuple,
  cursorTuple,
  fontTuple,
  marginTuple,
  transformTuple,
  transitionTuple,
} from '../css';
import { textTags } from '../lib/constants';

const tuples = [
  ...containerTuple,
  ...cursorTuple,
  ...fontTuple,
  ...marginTuple,
  ...transformTuple,
  ...transitionTuple,
];

const Text = booleon<typeof textTags, typeof tuples>(textTags, tuples);

export default Text;
