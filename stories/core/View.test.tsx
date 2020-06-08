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
  // test('m_0', () => {
  //   const component = renderer.create(<View m_0 />).toJSON();
  //   expect(component).toHaveStyleRule('margin', '0');
  // });
  // test('m_auto', () => {
  //   const component = renderer.create(<View m_auto />).toJSON();
  //   expect(component).toHaveStyleRule('margin', 'auto');
  // });
  // test('m_xs', () => {
  //   const component = renderer.create(<View m_xs />).toJSON();
  //   expect(component).toHaveStyleRule('margin', '0.25rem');
  // });
  // test('p_xs', () => {
  //   const component = renderer.create(<View p_xs />).toJSON();
  //   expect(component).toHaveStyleRule('padding', '0.25rem');
  // });
});
