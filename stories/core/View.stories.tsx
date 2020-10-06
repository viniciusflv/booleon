import React, { useState, useEffect } from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { View } from '../../packages/core/src';

export default {
  title: 'Core / View',
  component: View,
  decorators: [withKnobs],
};

const Div = (props) => <div {...props} />;

const DivStyled = View.styled(Div);

export const Default = () => {
  const [bool, setBool] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setBool(!bool), 1000);
    return () => clearTimeout(timeout);
  }, [bool]);
  return (
    <div>
      <View.multiple bw_10 bc_f00={bool} bs_solid>
        <div>multiple</div>
        <div>multiple</div>
        <div>multiple</div>
      </View.multiple>
      <View.div bw_10 bc_f00={bool} bs_solid>
        div
      </View.div>
      <View.div bw_10 bc_f00={bool} bs_solid>
        div
      </View.div>
      <View.div bw_10 bc_f00={bool} bs_solid>
        div
      </View.div>
      <DivStyled bw_10 bc_f00={bool} bs_solid>
        styled
      </DivStyled>
      <DivStyled bw_10 bc_f00={bool} bs_solid>
        styled
      </DivStyled>
      <DivStyled bw_10 bc_f00={bool} bs_solid>
        styled
      </DivStyled>
    </div>
  );
};
