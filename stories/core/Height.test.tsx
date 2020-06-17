import 'jest-styled-components';
import { Height } from '../../packages/core/src/core';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Height', () => {
  describe('Screen', () => {
    test('h_screen_100', () => {
      const component = renderer.create(<Height h_screen_100 />).toJSON();
      expect(component).toHaveStyleRule('height', '100vh');
    });
    test('h_screen_90', () => {
      const component = renderer.create(<Height h_screen_90 />).toJSON();
      expect(component).toHaveStyleRule('height', '90vh');
    });
    test('h_screen_80', () => {
      const component = renderer.create(<Height h_screen_80 />).toJSON();
      expect(component).toHaveStyleRule('height', '80vh');
    });
    test('h_screen_70', () => {
      const component = renderer.create(<Height h_screen_70 />).toJSON();
      expect(component).toHaveStyleRule('height', '70vh');
    });
    test('h_screen_60', () => {
      const component = renderer.create(<Height h_screen_60 />).toJSON();
      expect(component).toHaveStyleRule('height', '60vh');
    });
    test('h_screen_50', () => {
      const component = renderer.create(<Height h_screen_50 />).toJSON();
      expect(component).toHaveStyleRule('height', '50vh');
    });
    test('h_screen_40', () => {
      const component = renderer.create(<Height h_screen_40 />).toJSON();
      expect(component).toHaveStyleRule('height', '40vh');
    });
    test('h_screen_30', () => {
      const component = renderer.create(<Height h_screen_30 />).toJSON();
      expect(component).toHaveStyleRule('height', '30vh');
    });
    test('h_screen_20', () => {
      const component = renderer.create(<Height h_screen_20 />).toJSON();
      expect(component).toHaveStyleRule('height', '20vh');
    });
    test('h_screen_10', () => {
      const component = renderer.create(<Height h_screen_10 />).toJSON();
      expect(component).toHaveStyleRule('height', '10vh');
    });
  });
  describe('Sizes', () => {
    test('h_0', () => {
      const component = renderer.create(<Height h_0 />).toJSON();
      expect(component).toHaveStyleRule('height', '0');
    });
    test('h_1', () => {
      const component = renderer.create(<Height h_1 />).toJSON();
      expect(component).toHaveStyleRule('height', '1rem');
    });
    test('h_2', () => {
      const component = renderer.create(<Height h_2 />).toJSON();
      expect(component).toHaveStyleRule('height', '2rem');
    });
    test('h_4', () => {
      const component = renderer.create(<Height h_4 />).toJSON();
      expect(component).toHaveStyleRule('height', '4rem');
    });
    test('h_8', () => {
      const component = renderer.create(<Height h_8 />).toJSON();
      expect(component).toHaveStyleRule('height', '8rem');
    });
    test('h_16', () => {
      const component = renderer.create(<Height h_16 />).toJSON();
      expect(component).toHaveStyleRule('height', '16rem');
    });
    test('h_32', () => {
      const component = renderer.create(<Height h_32 />).toJSON();
      expect(component).toHaveStyleRule('height', '32rem');
    });
    test('h_64', () => {
      const component = renderer.create(<Height h_64 />).toJSON();
      expect(component).toHaveStyleRule('height', '64rem');
    });
  });
  test('h_full', () => {
    const component = renderer.create(<Height h_full />).toJSON();
    expect(component).toHaveStyleRule('height', '100%');
  });
  test('h_auto', () => {
    const component = renderer.create(<Height h_auto />).toJSON();
    expect(component).toHaveStyleRule('height', 'auto');
  });
});
