import {
  backgroundCss,
  borderCss,
  containerCss,
  cursorCss,
  filterCss,
  flexCss,
  gradientCss,
  gridCss,
  marginCss,
  outlineCss,
  paddingCss,
  shadowCss,
  sizingCss,
  transformCss,
  transitionCss,
} from '../css';
import { booleon } from '../lib/booleon';

const tags = ['div', 'section'] as const;

export const View = booleon(
  tags,
  backgroundCss,
  borderCss,
  containerCss,
  cursorCss,
  filterCss,
  flexCss,
  gradientCss,
  gridCss,
  marginCss,
  outlineCss,
  paddingCss,
  shadowCss,
  sizingCss,
  transformCss,
  transitionCss,
);
