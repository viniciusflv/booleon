import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Sizing', () => {
  describe('Height', () => {
    test('h_122', () => {
      const component = renderer.create(<View h_122 />).toJSON();
      expect(component).toHaveStyleRule('height', '122rem');
    });
    test('h_max_122', () => {
      const component = renderer.create(<View h_max_122 />).toJSON();
      expect(component).toHaveStyleRule('max-height', '122rem');
    });
    test('h_min_122', () => {
      const component = renderer.create(<View h_min_122 />).toJSON();
      expect(component).toHaveStyleRule('min-height', '122rem');
    });
    test('h_screen_122', () => {
      const component = renderer.create(<View h_screen_122 />).toJSON();
      expect(component).toHaveStyleRule('height', '122vh');
    });
    test('h_max_screen_122', () => {
      const component = renderer.create(<View h_max_screen_122 />).toJSON();
      expect(component).toHaveStyleRule('max-height', '122vh');
    });
    test('h_min_screen_122', () => {
      const component = renderer.create(<View h_min_screen_122 />).toJSON();
      expect(component).toHaveStyleRule('min-height', '122vh');
    });
    test('h_full', () => {
      const component = renderer.create(<View h_full />).toJSON();
      expect(component).toHaveStyleRule('height', '100%');
    });
    test('h_max_full', () => {
      const component = renderer.create(<View h_max_full />).toJSON();
      expect(component).toHaveStyleRule('max-height', '100%');
    });
    test('h_min_full', () => {
      const component = renderer.create(<View h_min_full />).toJSON();
      expect(component).toHaveStyleRule('min-height', '100%');
    });
    test('h_auto', () => {
      const component = renderer.create(<View h_auto />).toJSON();
      expect(component).toHaveStyleRule('height', 'auto');
    });
    test('h_max_auto', () => {
      const component = renderer.create(<View h_max_auto />).toJSON();
      expect(component).toHaveStyleRule('max-height', 'auto');
    });
    test('h_min_auto', () => {
      const component = renderer.create(<View h_min_auto />).toJSON();
      expect(component).toHaveStyleRule('min-height', 'auto');
    });
  });
  
  describe('Width', () => {
    test('w_122', () => {
      const component = renderer.create(<View w_122 />).toJSON();
      expect(component).toHaveStyleRule('width', '122rem');
    });
    test('w_max_122', () => {
      const component = renderer.create(<View w_max_122 />).toJSON();
      expect(component).toHaveStyleRule('max-width', '122rem');
    });
    test('w_min_122', () => {
      const component = renderer.create(<View w_min_122 />).toJSON();
      expect(component).toHaveStyleRule('min-width', '122rem');
    });
    test('w_screen_122', () => {
      const component = renderer.create(<View w_screen_122 />).toJSON();
      expect(component).toHaveStyleRule('width', '122vh');
    });
    test('w_max_screen_122', () => {
      const component = renderer.create(<View w_max_screen_122 />).toJSON();
      expect(component).toHaveStyleRule('max-width', '122vh');
    });
    test('w_min_screen_122', () => {
      const component = renderer.create(<View w_min_screen_122 />).toJSON();
      expect(component).toHaveStyleRule('min-width', '122vh');
    });
    test('w_full', () => {
      const component = renderer.create(<View w_full />).toJSON();
      expect(component).toHaveStyleRule('width', '100%');
    });
    test('w_max_full', () => {
      const component = renderer.create(<View w_max_full />).toJSON();
      expect(component).toHaveStyleRule('max-width', '100%');
    });
    test('w_min_full', () => {
      const component = renderer.create(<View w_min_full />).toJSON();
      expect(component).toHaveStyleRule('min-width', '100%');
    });
    test('w_auto', () => {
      const component = renderer.create(<View w_auto />).toJSON();
      expect(component).toHaveStyleRule('width', 'auto');
    });
    test('w_max_auto', () => {
      const component = renderer.create(<View w_max_auto />).toJSON();
      expect(component).toHaveStyleRule('max-width', 'auto');
    });
    test('w_min_auto', () => {
      const component = renderer.create(<View w_min_auto />).toJSON();
      expect(component).toHaveStyleRule('min-width', 'auto');
    });
  });
});