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
import { viewTags } from '../lib/constants';
import ViewProps from './interfaces';

export { ViewProps };
export const View = booleon<typeof viewTags, ViewProps>(
  viewTags,
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
