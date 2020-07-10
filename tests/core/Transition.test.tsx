import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Transition', () => {
  test('ts_duration', () => {
    const component = renderer.create(<View ts_duration_13 />).toJSON();
    expect(component).toHaveStyleRule('transition-duration', '13ms');
  });

  test('ts_delay', () => {
    const component = renderer.create(<View ts_delay_42 />).toJSON();
    expect(component).toHaveStyleRule('transition-delay', '42ms');
  });

  describe('Property', () => {
    test('ts', () => {
      const component = renderer.create(<View ts />).toJSON();
      expect(component).toHaveStyleRule('transition-property', 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform');
    });

    test('ts_none', () => {
      const component = renderer.create(<View ts_none />).toJSON();
      expect(component).toHaveStyleRule('transition-property', 'none');
    });
    
    test('ts_all', () => {
      const component = renderer.create(<View ts_all />).toJSON();
      expect(component).toHaveStyleRule('transition-property', 'all');
    });
    
    test('ts_colors', () => {
      const component = renderer.create(<View ts_colors />).toJSON();
      expect(component).toHaveStyleRule('transition-property', 'background-color,border-color,color,fill,stroke');
    });
        
    test('ts_opacity', () => {
      const component = renderer.create(<View ts_opacity />).toJSON();
      expect(component).toHaveStyleRule('transition-property', 'opacity');
    });

    test('ts_shadow', () => {
      const component = renderer.create(<View ts_shadow />).toJSON();
      expect(component).toHaveStyleRule('transition-property', 'box-shadow');
    });

    test('ts_transform', () => {
      const component = renderer.create(<View ts_transform />).toJSON();
      expect(component).toHaveStyleRule('transition-property', 'transform');
    });
  });

  describe('Timing', () => {
    test('ts_ease_linear', () => {
      const component = renderer.create(<View ts_ease_linear />).toJSON();
      expect(component).toHaveStyleRule('transition-timing-function', 'linear');
    });
    
    test('ts_ease_in', () => {
      const component = renderer.create(<View ts_ease_in />).toJSON();
      expect(component).toHaveStyleRule('transition-timing-function', 'cubic-bezier(0.4,0,1,1)');
    });
     
    test('ts_ease_out', () => {
      const component = renderer.create(<View ts_ease_out />).toJSON();
      expect(component).toHaveStyleRule('transition-timing-function', 'cubic-bezier(0,0,0.2,1)');
    });
     
    test('ts_ease_in_out', () => {
      const component = renderer.create(<View ts_ease_in_out />).toJSON();
      expect(component).toHaveStyleRule('transition-timing-function', 'cubic-bezier(0.4,0,0.2,1)');
    });
  });
});
