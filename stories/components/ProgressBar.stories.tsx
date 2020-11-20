import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { ProgressBar } from '../../packages/components/src';

export default {
  title: 'Components / ProgressBar',
  component: ProgressBar,
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  return <ProgressBar value="70" max="100" onChange={console.log} />;
};
