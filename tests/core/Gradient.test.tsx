import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Gradient', () => {
  test('gx', () => {
    const component = renderer.create(<View gx_000 />).toJSON();
    expect(component).toHaveStyleRule(
      'background-image',
      'linear-gradient(to right,#000,transparent,#000)',
    );
  });

  test('gy', () => {
    const component = renderer.create(<View gy_000 />).toJSON();
    expect(component).toHaveStyleRule(
      'background-image',
      'linear-gradient(to top,#000,transparent,#000)',
    );
  });

  test('gt', () => {
    const component = renderer.create(<View gt_000 />).toJSON();
    expect(component).toHaveStyleRule(
      'background-image',
      'linear-gradient(to top,transparent,#000)',
    );
  });

  test('gb', () => {
    const component = renderer.create(<View gb_000 />).toJSON();
    expect(component).toHaveStyleRule(
      'background-image',
      'linear-gradient(to bottom,transparent,#000)',
    );
  });

  test('gl', () => {
    const component = renderer.create(<View gl_000 />).toJSON();
    expect(component).toHaveStyleRule(
      'background-image',
      'linear-gradient(to left,transparent,#000)',
    );
  });

  test('gr', () => {
    const component = renderer.create(<View gr_000 />).toJSON();
    expect(component).toHaveStyleRule(
      'background-image',
      'linear-gradient(to right,transparent,#000)',
    );
  });
});
