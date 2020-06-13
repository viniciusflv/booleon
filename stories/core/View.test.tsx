import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('View', () => {
  test('flex', () => {
    const component = renderer.create(<View flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex');
  });
  test('grid', () => {
    const component = renderer.create(<View grid />).toJSON();
    expect(component).toHaveStyleRule('display', 'grid');
  });
  test('hidden', () => {
    const component = renderer.create(<View hidden />).toJSON();
    expect(component).toHaveStyleRule('display', 'none');
  });
  test('visible', () => {
    const component = renderer.create(<View visible />).toJSON();
    expect(component).toHaveStyleRule('visiblity', 'visible');
  });
  test('invisible', () => {
    const component = renderer.create(<View invisible />).toJSON();
    expect(component).toHaveStyleRule('visiblity', 'hidden');
  });
  test('display', () => {
    const component = renderer.create(<View hidden flex grid />).toJSON();
    expect(component).toHaveStyleRule('display', 'none');
  });
  test('grow', () => {
    const component = renderer.create(<View grow />).toJSON();
    expect(component).toHaveStyleRule('flex-grow', '1');
  });
  test('col', () => {
    const component = renderer.create(<View col />).toJSON();
    expect(component).toHaveStyleRule('flex-direction', 'column');
  });
  test('row', () => {
    const component = renderer.create(<View row />).toJSON();
    expect(component).toHaveStyleRule('flex-direction', 'row');
  });
});
