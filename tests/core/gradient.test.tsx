import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { View } from '../../packages/core/src';

describe('Gradient', () => {
  test('gx_f00', () => {
    const { getByTestId } = render(
      <View.div data-testid="gx_f00" bg_img="/a" gx_f00 />,
    );
    expect(getByTestId('gx_f00')).toHaveStyle(
      'background-image: linear-gradient(to right,#f00,transparent,#f00);',
    );
  });

  test('gy_f00', () => {
    const { getByTestId } = render(
      <View.div data-testid="gy_f00" bg_img="/a" gy_f00 />,
    );
    expect(getByTestId('gy_f00')).toHaveStyle(
      'background-image: linear-gradient(to top,#f00,transparent,#f00);',
    );
  });

  test('gt_f00', () => {
    const { getByTestId } = render(
      <View.div data-testid="gt_f00" bg_img="/a" gt_f00 />,
    );
    expect(getByTestId('gt_f00')).toHaveStyle(
      'background-image: linear-gradient(to top,transparent,#f00);',
    );
  });

  test('gb_f00', () => {
    const { getByTestId } = render(
      <View.div data-testid="gb_f00" bg_img="/a" gb_f00 />,
    );
    expect(getByTestId('gb_f00')).toHaveStyle(
      'background-image: linear-gradient(to bottom,transparent,#f00);',
    );
  });

  test('gl_f00', () => {
    const { getByTestId } = render(
      <View.div data-testid="gl_f00" bg_img="/a" gl_f00 />,
    );
    expect(getByTestId('gl_f00')).toHaveStyle(
      'background-image: linear-gradient(to left,transparent,#f00);',
    );
  });

  test('gr_f00', () => {
    const { getByTestId } = render(
      <View.div data-testid="gl_f00" bg_img="/a" gr_f00 />,
    );
    expect(getByTestId('gl_f00')).toHaveStyle(
      'background-image: linear-gradient(to right,transparent,#f00);',
    );
  });
});
