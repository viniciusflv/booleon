import { Drop } from '../../packages/components/src';
import { View } from '../../packages/core/src';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

export default {
  title: 'Components | Drop',
  component: Drop,
  decorators: [withKnobs],
};

export const Default = () => {
  const props = text('Props', '')
    .split(/\s/)
    .reduce((acc, prop) => ({ ...acc, [prop]: true }), {});
  return (
    <View>
      <Drop {...props}>
        <button>header</button>
        <main>main</main>
      </Drop>
    </View>
  );
};

// Default.story = {
//   parameters: {
//     backgrounds: [{ name: 'dark', value: '#333333', default: true }],
//   },
// };
