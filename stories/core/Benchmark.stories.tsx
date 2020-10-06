import React, { useState, useEffect } from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import { View } from '../../packages/core/src';
import benchmarkProps from '../benchmarkProps';

export default {
  title: 'Core / Benchmark',
  component: View,
  decorators: [withKnobs],
};

const Div = (props) => <div {...props} />;

const DivStyled = View.styled(Div);

export const Default = () => {
  const [bool, setBool] = useState(true);
  const [change, setChange] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setBool(!bool), 1000);
    return () => clearTimeout(timeout);
  }, [bool]);

  useEffect(() => {
    setChange(!change);
  }, [bool]);

  return (
    <div>
      <View.multiple {...benchmarkProps(bool)}>
        <div>multiple</div>
        <div>multiple</div>
        <div>multiple</div>
      </View.multiple>
      <View.div {...benchmarkProps(bool)}>div</View.div>
      <View.div {...benchmarkProps(bool)}>div</View.div>
      <View.div {...benchmarkProps(bool)}>div</View.div>
      <DivStyled {...benchmarkProps(bool)}>styled</DivStyled>
      <DivStyled {...benchmarkProps(bool)}>styled</DivStyled>
      <DivStyled {...benchmarkProps(bool)}>styled</DivStyled>
    </div>
  );
};
