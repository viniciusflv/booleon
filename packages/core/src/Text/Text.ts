import {
  containerTuple,
  cursorTuple,
  fontTuple,
  marginTuple,
  transformTuple,
  transitionTuple,
} from '../css';
import { booleon } from '../lib/booleon';
import { TEXT_TAGS } from '../lib/constants';

const tuples = [
  ...containerTuple,
  ...cursorTuple,
  ...fontTuple,
  ...marginTuple,
  ...transformTuple,
  ...transitionTuple,
];

const Text = booleon<typeof TEXT_TAGS, typeof tuples>(TEXT_TAGS, tuples);

export default Text;
