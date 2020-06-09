import 'jest-styled-components';
import { Width } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Width', () => {
  describe('Min', () => {
    describe('Screen', () => {
      test('w_min_screen_100', () => {
        const component = renderer.create(<Width w_min_screen_100 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '100vw');
      });
      test('w_min_screen_90', () => {
        const component = renderer.create(<Width w_min_screen_90 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '90vw');
      });
      test('w_min_screen_80', () => {
        const component = renderer.create(<Width w_min_screen_80 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '80vw');
      });
      test('w_min_screen_70', () => {
        const component = renderer.create(<Width w_min_screen_70 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '70vw');
      });
      test('w_min_screen_60', () => {
        const component = renderer.create(<Width w_min_screen_60 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '60vw');
      });
      test('w_min_screen_50', () => {
        const component = renderer.create(<Width w_min_screen_50 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '50vw');
      });
      test('w_min_screen_40', () => {
        const component = renderer.create(<Width w_min_screen_40 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '40vw');
      });
      test('w_min_screen_30', () => {
        const component = renderer.create(<Width w_min_screen_30 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '30vw');
      });
      test('w_min_screen_20', () => {
        const component = renderer.create(<Width w_min_screen_20 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '20vw');
      });
      test('w_min_screen_10', () => {
        const component = renderer.create(<Width w_min_screen_10 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '10vw');
      });
    });
    describe('Sizes', () => {
      test('w_min_0', () => {
        const component = renderer.create(<Width w_min_0 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '0');
      });
      test('w_min_1', () => {
        const component = renderer.create(<Width w_min_1 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '1rem');
      });
      test('w_min_2', () => {
        const component = renderer.create(<Width w_min_2 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '2rem');
      });
      test('w_min_4', () => {
        const component = renderer.create(<Width w_min_4 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '4rem');
      });
      test('w_min_8', () => {
        const component = renderer.create(<Width w_min_8 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '8rem');
      });
      test('w_min_16', () => {
        const component = renderer.create(<Width w_min_16 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '16rem');
      });
      test('w_min_32', () => {
        const component = renderer.create(<Width w_min_32 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '32rem');
      });
      test('w_min_64', () => {
        const component = renderer.create(<Width w_min_64 />).toJSON();
        expect(component).toHaveStyleRule('min-width', '64rem');
      });
    });
    test('w_min_full', () => {
      const component = renderer.create(<Width w_min_full />).toJSON();
      expect(component).toHaveStyleRule('min-width', '100%');
    });
    test('w_min_auto', () => {
      const component = renderer.create(<Width w_min_auto />).toJSON();
      expect(component).toHaveStyleRule('min-width', 'auto');
    });
  });
  describe('Max', () => {
    describe('Screen', () => {
      test('w_max_screen_100', () => {
        const component = renderer.create(<Width w_max_screen_100 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '100vw');
      });
      test('w_max_screen_90', () => {
        const component = renderer.create(<Width w_max_screen_90 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '90vw');
      });
      test('w_max_screen_80', () => {
        const component = renderer.create(<Width w_max_screen_80 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '80vw');
      });
      test('w_max_screen_70', () => {
        const component = renderer.create(<Width w_max_screen_70 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '70vw');
      });
      test('w_max_screen_60', () => {
        const component = renderer.create(<Width w_max_screen_60 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '60vw');
      });
      test('w_max_screen_50', () => {
        const component = renderer.create(<Width w_max_screen_50 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '50vw');
      });
      test('w_max_screen_40', () => {
        const component = renderer.create(<Width w_max_screen_40 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '40vw');
      });
      test('w_max_screen_30', () => {
        const component = renderer.create(<Width w_max_screen_30 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '30vw');
      });
      test('w_max_screen_20', () => {
        const component = renderer.create(<Width w_max_screen_20 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '20vw');
      });
      test('w_max_screen_10', () => {
        const component = renderer.create(<Width w_max_screen_10 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '10vw');
      });
    });
    describe('Sizes', () => {
      test('w_max_0', () => {
        const component = renderer.create(<Width w_max_0 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '0');
      });
      test('w_max_1', () => {
        const component = renderer.create(<Width w_max_1 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '1rem');
      });
      test('w_max_2', () => {
        const component = renderer.create(<Width w_max_2 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '2rem');
      });
      test('w_max_4', () => {
        const component = renderer.create(<Width w_max_4 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '4rem');
      });
      test('w_max_8', () => {
        const component = renderer.create(<Width w_max_8 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '8rem');
      });
      test('w_max_16', () => {
        const component = renderer.create(<Width w_max_16 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '16rem');
      });
      test('w_max_32', () => {
        const component = renderer.create(<Width w_max_32 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '32rem');
      });
      test('w_max_64', () => {
        const component = renderer.create(<Width w_max_64 />).toJSON();
        expect(component).toHaveStyleRule('max-width', '64rem');
      });
    });
    test('w_max_full', () => {
      const component = renderer.create(<Width w_max_full />).toJSON();
      expect(component).toHaveStyleRule('max-width', '100%');
    });
    test('w_max_auto', () => {
      const component = renderer.create(<Width w_max_auto />).toJSON();
      expect(component).toHaveStyleRule('max-width', 'auto');
    });
  });
  describe('Screen', () => {
    test('w_screen_100', () => {
      const component = renderer.create(<Width w_screen_100 />).toJSON();
      expect(component).toHaveStyleRule('width', '100vw');
    });
    test('w_screen_90', () => {
      const component = renderer.create(<Width w_screen_90 />).toJSON();
      expect(component).toHaveStyleRule('width', '90vw');
    });
    test('w_screen_80', () => {
      const component = renderer.create(<Width w_screen_80 />).toJSON();
      expect(component).toHaveStyleRule('width', '80vw');
    });
    test('w_screen_70', () => {
      const component = renderer.create(<Width w_screen_70 />).toJSON();
      expect(component).toHaveStyleRule('width', '70vw');
    });
    test('w_screen_60', () => {
      const component = renderer.create(<Width w_screen_60 />).toJSON();
      expect(component).toHaveStyleRule('width', '60vw');
    });
    test('w_screen_50', () => {
      const component = renderer.create(<Width w_screen_50 />).toJSON();
      expect(component).toHaveStyleRule('width', '50vw');
    });
    test('w_screen_40', () => {
      const component = renderer.create(<Width w_screen_40 />).toJSON();
      expect(component).toHaveStyleRule('width', '40vw');
    });
    test('w_screen_30', () => {
      const component = renderer.create(<Width w_screen_30 />).toJSON();
      expect(component).toHaveStyleRule('width', '30vw');
    });
    test('w_screen_20', () => {
      const component = renderer.create(<Width w_screen_20 />).toJSON();
      expect(component).toHaveStyleRule('width', '20vw');
    });
    test('w_screen_10', () => {
      const component = renderer.create(<Width w_screen_10 />).toJSON();
      expect(component).toHaveStyleRule('width', '10vw');
    });
  });
  describe('Sizes', () => {
    test('w_0', () => {
      const component = renderer.create(<Width w_0 />).toJSON();
      expect(component).toHaveStyleRule('width', '0');
    });
    test('w_1', () => {
      const component = renderer.create(<Width w_1 />).toJSON();
      expect(component).toHaveStyleRule('width', '1rem');
    });
    test('w_2', () => {
      const component = renderer.create(<Width w_2 />).toJSON();
      expect(component).toHaveStyleRule('width', '2rem');
    });
    test('w_4', () => {
      const component = renderer.create(<Width w_4 />).toJSON();
      expect(component).toHaveStyleRule('width', '4rem');
    });
    test('w_8', () => {
      const component = renderer.create(<Width w_8 />).toJSON();
      expect(component).toHaveStyleRule('width', '8rem');
    });
    test('w_16', () => {
      const component = renderer.create(<Width w_16 />).toJSON();
      expect(component).toHaveStyleRule('width', '16rem');
    });
    test('w_32', () => {
      const component = renderer.create(<Width w_32 />).toJSON();
      expect(component).toHaveStyleRule('width', '32rem');
    });
    test('w_64', () => {
      const component = renderer.create(<Width w_64 />).toJSON();
      expect(component).toHaveStyleRule('width', '64rem');
    });
  });
  test('w_full', () => {
    const component = renderer.create(<Width w_full />).toJSON();
    expect(component).toHaveStyleRule('width', '100%');
  });
  test('w_auto', () => {
    const component = renderer.create(<Width w_auto />).toJSON();
    expect(component).toHaveStyleRule('width', 'auto');
  });
});
