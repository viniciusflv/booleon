import React from 'react';

import { hocBooleon } from '../../../react/src/hocBooleon';

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

export const ButtonStyled = hocBooleon(
  (props) => <button {...props} />,
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

export const TextStyle = hocBooleon((props) => <span {...props} />, font);
