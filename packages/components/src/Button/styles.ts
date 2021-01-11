import { booleon } from '../../../react/src';

import {
  background,
  border,
  container,
  cursor,
  shadow,
  sizing,
  spacing,
  transition,
  outline,
  font,
} from '../../../modules/src';

export const ButtonStyled = booleon.button(
  background,
  border,
  shadow,
  spacing,
  sizing,
  cursor,
  transition,
  container,
  outline,
);

export const TextStyle = booleon.span(font);
