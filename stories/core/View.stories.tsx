import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { View } from '../../packages/core/src';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withKnobs],
};

const SectionStyled2 = View.styled(({ children, className }) => {
  return <section className={className}>{children}</section>;
});

const SectionStyled = View.styled(({ children, className }) => {
  return (
    <SectionStyled2 bg_0f0 fc_ff0 className={className}>
      {children}
    </SectionStyled2>
  );
});

export const Default = () => {
  return (
    <View.div w_full h_30 grid cols_1fr_1fr>
      <SectionStyled bg_f00 fc_fff>
        a
      </SectionStyled>
      <View.div bg_f00 cols_span_2 />
    </View.div>
  );
};
