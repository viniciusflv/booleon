import React from 'react';

import { hocBooleon } from '../../../react/src/hocBooleon';

import { background, border, shadow } from '../../../modules/src';

export const PaperStyled = hocBooleon(
  function PaperStyled(props) {
    return <section {...props} />;
  },
  background,
  border,
  shadow,
);
