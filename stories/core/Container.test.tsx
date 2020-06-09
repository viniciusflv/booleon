import 'jest-styled-components';
import { Container } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Container', () => {
  test('flex', () => {
    const component = renderer.create(<Container />).toJSON();
  });
});
