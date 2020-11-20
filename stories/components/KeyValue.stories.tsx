import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { KeyValue } from '../../packages/components/src';

export default {
  title: 'Components / KeyValue',
  component: KeyValue,
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  return <KeyValue label="key" value="value" />;
};
