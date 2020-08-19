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
