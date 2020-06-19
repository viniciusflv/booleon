import './reset.css'
import { addParameters } from '@storybook/react';

addParameters({
  backgrounds: [
    { name: 'light', value: '#eeeeee', default: true },
    { name: 'dark', value: '#333333' },
  ],
});