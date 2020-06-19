import { Card } from '../../packages/components/src';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

export default {
  title: 'Components | Card',
  component: Card,
  decorators: [withKnobs],
};

export const Default = () => {
  const props = text('Props', 'sd_12')
    .split(/\s/)
    .reduce((acc, prop) => ({ ...acc, [prop]: true }), {});
  return (
    <Card {...props}>
      {text('Text', 'Hello World')}
    </Card>
  );
};

// Default.story = {
//   parameters: {
//     backgrounds: [{ name: 'dark', value: '#333333', default: true }],
//   },
// };
