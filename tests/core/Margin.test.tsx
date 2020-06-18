import 'jest-styled-components';
import { Margin } from '../../packages/core/src/core';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Margin', () => {
  describe('XY', () => {
    test('m_0', () => {
      const component = renderer.create(<Margin m_0 />).toJSON();
      expect(component).toHaveStyleRule('margin', '0');
    });
    test('m_0', () => {
      const component = renderer.create(<Margin m_0 />).toJSON();
      expect(component).toHaveStyleRule('margin', '0');
    });
    test('mx_ato', () => {
      const component = renderer.create(<Margin m_auto />).toJSON();
      expect(component).toHaveStyleRule('margin', 'auto');
    });
    test('m_xs', () => {
      const component = renderer.create(<Margin m_xs />).toJSON();
      expect(component).toHaveStyleRule('margin', '.25rem');
    });
    test('m_sm', () => {
      const component = renderer.create(<Margin m_sm />).toJSON();
      expect(component).toHaveStyleRule('margin', '.5rem');
    });
    test('m_md', () => {
      const component = renderer.create(<Margin m_md />).toJSON();
      expect(component).toHaveStyleRule('margin', '1rem');
    });
    test('m_lg', () => {
      const component = renderer.create(<Margin m_lg />).toJSON();
      expect(component).toHaveStyleRule('margin', '2rem');
    });
    test('m_xl', () => {
      const component = renderer.create(<Margin m_xl />).toJSON();
      expect(component).toHaveStyleRule('margin', '4rem');
    });
  });
  describe('X', () => {
    test('mx_0', () => {
      const component = renderer.create(<Margin mx_0 />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '0');
      expect(component).toHaveStyleRule('margin-right', '0');
    });
    test('mx_0', () => {
      const component = renderer.create(<Margin mx_0 />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '0');
      expect(component).toHaveStyleRule('margin-right', '0');
    });
    test('mx_auto', () => {
      const component = renderer.create(<Margin mx_auto />).toJSON();
      expect(component).toHaveStyleRule('margin-left', 'auto');
      expect(component).toHaveStyleRule('margin-right', 'auto');
    });
    test('mx_xs', () => {
      const component = renderer.create(<Margin mx_xs />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '.25rem');
      expect(component).toHaveStyleRule('margin-right', '.25rem');
    });
    test('mx_sm', () => {
      const component = renderer.create(<Margin mx_sm />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '.5rem');
      expect(component).toHaveStyleRule('margin-right', '.5rem');
    });
    test('mx_md', () => {
      const component = renderer.create(<Margin mx_md />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '1rem');
      expect(component).toHaveStyleRule('margin-right', '1rem');
    });
    test('mx_lg', () => {
      const component = renderer.create(<Margin mx_lg />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '2rem');
      expect(component).toHaveStyleRule('margin-right', '2rem');
    });
    test('mx_xl', () => {
      const component = renderer.create(<Margin mx_xl />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '4rem');
      expect(component).toHaveStyleRule('margin-right', '4rem');
    });
  });
  describe('Y', () => {
    test('my_0', () => {
      const component = renderer.create(<Margin my_0 />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '0');
      expect(component).toHaveStyleRule('margin-bottom', '0');
    });
    test('my_auto', () => {
      const component = renderer.create(<Margin my_auto />).toJSON();
      expect(component).toHaveStyleRule('margin-top', 'auto');
      expect(component).toHaveStyleRule('margin-bottom', 'auto');
    });
    test('my_xs', () => {
      const component = renderer.create(<Margin my_xs />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '.25rem');
      expect(component).toHaveStyleRule('margin-bottom', '.25rem');
    });
    test('my_sm', () => {
      const component = renderer.create(<Margin my_sm />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '.5rem');
      expect(component).toHaveStyleRule('margin-bottom', '.5rem');
    });
    test('my_md', () => {
      const component = renderer.create(<Margin my_md />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '1rem');
      expect(component).toHaveStyleRule('margin-bottom', '1rem');
    });
    test('my_lg', () => {
      const component = renderer.create(<Margin my_lg />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '2rem');
      expect(component).toHaveStyleRule('margin-bottom', '2rem');
    });
    test('my_xl', () => {
      const component = renderer.create(<Margin my_xl />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '4rem');
      expect(component).toHaveStyleRule('margin-bottom', '4rem');
    });
  });
  describe('Top', () => {
    test('mt_0', () => {
      const component = renderer.create(<Margin mt_0 />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '0');
    });
    test('mt_auto', () => {
      const component = renderer.create(<Margin mt_auto />).toJSON();
      expect(component).toHaveStyleRule('margin-top', 'auto');
    });
    test('mt_xs', () => {
      const component = renderer.create(<Margin mt_xs />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '.25rem');
    });
    test('mt_sm', () => {
      const component = renderer.create(<Margin mt_sm />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '.5rem');
    });
    test('mt_md', () => {
      const component = renderer.create(<Margin mt_md />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '1rem');
    });
    test('mt_lg', () => {
      const component = renderer.create(<Margin mt_lg />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '2rem');
    });
    test('mt_xl', () => {
      const component = renderer.create(<Margin mt_xl />).toJSON();
      expect(component).toHaveStyleRule('margin-top', '4rem');
    });
  });
  describe('Bottom', () => {
    test('mb_0', () => {
      const component = renderer.create(<Margin mb_0 />).toJSON();
      expect(component).toHaveStyleRule('margin-bottom', '0');
    });
    test('mb_auto', () => {
      const component = renderer.create(<Margin mb_auto />).toJSON();
      expect(component).toHaveStyleRule('margin-bottom', 'auto');
    });
    test('mb_xs', () => {
      const component = renderer.create(<Margin mb_xs />).toJSON();
      expect(component).toHaveStyleRule('margin-bottom', '.25rem');
    });
    test('mb_sm', () => {
      const component = renderer.create(<Margin mb_sm />).toJSON();
      expect(component).toHaveStyleRule('margin-bottom', '.5rem');
    });
    test('mb_md', () => {
      const component = renderer.create(<Margin mb_md />).toJSON();
      expect(component).toHaveStyleRule('margin-bottom', '1rem');
    });
    test('mb_lg', () => {
      const component = renderer.create(<Margin mb_lg />).toJSON();
      expect(component).toHaveStyleRule('margin-bottom', '2rem');
    });
    test('mb_xl', () => {
      const component = renderer.create(<Margin mb_xl />).toJSON();
      expect(component).toHaveStyleRule('margin-bottom', '4rem');
    });
  });
  describe('Left', () => {
    test('ml_0', () => {
      const component = renderer.create(<Margin ml_0 />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '0');
    });
    test('ml_auto', () => {
      const component = renderer.create(<Margin ml_auto />).toJSON();
      expect(component).toHaveStyleRule('margin-left', 'auto');
    });
    test('ml_xs', () => {
      const component = renderer.create(<Margin ml_xs />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '.25rem');
    });
    test('ml_sm', () => {
      const component = renderer.create(<Margin ml_sm />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '.5rem');
    });
    test('ml_md', () => {
      const component = renderer.create(<Margin ml_md />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '1rem');
    });
    test('ml_lg', () => {
      const component = renderer.create(<Margin ml_lg />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '2rem');
    });
    test('ml_xl', () => {
      const component = renderer.create(<Margin ml_xl />).toJSON();
      expect(component).toHaveStyleRule('margin-left', '4rem');
    });
  });
  describe('Right', () => {
    test('mr_0', () => {
      const component = renderer.create(<Margin mr_0 />).toJSON();
      expect(component).toHaveStyleRule('margin-right', '0');
    });
    test('mr_auto', () => {
      const component = renderer.create(<Margin mr_auto />).toJSON();
      expect(component).toHaveStyleRule('margin-right', 'auto');
    });
    test('mr_xs', () => {
      const component = renderer.create(<Margin mr_xs />).toJSON();
      expect(component).toHaveStyleRule('margin-right', '.25rem');
    });
    test('mr_sm', () => {
      const component = renderer.create(<Margin mr_sm />).toJSON();
      expect(component).toHaveStyleRule('margin-right', '.5rem');
    });
    test('mr_md', () => {
      const component = renderer.create(<Margin mr_md />).toJSON();
      expect(component).toHaveStyleRule('margin-right', '1rem');
    });
    test('mr_lg', () => {
      const component = renderer.create(<Margin mr_lg />).toJSON();
      expect(component).toHaveStyleRule('margin-right', '2rem');
    });
    test('mr_xl', () => {
      const component = renderer.create(<Margin mr_xl />).toJSON();
      expect(component).toHaveStyleRule('margin-right', '4rem');
    });
  });
});
