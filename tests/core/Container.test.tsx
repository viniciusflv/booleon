import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Container', () => {
  describe('Visibility', () => {
    test('hidden', () => {
      const component = renderer.create(<View hidden />).toJSON();
      expect(component).toHaveStyleRule('display', 'none');
    });

    test('visible', () => {
      const component = renderer.create(<View visible />).toJSON();
      expect(component).toHaveStyleRule('visibility', 'visible');
    });

    test('invisible', () => {
      const component = renderer.create(<View invisible />).toJSON();
      expect(component).toHaveStyleRule('visibility', 'hidden');
    });
  });

  describe('Z-Index', () => {
    test('z_max', () => {
      const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
      const component = renderer.create(<View z_max />).toJSON();
      expect(component).toHaveStyleRule('z-index', MAX_SAFE_INTEGER.toString());
    });

    test('z_neg', () => {
      const component = renderer.create(<View z_neg />).toJSON();
      expect(component).toHaveStyleRule('z-index', '-1');
    });

    test('z_auto', () => {
      const component = renderer.create(<View z_auto />).toJSON();
      expect(component).toHaveStyleRule('z-index', 'auto');
    });

    test('z_0', () => {
      const component = renderer.create(<View z_0 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '0');
    });

    test('z_10', () => {
      const component = renderer.create(<View z_10 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '10');
    });

    test('z_20', () => {
      const component = renderer.create(<View z_20 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '20');
    });

    test('z_30', () => {
      const component = renderer.create(<View z_30 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '30');
    });

    test('z_40', () => {
      const component = renderer.create(<View z_40 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '40');
    });

    test('z_50', () => {
      const component = renderer.create(<View z_50 />).toJSON();
      expect(component).toHaveStyleRule('z-index', '50');
    });
  });

  describe('Overflow', () => {
    describe('Auto', () => {
      test('s_auto', () => {
        const component = renderer.create(<View sc_auto />).toJSON();
        expect(component).toHaveStyleRule('overflow', 'auto');
      });

      test('sy_auto', () => {
        const component = renderer.create(<View scy_auto />).toJSON();
        expect(component).toHaveStyleRule('overflow-y', 'auto');
      });

      test('sx_auto', () => {
        const component = renderer.create(<View scx_auto />).toJSON();
        expect(component).toHaveStyleRule('overflow-x', 'auto');
      });
    });

    describe('Visible', () => {
      test('s_visible', () => {
        const component = renderer.create(<View sc_visible />).toJSON();
        expect(component).toHaveStyleRule('overflow', 'visible');
      });

      test('sy_visible', () => {
        const component = renderer.create(<View scy_visible />).toJSON();
        expect(component).toHaveStyleRule('overflow-y', 'visible');
      });

      test('sx_visible', () => {
        const component = renderer.create(<View scx_visible />).toJSON();
        expect(component).toHaveStyleRule('overflow-x', 'visible');
      });
    });

    describe('Hidden', () => {
      test('s_hidden', () => {
        const component = renderer.create(<View sc_hidden />).toJSON();
        expect(component).toHaveStyleRule('overflow', 'hidden');
      });

      test('sy_hidden', () => {
        const component = renderer.create(<View scy_hidden />).toJSON();
        expect(component).toHaveStyleRule('overflow-y', 'hidden');
      });

      test('sx_hidden', () => {
        const component = renderer.create(<View scx_hidden />).toJSON();
        expect(component).toHaveStyleRule('overflow-x', 'hidden');
      });
    });
  });

  describe('Position', () => {
    test('fixed', () => {
      const component = renderer.create(<View fixed />).toJSON();
      expect(component).toHaveStyleRule('position', 'fixed');
    });

    test('absolute', () => {
      const component = renderer.create(<View absolute />).toJSON();
      expect(component).toHaveStyleRule('position', 'absolute');
    });

    test('relative', () => {
      const component = renderer.create(<View relative />).toJSON();
      expect(component).toHaveStyleRule('position', 'relative');
    });

    test('sticky', () => {
      const component = renderer.create(<View sticky />).toJSON();
      expect(component).toHaveStyleRule('position', 'sticky');
    });
  });

  describe('Placement', () => {
    test('top', () => {
      const component = renderer.create(<View top />).toJSON();
      expect(component).toHaveStyleRule('top', '0');
    });

    test('top_neg', () => {
      const component = renderer.create(<View top_neg />).toJSON();
      expect(component).toHaveStyleRule('top', '-100%');
    });

    test('right', () => {
      const component = renderer.create(<View right />).toJSON();
      expect(component).toHaveStyleRule('right', '0');
    });

    test('right_neg', () => {
      const component = renderer.create(<View right_neg />).toJSON();
      expect(component).toHaveStyleRule('right', '-100%');
    });

    test('bottom', () => {
      const component = renderer.create(<View bottom />).toJSON();
      expect(component).toHaveStyleRule('bottom', '0');
    });

    test('bottom_neg', () => {
      const component = renderer.create(<View bottom_neg />).toJSON();
      expect(component).toHaveStyleRule('bottom', '-100%');
    });

    test('left', () => {
      const component = renderer.create(<View left />).toJSON();
      expect(component).toHaveStyleRule('left', '0');
    });

    test('left_neg', () => {
      const component = renderer.create(<View left_neg />).toJSON();
      expect(component).toHaveStyleRule('left', '-100%');
    });

    test('cover', () => {
      const component = renderer.create(<View cover />).toJSON();
      expect(component).toHaveStyleRule('top', '0');
      expect(component).toHaveStyleRule('right', '0');
      expect(component).toHaveStyleRule('bottom', '0');
      expect(component).toHaveStyleRule('left', '0');
    });
  });

  describe('Fit', () => {
    test('fit_contain', () => {
      const component = renderer.create(<View fit_contain />).toJSON();
      expect(component).toHaveStyleRule('object-fit', 'contain');
    });

    test('fit_cover', () => {
      const component = renderer.create(<View fit_cover />).toJSON();
      expect(component).toHaveStyleRule('object-fit', 'cover');
    });

    test('fit_fill', () => {
      const component = renderer.create(<View fit_fill />).toJSON();
      expect(component).toHaveStyleRule('object-fit', 'fill');
    });

    test('fit_none', () => {
      const component = renderer.create(<View fit_none />).toJSON();
      expect(component).toHaveStyleRule('object-fit', 'none');
    });
  });
});
