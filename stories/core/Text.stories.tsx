import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import { Text } from '../../packages/core/src';

export default {
  title: 'Core / Text',
  component: Text,
  decorators: [withKnobs],
};

export const Default = () => {
  const props = text('Props', 'fc_f00 ff_sans fs_120')
    .split(/\s/)
    .filter(Boolean)
    .reduce((acc, prop) => ({ ...acc, [prop]: true }), {});
  return <Text.span {...props}>{text('Text', 'Hello World')}</Text.span>;
};
