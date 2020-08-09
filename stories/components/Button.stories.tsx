import { Button } from '../../packages/components/src';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import React, { FC } from 'react';

export default {
  title: 'Components | Button',
  component: Button,
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  return (
    <Button green onClick={console.log}>
      Button
    </Button>
  );
};
