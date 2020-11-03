import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { Drop } from '../../packages/components/src';

export default {
  title: 'Components / Drop',
  component: Drop,
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  return (
    <Drop p_12 trigger={<a href="#">sasdasd</a>}>
      <a href="#">sasdasd</a>
      <a href="#">sasdasd</a>
      <a href="#">sasdasd</a>
    </Drop>
  );
};
