import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import modules from '../../packages/modules/src';
import { booleon } from '../../packages/react/src';

const Div = booleon.div(modules);

export default {
  title: 'Components / Flex',
  component: Div,
  decorators: [withA11y, withKnobs],
};

const Flex = ({ children, rowGap = '', columnGap = '', ...props }) => {
  const flexGap = {
    [`mb_neg_${rowGap}`]: rowGap,
    [`mr_neg_${columnGap}`]: columnGap,
    [`child__mr_${columnGap}`]: columnGap,
    [`child__mb_${rowGap}`]: rowGap,
  };

  return (
    <Div flex {...props} {...flexGap}>
      {children}
    </Div>
  );
};

export const Default = () => (
  <Div flex wrap>
    <Flex wrap columnGap="12" rowGap="12">
      {Array.from(Array(30)).map((_, i) => (
        <Div
          key={i}
          {...{ [`w_${(i + 1) * 10}`]: true }}
          flex
          grow
          h_30
          bd_1_solid_f00
        />
      ))}
    </Flex>
    <Div h_30 w_full bd_1_solid_0f0 />
  </Div>
);
