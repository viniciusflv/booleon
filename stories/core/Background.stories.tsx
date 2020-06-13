import { Background } from '../../packages/core/src';
import React, { FC } from 'react';

export default {
  title: 'Core | Background',
  component: Background,
};

export const Default: FC = () => (
  <Background
    gy_grey
    bg_black
    bg_img="https://www.w3schools.com/cssref/img_tree.gif"
    style={{ width: '500px', height: '1000px' }}>
    <span style={{ color: 'white' }}>texto</span>
  </Background>
);
