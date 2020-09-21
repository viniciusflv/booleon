import ViewProps from './interfaces';
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
} from '../css';
import { booleon } from '../lib/booleon';
import { viewTags } from '../lib/constants';

export const View = booleon<typeof viewTags, ViewProps>(
  viewTags,
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
);
