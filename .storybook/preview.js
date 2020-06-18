import { addParameters } from '@storybook/react';

addParameters({
  backgrounds: [
    { name: 'light', value: '#f9f9f9', default: true },
    { name: 'dark', value: '#0f0f0f' },
  ],
});