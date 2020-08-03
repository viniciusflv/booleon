import {
  cursorCss,
  marginCss,
  transformCss,
  transitionCss,
  fontCss,
  containerCss,
} from '../css';
import { booleon } from '../lib/booleon';
import { textTags } from '../lib/constants';
import TextProps from './interfaces';

export const Text = booleon<typeof textTags, TextProps>(
  textTags,
  fontCss,
  containerCss,
  cursorCss,
  marginCss,
  transformCss,
  transitionCss,
);
