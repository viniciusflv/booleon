import React, { FC, useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
// import { View } from '../../packages/core/src';

const View = () => <div />

export default {
  title: 'Core | View',
  component: View,
  decorators: [withA11y, withKnobs],
};

export const Default: FC = () => {
  // const [click, setClick] = useState(true);
  // console.log(click);
  return (
    <div>aa</div>
  );
};
