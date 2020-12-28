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
  function ButtonStyled(props) {
    return <button {...props} />;
  },
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

export const TextStyle = hocBooleon(function TextStyle(props) {
  return <span {...props} />;
}, font);
