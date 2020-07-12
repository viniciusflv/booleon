import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Grid', () => {
  test('grid', () => {
    const component = renderer.create(<View grid />).toJSON();
    expect(component).toHaveStyleRule('display', 'grid');
  });

  test('area', () => {
    const component = renderer.create(<View area_AREA />).toJSON();
    expect(component).toHaveStyleRule('grid-area', 'AREA');
  });

  test('flow_rows', () => {
    const component = renderer.create(<View flow_rows />).toJSON();
    expect(component).toHaveStyleRule('grid-auto-flow', 'row');
  });

  test('flow_cols', () => {
    const component = renderer.create(<View flow_cols />).toJSON();
    expect(component).toHaveStyleRule('grid-auto-flow', 'column');
  });

  test('dense flow_rows', () => {
    const component = renderer.create(<View dense flow_rows />).toJSON();
    expect(component).toHaveStyleRule('grid-auto-flow', 'row dense');
  });

  test('dense flow_cols', () => {
    const component = renderer.create(<View dense flow_cols />).toJSON();
    expect(component).toHaveStyleRule('grid-auto-flow', 'column dense');
  });

  test('dense', () => {
    const component = renderer.create(<View dense />).toJSON();
    expect(component).toHaveStyleRule('grid-auto-flow', 'dense');
  });

  test('cols', () => {
    const component = renderer.create(<View cols_1fr_20px_auto />).toJSON();
    expect(component).toHaveStyleRule('grid-template-columns', '1fr 20px auto');
  });

  test('rows', () => {
    const component = renderer.create(<View rows_1fr_20px_auto />).toJSON();
    expect(component).toHaveStyleRule('grid-template-rows', '1fr 20px auto');
  });

  test('cols_start', () => {
    const component = renderer.create(<View cols_start />).toJSON();
    expect(component).toHaveStyleRule('grid-column-start', '1');
  });

  test('cols_start_3', () => {
    const component = renderer.create(<View cols_start_3 />).toJSON();
    expect(component).toHaveStyleRule('grid-column-start', '3');
  });

  test('cols_end', () => {
    const component = renderer.create(<View cols_end />).toJSON();
    expect(component).toHaveStyleRule('grid-column-end', '1');
  });

  test('cols_end_3', () => {
    const component = renderer.create(<View cols_end_3 />).toJSON();
    expect(component).toHaveStyleRule('grid-column-end', '3');
  });

  test('rows_start', () => {
    const component = renderer.create(<View rows_start />).toJSON();
    expect(component).toHaveStyleRule('grid-row-start', '1');
  });

  test('rows_start_3', () => {
    const component = renderer.create(<View rows_start_3 />).toJSON();
    expect(component).toHaveStyleRule('grid-row-start', '3');
  });

  test('rows_end', () => {
    const component = renderer.create(<View rows_end />).toJSON();
    expect(component).toHaveStyleRule('grid-row-end', '1');
  });

  test('rows_end_3', () => {
    const component = renderer.create(<View rows_end_3 />).toJSON();
    expect(component).toHaveStyleRule('grid-row-end', '3');
  });
});
