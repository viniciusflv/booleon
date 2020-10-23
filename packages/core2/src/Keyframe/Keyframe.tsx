import { containerTuple, transformTuple, transitionTuple } from '../css';
import { booleonKeyframe } from '../lib/booleonKeyframe';

const tuples = [...containerTuple, ...transformTuple, ...transitionTuple];

const Keyframe = booleonKeyframe<typeof tuples>(tuples);

export default Keyframe;
