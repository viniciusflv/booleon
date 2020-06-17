import 'jest-styled-components';
import { Text } from '../../packages/core/src/core';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Text', () => {
  describe('Style', () => {
    test('stroke', () => {
      const stroke = '-1px 0 #ff0, 0 1px #ff0, 1px 0 #ff0, 0 -1px #ff0';
      const component = renderer.create(<Text fs_ff0 />).toJSON();
      expect(component).toHaveStyleRule('text-shadow', stroke);
    });
  
    test('color', () => {
      const component = renderer.create(<Text fc_ff0 />).toJSON();
      expect(component).toHaveStyleRule('color', '#ff0');
    });
  
    test('italic', () => {
      const component = renderer.create(<Text f_italic />).toJSON();
      expect(component).toHaveStyleRule('font-style', 'italic');
    });
  });

  describe('Family', () => {
    test('ff_sans', () => {
      const ff_sans = 'Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif';
      const component = renderer.create(<Text f_sans />).toJSON();
      expect(component).toHaveStyleRule('font-family', ff_sans);
    });

    test('ff_serif', () => {
      const ff_serif = 'Georgia,Cambria,"Times New Roman",Times,serif';
      const component = renderer.create(<Text f_serif />).toJSON();
      expect(component).toHaveStyleRule('font-family', ff_serif);
    });

    test('ff_mono', () => {
      const ff_mono = 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace';
      const component = renderer.create(<Text f_mono />).toJSON();
      expect(component).toHaveStyleRule('font-family', ff_mono);
    });
  });

  describe('Size', () => {
    test('f_xs', () => {
      const component = renderer.create(<Text f_xs />).toJSON();
      expect(component).toHaveStyleRule('font-size', '1rem');
    });

    test('f_sm', () => {
      const component = renderer.create(<Text f_sm />).toJSON();
      expect(component).toHaveStyleRule('font-size', '2rem');
    });

    test('f_md', () => {
      const component = renderer.create(<Text f_md />).toJSON();
      expect(component).toHaveStyleRule('font-size', '3rem');
    });

    test('f_lg', () => {
      const component = renderer.create(<Text f_lg />).toJSON();
      expect(component).toHaveStyleRule('font-size', '4rem');
    });

    test('f_xl', () => {
      const component = renderer.create(<Text f_xl />).toJSON();
      expect(component).toHaveStyleRule('font-size', '5rem');
    });
  });
});
