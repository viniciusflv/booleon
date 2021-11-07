import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { outline } from './outline';

const BooleonComponent = booleon.div(outline);
describe('Outline', () => {
  test('ol_style_solid', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_style_solid" ol_style_solid />,
    );
    expect(getByTestId('ol_style_solid')).toHaveStyle('outline-style: solid;');
  });

  test('ol_style_dashed', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_style_dashed" ol_style_dashed />,
    );
    expect(getByTestId('ol_style_dashed')).toHaveStyle(
      'outline-style: dashed;',
    );
  });

  test('ol_style_dotted', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_style_dotted" ol_style_dotted />,
    );
    expect(getByTestId('ol_style_dotted')).toHaveStyle(
      'outline-style: dotted;',
    );
  });

  test('ol_style_double', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_style_double" ol_style_double />,
    );
    expect(getByTestId('ol_style_double')).toHaveStyle(
      'outline-style: double;',
    );
  });

  test('ol_style_groove', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_style_groove" ol_style_groove />,
    );
    expect(getByTestId('ol_style_groove')).toHaveStyle(
      'outline-style: groove;',
    );
  });

  test('ol_style_ridge', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_style_ridge" ol_style_ridge />,
    );
    expect(getByTestId('ol_style_ridge')).toHaveStyle('outline-style: ridge;');
  });

  test('ol_style_inset', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_style_inset" ol_style_inset />,
    );
    expect(getByTestId('ol_style_inset')).toHaveStyle('outline-style: inset;');
  });

  test('ol_style_outset', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_style_outset" ol_style_outset />,
    );
    expect(getByTestId('ol_style_outset')).toHaveStyle(
      'outline-style: outset;',
    );
  });

  test('ol_width_10px', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_width_10px" ol_width_10px />,
    );
    expect(getByTestId('ol_width_10px')).toHaveStyle('outline-width: 10px;');
  });

  test('ol_color_f00', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ol_color_f00" ol_color_f00 />,
    );
    expect(getByTestId('ol_color_f00')).toHaveStyle('outline-color: #f00;');
  });
});
