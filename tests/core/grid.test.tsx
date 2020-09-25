import { render } from '@testing-library/react';
import React from 'react';

import { View } from '../../packages/core/src';
import '@testing-library/jest-dom';

describe('Grid', () => {
  test('rows', () => {
    const { getByTestId } = render(
      <View.div data-testid="rows" rows_1fr_auto_1px />,
    );
    expect(getByTestId('rows')).toHaveStyle(
      'grid-template-rows: 1fr auto 1px;',
    );
  });

  test('cols', () => {
    const { getByTestId } = render(
      <View.div data-testid="cols" cols_1fr_auto_1px />,
    );
    expect(getByTestId('cols')).toHaveStyle(
      'grid-template-columns:1fr auto 1px;',
    );
  });

  test('area', () => {
    const { getByTestId } = render(<View.div data-testid="area" area_AREA />);
    expect(getByTestId('area')).toHaveStyle('grid-area: AREA;');
  });

  test('cols_span', () => {
    const { getByTestId } = render(
      <View.div data-testid="cols_span" cols_span_2 />,
    );
    expect(getByTestId('cols_span')).toHaveStyle(
      'grid-column: span 2 / span 2;',
    );
  });

  test('rows_span', () => {
    const { getByTestId } = render(
      <View.div data-testid="rows_span" rows_span_2 />,
    );
    expect(getByTestId('rows_span')).toHaveStyle('grid-row: span 2 / span 2;');
  });

  test('cols_start', () => {
    const { getByTestId } = render(
      <View.div data-testid="cols_start" cols_start_2 />,
    );
    expect(getByTestId('cols_start')).toHaveStyle('grid-column-start: 2;');
  });

  test('rows_start', () => {
    const { getByTestId } = render(
      <View.div data-testid="rows_start" rows_start_2 />,
    );
    expect(getByTestId('rows_start')).toHaveStyle('grid-row-start: 2;');
  });

  test('cols_end', () => {
    const { getByTestId } = render(
      <View.div data-testid="cols_end" cols_end_2 />,
    );
    expect(getByTestId('cols_end')).toHaveStyle('grid-column-end: 2;');
  });

  test('rows_end', () => {
    const { getByTestId } = render(
      <View.div data-testid="rows_end" rows_end_2 />,
    );
    expect(getByTestId('rows_end')).toHaveStyle('grid-row-end: 2;');
  });

  test('grid', () => {
    const { getByTestId } = render(<View.div data-testid="grid" grid />);
    expect(getByTestId('grid')).toHaveStyle('display: grid;');
  });

  test('areas', () => {
    const { getByTestId } = render(
      <View.div
        data-testid="areas"
        areas={`
          "x y z"
          "a b z"
        `}
      />,
    );
    expect(getByTestId('areas')).toHaveStyle(
      'grid-template-areas: "x y z""a b z";',
    );
  });
});
