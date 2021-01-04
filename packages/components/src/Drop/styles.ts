import { styledBooleon } from '../../../react/src';

import {
  animation,
  spacing,
  sizing,
  flex,
  container,
  cursor,
} from '../../../modules/src';
import { Paper } from '../Paper';

export const PaperStyled = styledBooleon(
  Paper,
  animation,
  spacing,
  sizing,
  flex,
  container,
);

export const InputStyled = styledBooleon.input(container, sizing, animation);

export const WrapperStyle = styledBooleon.div(container, cursor, animation);
