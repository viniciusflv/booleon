import 'jest-styled-components';
import { View } from '../../packages/core/src/core';
import React from 'react';
import renderer from 'react-test-renderer';

describe('View', () => {
  test('snap', () => {
    const component = renderer.create(<View w_8 h_8 bg_000 bxc_000 />).toJSON();
    expect(component).toHaveStyleRule('width', '8rem');
  });

  describe('Display', () => {
    test('flex', () => {
      const component = renderer.create(<View flex />).toJSON();
      expect(component).toHaveStyleRule('display', 'flex');
    });

    test('grid', () => {
      const component = renderer.create(<View grid />).toJSON();
      expect(component).toHaveStyleRule('display', 'grid');
    });

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

    test('display', () => {
      const component = renderer.create(<View hidden flex grid />).toJSON();
      expect(component).toHaveStyleRule('display', 'none');
    });
  });

  describe('Grid', () => {
    test('cols', () => {
      const component = renderer.create(<View cols_2_1fr_3_auto />).toJSON();
      expect(component).toHaveStyleRule(
        'grid-template-columns',
        'repeat(2,1fr) repeat(3,auto)',
      );
    });

    test('rows', () => {
      const component = renderer.create(<View rows_3_1fr_4_auto />).toJSON();
      expect(component).toHaveStyleRule(
        'grid-template-rows',
        'repeat(3,1fr) repeat(4,auto)',
      );
    });

    test('area', () => {
      const component = renderer.create(<View area_FOOTER />).toJSON();
      expect(component).toHaveStyleRule('grid-area', 'FOOTER');
    });

    test('areas', () => {
      const areas = '"HEADER""MAIN""FOOTER"';
      const component = renderer.create(<View areas={areas} />).toJSON();
      expect(component).toHaveStyleRule('grid-template-areas', areas);
    });
  });

  describe('Flex', () => {
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
});
