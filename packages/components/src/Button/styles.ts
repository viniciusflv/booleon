import { styledBooleon } from '../../../react/src';

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

export const ButtonStyled = styledBooleon.button(
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

export const TextStyle = styledBooleon.span(font);
