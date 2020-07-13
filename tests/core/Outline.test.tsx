import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Outline', () => {
  test('olw_13', () => {
    const component = renderer.create(<View olw_13 />).toJSON();
    expect(component).toHaveStyleRule('outline-width', '1.3rem');
  });

  test('olc_ff0', () => {
    const component = renderer.create(<View olc_ff0 />).toJSON();
    expect(component).toHaveStyleRule('outline-color', '#ff0');
  });

  test('ol_none', () => {
    const component = renderer.create(<View ol_none />).toJSON();
    expect(component).toHaveStyleRule('outline', 'none');
  });

  test('ol_dotted', () => {
    const component = renderer.create(<View ol_dotted />).toJSON();
    expect(component).toHaveStyleRule('outline-style', 'dotted');
  });

  test('ol_dashed', () => {
    const component = renderer.create(<View ol_dashed />).toJSON();
    expect(component).toHaveStyleRule('outline-style', 'dashed');
  });

  test('ol_solid', () => {
    const component = renderer.create(<View ol_solid />).toJSON();
    expect(component).toHaveStyleRule('outline-style', 'solid');
  });

  test('ol_double', () => {
    const component = renderer.create(<View ol_double />).toJSON();
    expect(component).toHaveStyleRule('outline-style', 'double');
  });

  test('ol_groove', () => {
    const component = renderer.create(<View ol_groove />).toJSON();
    expect(component).toHaveStyleRule('outline-style', 'groove');
  });

  test('ol_ridge', () => {
    const component = renderer.create(<View ol_ridge />).toJSON();
    expect(component).toHaveStyleRule('outline-style', 'ridge');
  });

  test('ol_inset', () => {
    const component = renderer.create(<View ol_inset />).toJSON();
    expect(component).toHaveStyleRule('outline-style', 'inset');
  });

  test('ol_outset', () => {
    const component = renderer.create(<View ol_outset />).toJSON();
    expect(component).toHaveStyleRule('outline-style', 'outset');
  });
});
