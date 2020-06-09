import { Container } from '../../packages/core/src';
import React, { FC } from 'react';

export default {
  title: 'Core | Container',
  component: Container,
};

export const Default: FC = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ height: '1rem', margin: '10px', background: 'red', width: '10px' }} />
    <div style={{ height: '2rem', margin: '10px', background: 'red', width: '10px' }} />
    <div style={{ height: '4rem', margin: '10px', background: 'red', width: '10px' }} />
    <div style={{ height: '8rem', margin: '10px', background: 'red', width: '10px' }} />
    <div style={{ height: '16rem', margin: '10px', background: 'red', width: '10px' }} />
    <div style={{ height: '32rem', margin: '10px', background: 'red', width: '10px' }} />
    <div style={{ height: '64rem', margin: '10px', background: 'red', width: '10px' }} />
  </div>
);
