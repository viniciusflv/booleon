import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Background', () => {
  test('bg_img', () => {
    const bg_img = 'https://www.w3schools.com/cssref/img_tree.gif';
    const component = renderer.create(<View bg_img={bg_img} />).toJSON();
    expect(component).toHaveStyleRule('background-image', `url(${bg_img})`);
  });

  describe('Repeat', () => {
    test('bg_repeat', () => {
      const component = renderer.create(<View bg_repeat />).toJSON();
      expect(component).toHaveStyleRule('background-repeat', 'repeat');
    });

    test('bg_norepeat', () => {
      const component = renderer.create(<View bg_norepeat />).toJSON();
      expect(component).toHaveStyleRule('background-repeat', 'no-repeat');
    });
  });

  describe('Size', () => {
    test('bg_auto', () => {
      const component = renderer.create(<View bg_auto />).toJSON();
      expect(component).toHaveStyleRule('background-size', 'auto');
    });

    test('bg_cover', () => {
      const component = renderer.create(<View bg_cover />).toJSON();
      expect(component).toHaveStyleRule('background-size', 'cover');
    });

    test('bg_contain', () => {
      const component = renderer.create(<View bg_contain />).toJSON();
      expect(component).toHaveStyleRule('background-size', 'contain');
    });
  });

  describe('Attachment', () => {
    test('bg_fixed', () => {
      const component = renderer.create(<View bg_fixed />).toJSON();
      expect(component).toHaveStyleRule('background-attachment', 'fixed');
    });

    test('bg_local', () => {
      const component = renderer.create(<View bg_local />).toJSON();
      expect(component).toHaveStyleRule('background-attachment', 'local');
    });

    test('bg_scroll', () => {
      const component = renderer.create(<View bg_scroll />).toJSON();
      expect(component).toHaveStyleRule('background-attachment', 'scroll');
    });
  });

  describe('Color', () => {
    test('bg_black', () => {
      const component = renderer.create(<View bg_000 />).toJSON();
      expect(component).toHaveStyleRule('background-color', '#000');
    });

    test('bg_white', () => {
      const component = renderer.create(<View bg_fff />).toJSON();
      expect(component).toHaveStyleRule('background-color', '#fff');
    });

    test('bg_grey', () => {
      const component = renderer.create(<View bg_cbd5e0 />).toJSON();
      expect(component).toHaveStyleRule('background-color', '#cbd5e0');
    });
  });
});
