import {
  animation,
  spacing,
  sizing,
  flex,
  container,
  cursor,
} from '@booleon/modules';

import { booleon } from '../../../react/src';
import { Paper } from '../Paper';

export const PaperStyled = booleon(
  Paper,
  animation,
  spacing,
  sizing,
  flex,
  container,
);

export const InputStyled = booleon.input(container, sizing, animation);

export const WrapperStyle = booleon.div(container, cursor, animation);
