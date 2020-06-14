import 'jest-styled-components';
import { Container } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Container', () => {
  describe('Z-Index', () => {
    test('z_max', () => {
      const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
      const component = renderer.create(<Container z_max />).toJSON();
      expect(component).toHaveStyleRule('z-index', MAX_SAFE_INTEGER.toString());
    });

    test('z_neg', () => {
      const component = renderer.create(<Container z_neg />).toJSON();
      expect(component).toHaveStyleRule('z-index', '-1');
    });

    test('z_auto', () => {
      const component = renderer.create(<Container z_auto />).toJSON();
      expect(component).toHaveStyleRule('z-index', 'auto');
    });

    test('z_0', () => {
      const component = renderer.create(<Container z_0 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '0');
    });

    test('z_10', () => {
      const component = renderer.create(<Container z_10 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '10');
    });

    test('z_20', () => {
      const component = renderer.create(<Container z_20 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '20');
    });

    test('z_30', () => {
      const component = renderer.create(<Container z_30 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '30');
    });

    test('z_40', () => {
      const component = renderer.create(<Container z_40 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '40');
    });

    test('z_50', () => {
      const component = renderer.create(<Container z_50 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '50');
    });
  });

  describe('Overflow', () => {
    describe('Auto', () => {
      test('s_auto', () => {
        const component = renderer.create(<Container s_auto />).toJSON();
        expect(component).toHaveStyleRule('overflow', 'auto');
      });

      test('sy_auto', () => {
        const component = renderer.create(<Container sy_auto />).toJSON();
        expect(component).toHaveStyleRule('overflow-y', 'auto');
      });

      test('sx_auto', () => {
        const component = renderer.create(<Container sx_auto />).toJSON();
        expect(component).toHaveStyleRule('overflow-x', 'auto');
      });
    });

    describe('Visible', () => {
      test('s_visible', () => {
        const component = renderer.create(<Container s_visible />).toJSON();
        expect(component).toHaveStyleRule('overflow', 'visible');
      });

      test('sy_visible', () => {
        const component = renderer.create(<Container sy_visible />).toJSON();
        expect(component).toHaveStyleRule('overflow-y', 'visible');
      });

      test('sx_visible', () => {
        const component = renderer.create(<Container sx_visible />).toJSON();
        expect(component).toHaveStyleRule('overflow-x', 'visible');
      });
    });

    describe('Hidden', () => {
      test('s_hidden', () => {
        const component = renderer.create(<Container s_hidden />).toJSON();
        expect(component).toHaveStyleRule('overflow', 'hidden');
      });

      test('sy_hidden', () => {
        const component = renderer.create(<Container sy_hidden />).toJSON();
        expect(component).toHaveStyleRule('overflow-y', 'hidden');
      });

      test('sx_hidden', () => {
        const component = renderer.create(<Container sx_hidden />).toJSON();
        expect(component).toHaveStyleRule('overflow-x', 'hidden');
      });
    });
  });

  describe('Position', () => {
    test('fixed', () => {
      const component = renderer.create(<Container fixed />).toJSON();
      expect(component).toHaveStyleRule('position', 'fixed');
    });

    test('absolute', () => {
      const component = renderer.create(<Container absolute />).toJSON();
      expect(component).toHaveStyleRule('position', 'absolute');
    });

    test('relative', () => {
      const component = renderer.create(<Container relative />).toJSON();
      expect(component).toHaveStyleRule('position', 'relative');
    });

    test('sticky', () => {
      const component = renderer.create(<Container sticky />).toJSON();
      expect(component).toHaveStyleRule('position', 'sticky');
    });
  });

  describe('Placement', () => {
    test('top', () => {
      const component = renderer.create(<Container top />).toJSON();
      expect(component).toHaveStyleRule('top', '0');
    });

    test('right', () => {
      const component = renderer.create(<Container right />).toJSON();
      expect(component).toHaveStyleRule('right', '0');
    });

    test('bottom', () => {
      const component = renderer.create(<Container bottom />).toJSON();
      expect(component).toHaveStyleRule('bottom', '0');
    });

    test('left', () => {
      const component = renderer.create(<Container left />).toJSON();
      expect(component).toHaveStyleRule('left', '0');
    });

    test('cover', () => {
      const component = renderer.create(<Container cover />).toJSON();
      expect(component).toHaveStyleRule('top', '0');
      expect(component).toHaveStyleRule('right', '0');
      expect(component).toHaveStyleRule('bottom', '0');
      expect(component).toHaveStyleRule('left', '0');
    });
  });
});
