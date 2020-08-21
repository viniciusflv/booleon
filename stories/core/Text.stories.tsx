import { Text } from '../../packages/core/src';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import React from 'react';

export default {
  title: 'Core / Text',
  component: Text,
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  const props = text('Props', '')
    .split(/\s/)
    .reduce((acc, prop) => ({ ...acc, [prop]: true }), {});
  return <Text.span {...props}>{text('Text', 'Hello World')}</Text.span>;
};
