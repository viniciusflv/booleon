import { Text, View } from '../../packages/core/src/core';
import React, { FC } from 'react';

export default {
  title: 'Core | Text',
  component: Text,
};

export const Default: FC = () => (
  <View flex col>
    <Text h1 fc_f00 f_xl>h1</Text>
    <Text h2>h2</Text>
    <Text h3>h3</Text>
    <Text h4>h4</Text>
    <Text p>f_xs</Text>
  </View>
);
