import React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';

import { useBooleon, BooleonProps } from '../../packages/core_new/src';
import { font } from '../../packages/modules/src';

const Text: React.FC<BooleonProps<typeof font>> = ({ children, ...props }) => {
  return <span {...useBooleon(props, font)}>{children}</span>;
};

export default {
  title: 'Core / New',
  component: Text,
  decorators: [withKnobs],
};

export const Default = () => {
  const props = text('Props', 'fc_0f0 ff_sans fs_12')
    .split(/\s/)
    .filter(Boolean)
    .reduce((acc, prop) => ({ ...acc, [prop]: true }), {});
  return <Text hover__fc_f00 />;
  return <div {...useBooleon(props, font)}>text</div>;
};
