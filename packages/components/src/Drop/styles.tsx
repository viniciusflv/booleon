import React from 'react';

import { hocBooleon } from '../../../react/src/hocBooleon';

import {
  animation,
  spacing,
  sizing,
  flex,
  container,
  cursor,
} from '../../../modules/src';
import { Paper } from '../Paper';

export const PaperStyled = hocBooleon(
  Paper,
  animation,
  spacing,
  sizing,
  flex,
  container,
);

export const InputStyled = hocBooleon(
  (props) => <input {...props} />,
  container,
  sizing,
  animation,
);

export const WrapperStyle = hocBooleon(
  (props) => <div {...props} />,
  container,
  cursor,
  animation,
);
