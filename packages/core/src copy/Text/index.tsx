import TextProps from './interfaces';
import { booleon } from '../lib/booleon';
import {
  containerCss,
  cursorCss,
  fontCss,
  marginCss,
  transformCss,
  transitionCss,
} from '../css';
import { textTags } from '../lib/constants';

export const Text = booleon<typeof textTags, TextProps>(
  textTags,
  fontCss,
  containerCss,
  cursorCss,
  marginCss,
  transformCss,
  transitionCss,
);
