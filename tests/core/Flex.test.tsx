import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Flex', () => {
  test('flex', () => {
    const component = renderer.create(<View flex />).toJSON();
    expect(component).toHaveStyleRule('display', 'flex'); 
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

  describe('Main Axis', () => {
    test('main_between', () => {
      const component = renderer.create(<View main_between />).toJSON();
      expect(component).toHaveStyleRule('justify-content', 'space-between');
    });

    test('main_around', () => {
      const component = renderer.create(<View main_around />).toJSON();
      expect(component).toHaveStyleRule('justify-content', 'space-around');
    });

    test('main_evenly', () => {
      const component = renderer.create(<View main_evenly />).toJSON();
      expect(component).toHaveStyleRule('justify-content', 'space-evenly');
    });

    test('main_center', () => {
      const component = renderer.create(<View main_center />).toJSON();
      expect(component).toHaveStyleRule('justify-content', 'center');
    });

    test('main_stretch', () => {
      const component = renderer.create(<View main_stretch />).toJSON();
      expect(component).toHaveStyleRule('justify-content', 'stretch');
    });

    test('main_start', () => {
      const component = renderer.create(<View main_start />).toJSON();
      expect(component).toHaveStyleRule('justify-content', 'flex-start');
    });

    test('main_end', () => {
      const component = renderer.create(<View main_end />).toJSON();
      expect(component).toHaveStyleRule('justify-content', 'flex-end');
    });
  });

  describe('Cross Axis', () => {
    test('cross_center', () => {
      const component = renderer.create(<View cross_center />).toJSON();
      expect(component).toHaveStyleRule('align-items', 'center');
    });

    test('cross_stretch', () => {
      const component = renderer.create(<View cross_stretch />).toJSON();
      expect(component).toHaveStyleRule('align-items', 'stretch');
    });

    test('cross_start', () => {
      const component = renderer.create(<View cross_start />).toJSON();
      expect(component).toHaveStyleRule('align-items', 'flex-start');
    });

    test('cross_end', () => {
      const component = renderer.create(<View cross_end />).toJSON();
      expect(component).toHaveStyleRule('align-items', 'flex-end');
    });
  });
});