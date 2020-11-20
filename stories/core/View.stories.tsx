import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { View } from '../../packages/base/src';
import { useThemes, themes, root } from '../../packages/theme/src';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withKnobs],
};

export const Default = () => {
  const [theme, setTheme] = useThemes(root, themes, 'light');
  return (
    <div
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{
        fontFamily: 'var(--fonts-arial)',
        color: 'var(--colors-primary)',
        backgroundColor: 'var(--colors-secondary)',
      }}>
      should be blue
    </div>
  );
};
