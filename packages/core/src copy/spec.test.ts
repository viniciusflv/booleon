import {
  backgroundCss,
  borderCss,
  containerCss,
  cursorCss,
  filterCss,
  flexCss,
  fontCss,
  gradientCss,
  gridCss,
  marginCss,
  outlineCss,
  paddingCss,
  shadowCss,
  sizingCss,
  transformCss,
  transitionCss,
} from './css';

const tuples = [
  ...backgroundCss,
  ...borderCss,
  ...containerCss,
  ...cursorCss,
  ...filterCss,
  ...flexCss,
  ...fontCss,
  ...gradientCss,
  ...gridCss,
  ...marginCss,
  ...outlineCss,
  ...paddingCss,
  ...shadowCss,
  ...sizingCss,
  ...transformCss,
  ...transitionCss,
];

test('', () => {
  const res = tuples.reduce((acc, [i, cb]) => {
    acc += `${cb('')}`;
    return acc;
  }, '');
  console.log(res);
});
