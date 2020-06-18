import { Text } from '../../packages/core/src';
import { text, withKnobs } from '@storybook/addon-knobs';
import React, { FC } from 'react';

export default {
  title: 'Core | Text',
  component: Text,
  decorators: [withKnobs],
};

export const Default: FC = () => {
  const props = text('Props', 'h1 f_xl fc_00f')
    .split(/\s/)
    .reduce((acc, prop) => ({ ...acc, [prop]: true }), {});
  return <Text {...props}>{text('Text', 'Hello World')}</Text>;
};
