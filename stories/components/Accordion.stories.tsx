import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { Accordion } from '../../packages/components/src';

export default {
  title: 'Components / Accordion',
  component: Accordion,
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  return (
    <Accordion>
      <div>asds</div>
      <div>asds</div>
      <div>asds</div>
    </Accordion>
  );
};
