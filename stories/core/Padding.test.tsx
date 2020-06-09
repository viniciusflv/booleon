import 'jest-styled-components';
import { Padding } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Padding', () => {
  describe('XY', () => {
    test('p_0', () => {
      const component = renderer.create(<Padding p_0 />).toJSON();
      expect(component).toHaveStyleRule('padding', '0');
    });
    test('p_0', () => {
      const component = renderer.create(<Padding p_0 />).toJSON();
      expect(component).toHaveStyleRule('padding', '0');
    });
    test('px_ato', () => {
      const component = renderer.create(<Padding p_auto />).toJSON();
      expect(component).toHaveStyleRule('padding', 'auto');
    });
    test('p_xs', () => {
      const component = renderer.create(<Padding p_xs />).toJSON();
      expect(component).toHaveStyleRule('padding', '.25rem');
    });
    test('p_sm', () => {
      const component = renderer.create(<Padding p_sm />).toJSON();
      expect(component).toHaveStyleRule('padding', '.5rem');
    });
    test('p_md', () => {
      const component = renderer.create(<Padding p_md />).toJSON();
      expect(component).toHaveStyleRule('padding', '1rem');
    });
    test('p_lg', () => {
      const component = renderer.create(<Padding p_lg />).toJSON();
      expect(component).toHaveStyleRule('padding', '2rem');
    });
    test('p_xl', () => {
      const component = renderer.create(<Padding p_xl />).toJSON();
      expect(component).toHaveStyleRule('padding', '4rem');
    });
  });
  describe('X', () => {
    test('px_0', () => {
      const component = renderer.create(<Padding px_0 />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '0');
      expect(component).toHaveStyleRule('padding-right', '0');
    });
    test('px_0', () => {
      const component = renderer.create(<Padding px_0 />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '0');
      expect(component).toHaveStyleRule('padding-right', '0');
    });
    test('px_auto', () => {
      const component = renderer.create(<Padding px_auto />).toJSON();
      expect(component).toHaveStyleRule('padding-left', 'auto');
      expect(component).toHaveStyleRule('padding-right', 'auto');
    });
    test('px_xs', () => {
      const component = renderer.create(<Padding px_xs />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '.25rem');
      expect(component).toHaveStyleRule('padding-right', '.25rem');
    });
    test('px_sm', () => {
      const component = renderer.create(<Padding px_sm />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '.5rem');
      expect(component).toHaveStyleRule('padding-right', '.5rem');
    });
    test('px_md', () => {
      const component = renderer.create(<Padding px_md />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '1rem');
      expect(component).toHaveStyleRule('padding-right', '1rem');
    });
    test('px_lg', () => {
      const component = renderer.create(<Padding px_lg />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '2rem');
      expect(component).toHaveStyleRule('padding-right', '2rem');
    });
    test('px_xl', () => {
      const component = renderer.create(<Padding px_xl />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '4rem');
      expect(component).toHaveStyleRule('padding-right', '4rem');
    });
  });
  describe('Y', () => {
    test('py_0', () => {
      const component = renderer.create(<Padding py_0 />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '0');
      expect(component).toHaveStyleRule('padding-bottom', '0');
    });
    test('py_auto', () => {
      const component = renderer.create(<Padding py_auto />).toJSON();
      expect(component).toHaveStyleRule('padding-top', 'auto');
      expect(component).toHaveStyleRule('padding-bottom', 'auto');
    });
    test('py_xs', () => {
      const component = renderer.create(<Padding py_xs />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '.25rem');
      expect(component).toHaveStyleRule('padding-bottom', '.25rem');
    });
    test('py_sm', () => {
      const component = renderer.create(<Padding py_sm />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '.5rem');
      expect(component).toHaveStyleRule('padding-bottom', '.5rem');
    });
    test('py_md', () => {
      const component = renderer.create(<Padding py_md />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '1rem');
      expect(component).toHaveStyleRule('padding-bottom', '1rem');
    });
    test('py_lg', () => {
      const component = renderer.create(<Padding py_lg />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '2rem');
      expect(component).toHaveStyleRule('padding-bottom', '2rem');
    });
    test('py_xl', () => {
      const component = renderer.create(<Padding py_xl />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '4rem');
      expect(component).toHaveStyleRule('padding-bottom', '4rem');
    });
  });
  describe('Top', () => {
    test('pt_0', () => {
      const component = renderer.create(<Padding pt_0 />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '0');
    });
    test('pt_auto', () => {
      const component = renderer.create(<Padding pt_auto />).toJSON();
      expect(component).toHaveStyleRule('padding-top', 'auto');
    });
    test('pt_xs', () => {
      const component = renderer.create(<Padding pt_xs />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '.25rem');
    });
    test('pt_sm', () => {
      const component = renderer.create(<Padding pt_sm />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '.5rem');
    });
    test('pt_md', () => {
      const component = renderer.create(<Padding pt_md />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '1rem');
    });
    test('pt_lg', () => {
      const component = renderer.create(<Padding pt_lg />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '2rem');
    });
    test('pt_xl', () => {
      const component = renderer.create(<Padding pt_xl />).toJSON();
      expect(component).toHaveStyleRule('padding-top', '4rem');
    });
  });
  describe('Bottom', () => {
    test('pb_0', () => {
      const component = renderer.create(<Padding pb_0 />).toJSON();
      expect(component).toHaveStyleRule('padding-bottom', '0');
    });
    test('pb_auto', () => {
      const component = renderer.create(<Padding pb_auto />).toJSON();
      expect(component).toHaveStyleRule('padding-bottom', 'auto');
    });
    test('pb_xs', () => {
      const component = renderer.create(<Padding pb_xs />).toJSON();
      expect(component).toHaveStyleRule('padding-bottom', '.25rem');
    });
    test('pb_sm', () => {
      const component = renderer.create(<Padding pb_sm />).toJSON();
      expect(component).toHaveStyleRule('padding-bottom', '.5rem');
    });
    test('pb_md', () => {
      const component = renderer.create(<Padding pb_md />).toJSON();
      expect(component).toHaveStyleRule('padding-bottom', '1rem');
    });
    test('pb_lg', () => {
      const component = renderer.create(<Padding pb_lg />).toJSON();
      expect(component).toHaveStyleRule('padding-bottom', '2rem');
    });
    test('pb_xl', () => {
      const component = renderer.create(<Padding pb_xl />).toJSON();
      expect(component).toHaveStyleRule('padding-bottom', '4rem');
    });
  });
  describe('Left', () => {
    test('pl_0', () => {
      const component = renderer.create(<Padding pl_0 />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '0');
    });
    test('pl_auto', () => {
      const component = renderer.create(<Padding pl_auto />).toJSON();
      expect(component).toHaveStyleRule('padding-left', 'auto');
    });
    test('pl_xs', () => {
      const component = renderer.create(<Padding pl_xs />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '.25rem');
    });
    test('pl_sm', () => {
      const component = renderer.create(<Padding pl_sm />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '.5rem');
    });
    test('pl_md', () => {
      const component = renderer.create(<Padding pl_md />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '1rem');
    });
    test('pl_lg', () => {
      const component = renderer.create(<Padding pl_lg />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '2rem');
    });
    test('pl_xl', () => {
      const component = renderer.create(<Padding pl_xl />).toJSON();
      expect(component).toHaveStyleRule('padding-left', '4rem');
    });
  });
  describe('Right', () => {
    test('pr_0', () => {
      const component = renderer.create(<Padding pr_0 />).toJSON();
      expect(component).toHaveStyleRule('padding-right', '0');
    });
    test('pr_auto', () => {
      const component = renderer.create(<Padding pr_auto />).toJSON();
      expect(component).toHaveStyleRule('padding-right', 'auto');
    });
    test('pr_xs', () => {
      const component = renderer.create(<Padding pr_xs />).toJSON();
      expect(component).toHaveStyleRule('padding-right', '.25rem');
    });
    test('pr_sm', () => {
      const component = renderer.create(<Padding pr_sm />).toJSON();
      expect(component).toHaveStyleRule('padding-right', '.5rem');
    });
    test('pr_md', () => {
      const component = renderer.create(<Padding pr_md />).toJSON();
      expect(component).toHaveStyleRule('padding-right', '1rem');
    });
    test('pr_lg', () => {
      const component = renderer.create(<Padding pr_lg />).toJSON();
      expect(component).toHaveStyleRule('padding-right', '2rem');
    });
    test('pr_xl', () => {
      const component = renderer.create(<Padding pr_xl />).toJSON();
      expect(component).toHaveStyleRule('padding-right', '4rem');
    });
  });
});
