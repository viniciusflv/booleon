import React from 'react';
import { View } from '../../packages/core/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Outline', () => {
  test('ols_solid', () => {
    const { getByTestId } = render(
      <View.div data-testid="ols_solid" ols_solid />,
    );
    expect(getByTestId('ols_solid')).toHaveStyle('outline-style: solid;');
  });

  test('ols_dashed', () => {
    const { getByTestId } = render(
      <View.div data-testid="ols_dashed" ols_dashed />,
    );
    expect(getByTestId('ols_dashed')).toHaveStyle('outline-style: dashed;');
  });

  test('ols_dotted', () => {
    const { getByTestId } = render(
      <View.div data-testid="ols_dotted" ols_dotted />,
    );
    expect(getByTestId('ols_dotted')).toHaveStyle('outline-style: dotted;');
  });

  test('ols_double', () => {
    const { getByTestId } = render(
      <View.div data-testid="ols_double" ols_double />,
    );
    expect(getByTestId('ols_double')).toHaveStyle('outline-style: double;');
  });

  test('ols_groove', () => {
    const { getByTestId } = render(
      <View.div data-testid="ols_groove" ols_groove />,
    );
    expect(getByTestId('ols_groove')).toHaveStyle('outline-style: groove;');
  });

  test('ols_ridge', () => {
    const { getByTestId } = render(
      <View.div data-testid="ols_ridge" ols_ridge />,
    );
    expect(getByTestId('ols_ridge')).toHaveStyle('outline-style: ridge;');
  });

  test('ols_inset', () => {
    const { getByTestId } = render(
      <View.div data-testid="ols_inset" ols_inset />,
    );
    expect(getByTestId('ols_inset')).toHaveStyle('outline-style: inset;');
  });

  test('ols_outset', () => {
    const { getByTestId } = render(
      <View.div data-testid="ols_outset" ols_outset />,
    );
    expect(getByTestId('ols_outset')).toHaveStyle('outline-style: outset;');
  });

  test('olw_10', () => {
    const { getByTestId } = render(<View.div data-testid="olw_10" olw_10 />);
    expect(getByTestId('olw_10')).toHaveStyle('outline-width: 0.1rem;');
  });

  test('olc_f00', () => {
    const { getByTestId } = render(<View.div data-testid="olc_f00" olc_f00 />);
    expect(getByTestId('olc_f00')).toHaveStyle('outline-color: #f00;');
  });
});
