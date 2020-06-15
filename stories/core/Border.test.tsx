import 'jest-styled-components';
import { Border } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Border', () => {
  describe('Collapse', () => {
    test('b_collapse', () => {
      const component = renderer.create(<Border b_collapse />).toJSON();
      expect(component).toHaveStyleRule('border-collapse', 'collapse');
    });
    test('b_separate', () => {
      const component = renderer.create(<Border b_separate />).toJSON();
      expect(component).toHaveStyleRule('border-collapse', 'separate');
    });
  });
  describe('Display', () => {
    test('b_none', () => {
      const component = renderer.create(<Border b_none />).toJSON();
      expect(component).toHaveStyleRule('border', 'none');
    });
    test('bx_none', () => {
      const component = renderer.create(<Border bx_none />).toJSON();
      expect(component).toHaveStyleRule('border-right', 'none');
      expect(component).toHaveStyleRule('border-left', 'none');
    });
    test('by_none', () => {
      const component = renderer.create(<Border by_none />).toJSON();
      expect(component).toHaveStyleRule('border-top', 'none');
      expect(component).toHaveStyleRule('border-bottom', 'none');
    });
    test('bt_none', () => {
      const component = renderer.create(<Border bt_none />).toJSON();
      expect(component).toHaveStyleRule('border-top', 'none');
    });
    test('bb_none', () => {
      const component = renderer.create(<Border bb_none />).toJSON();
      expect(component).toHaveStyleRule('border-bottom', 'none');
    });
    test('bl_none', () => {
      const component = renderer.create(<Border bl_none />).toJSON();
      expect(component).toHaveStyleRule('border-left', 'none');
    });
    test('br_none', () => {
      const component = renderer.create(<Border br_none />).toJSON();
      expect(component).toHaveStyleRule('border-right', 'none');
    });
  });
  describe('Style', () => {
    describe('Solid', () => {
      test('b_solid', () => {
        const component = renderer.create(<Border b_solid />).toJSON();
        expect(component).toHaveStyleRule('border-style', 'solid');
      });
      test('bx_solid', () => {
        const component = renderer.create(<Border bx_solid />).toJSON();
        expect(component).toHaveStyleRule('border-right-style', 'solid');
        expect(component).toHaveStyleRule('border-left-style', 'solid');
      });
      test('by_solid', () => {
        const component = renderer.create(<Border by_solid />).toJSON();
        expect(component).toHaveStyleRule('border-top-style', 'solid');
        expect(component).toHaveStyleRule('border-bottom-style', 'solid');
      });
      test('bt_solid', () => {
        const component = renderer.create(<Border bt_solid />).toJSON();
        expect(component).toHaveStyleRule('border-top-style', 'solid');
      });
      test('bb_solid', () => {
        const component = renderer.create(<Border bb_solid />).toJSON();
        expect(component).toHaveStyleRule('border-bottom-style', 'solid');
      });
      test('bl_solid', () => {
        const component = renderer.create(<Border bl_solid />).toJSON();
        expect(component).toHaveStyleRule('border-left-style', 'solid');
      });
      test('br_solid', () => {
        const component = renderer.create(<Border br_solid />).toJSON();
        expect(component).toHaveStyleRule('border-right-style', 'solid');
      });
    });
    describe('Dashed', () => {
      test('b_dashed', () => {
        const component = renderer.create(<Border b_dashed />).toJSON();
        expect(component).toHaveStyleRule('border-style', 'dashed');
      });
      test('bx_dashed', () => {
        const component = renderer.create(<Border bx_dashed />).toJSON();
        expect(component).toHaveStyleRule('border-right-style', 'dashed');
        expect(component).toHaveStyleRule('border-left-style', 'dashed');
      });
      test('by_dashed', () => {
        const component = renderer.create(<Border by_dashed />).toJSON();
        expect(component).toHaveStyleRule('border-top-style', 'dashed');
        expect(component).toHaveStyleRule('border-bottom-style', 'dashed');
      });
      test('bt_dashed', () => {
        const component = renderer.create(<Border bt_dashed />).toJSON();
        expect(component).toHaveStyleRule('border-top-style', 'dashed');
      });
      test('bb_dashed', () => {
        const component = renderer.create(<Border bb_dashed />).toJSON();
        expect(component).toHaveStyleRule('border-bottom-style', 'dashed');
      });
      test('bl_dashed', () => {
        const component = renderer.create(<Border bl_dashed />).toJSON();
        expect(component).toHaveStyleRule('border-left-style', 'dashed');
      });
      test('br_dashed', () => {
        const component = renderer.create(<Border br_dashed />).toJSON();
        expect(component).toHaveStyleRule('border-right-style', 'dashed');
      });
    });
    describe('Dotted', () => {
      test('b_dotted', () => {
        const component = renderer.create(<Border b_dotted />).toJSON();
        expect(component).toHaveStyleRule('border-style', 'dotted');
      });
      test('bx_dotted', () => {
        const component = renderer.create(<Border bx_dotted />).toJSON();
        expect(component).toHaveStyleRule('border-right-style', 'dotted');
        expect(component).toHaveStyleRule('border-left-style', 'dotted');
      });
      test('by_dotted', () => {
        const component = renderer.create(<Border by_dotted />).toJSON();
        expect(component).toHaveStyleRule('border-top-style', 'dotted');
        expect(component).toHaveStyleRule('border-bottom-style', 'dotted');
      });
      test('bt_dotted', () => {
        const component = renderer.create(<Border bt_dotted />).toJSON();
        expect(component).toHaveStyleRule('border-top-style', 'dotted');
      });
      test('bb_dotted', () => {
        const component = renderer.create(<Border bb_dotted />).toJSON();
        expect(component).toHaveStyleRule('border-bottom-style', 'dotted');
      });
      test('bl_dotted', () => {
        const component = renderer.create(<Border bl_dotted />).toJSON();
        expect(component).toHaveStyleRule('border-left-style', 'dotted');
      });
      test('br_dotted', () => {
        const component = renderer.create(<Border br_dotted />).toJSON();
        expect(component).toHaveStyleRule('border-right-style', 'dotted');
      });
    });
    describe('Double', () => {
      test('b_double', () => {
        const component = renderer.create(<Border b_double />).toJSON();
        expect(component).toHaveStyleRule('border-style', 'double');
      });
      test('bx_double', () => {
        const component = renderer.create(<Border bx_double />).toJSON();
        expect(component).toHaveStyleRule('border-right-style', 'double');
        expect(component).toHaveStyleRule('border-left-style', 'double');
      });
      test('by_double', () => {
        const component = renderer.create(<Border by_double />).toJSON();
        expect(component).toHaveStyleRule('border-top-style', 'double');
        expect(component).toHaveStyleRule('border-bottom-style', 'double');
      });
      test('bt_double', () => {
        const component = renderer.create(<Border bt_double />).toJSON();
        expect(component).toHaveStyleRule('border-top-style', 'double');
      });
      test('bb_double', () => {
        const component = renderer.create(<Border bb_double />).toJSON();
        expect(component).toHaveStyleRule('border-bottom-style', 'double');
      });
      test('bl_double', () => {
        const component = renderer.create(<Border bl_double />).toJSON();
        expect(component).toHaveStyleRule('border-left-style', 'double');
      });
      test('br_double', () => {
        const component = renderer.create(<Border br_double />).toJSON();
        expect(component).toHaveStyleRule('border-right-style', 'double');
      });
    });
  });
  describe('Radius', () => {
    describe('Circular', () => {
      test('b_circular', () => {
        const component = renderer.create(<Border b_circular />).toJSON();
        expect(component).toHaveStyleRule('border-radius', '9999px');
      });
      test('bt_circular', () => {
        const component = renderer.create(<Border bt_circular />).toJSON();
        expect(component).toHaveStyleRule('border-top-right-radius', '9999px');
        expect(component).toHaveStyleRule('border-top-left-radius', '9999px');
      });
      test('bb_circular', () => {
        const component = renderer.create(<Border bb_circular />).toJSON();
        expect(component).toHaveStyleRule(
          'border-bottom-right-radius',
          '9999px',
        );
        expect(component).toHaveStyleRule(
          'border-bottom-left-radius',
          '9999px',
        );
      });
      test('bl_circular', () => {
        const component = renderer.create(<Border bl_circular />).toJSON();
        expect(component).toHaveStyleRule(
          'border-bottom-left-radius',
          '9999px',
        );
      });
      test('br_circular', () => {
        const component = renderer.create(<Border br_circular />).toJSON();
        expect(component).toHaveStyleRule('border-top-right-radius', '9999px');
        expect(component).toHaveStyleRule(
          'border-bottom-right-radius',
          '9999px',
        );
      });
      test('btr_circular', () => {
        const component = renderer.create(<Border btr_circular />).toJSON();
        expect(component).toHaveStyleRule('border-top-right-radius', '9999px');
      });
      test('btl_circular', () => {
        const component = renderer.create(<Border btl_circular />).toJSON();
        expect(component).toHaveStyleRule('border-top-left-radius', '9999px');
      });
      test('bbr_circular', () => {
        const component = renderer.create(<Border bbr_circular />).toJSON();
        expect(component).toHaveStyleRule(
          'border-bottom-right-radius',
          '9999px',
        );
      });
      test('bbl_circular', () => {
        const component = renderer.create(<Border bbl_circular />).toJSON();
        expect(component).toHaveStyleRule(
          'border-bottom-left-radius',
          '9999px',
        );
      });
    });
    describe('Rounded', () => {
      test('b_rounded', () => {
        const component = renderer.create(<Border b_rounded />).toJSON();
        expect(component).toHaveStyleRule('border-radius', '2rem');
      });
      test('bt_rounded', () => {
        const component = renderer.create(<Border bt_rounded />).toJSON();
        expect(component).toHaveStyleRule('border-top-right-radius', '2rem');
        expect(component).toHaveStyleRule('border-top-left-radius', '2rem');
      });
      test('bb_rounded', () => {
        const component = renderer.create(<Border bb_rounded />).toJSON();
        expect(component).toHaveStyleRule('border-bottom-right-radius', '2rem');
        expect(component).toHaveStyleRule('border-bottom-left-radius', '2rem');
      });
      test('bl_rounded', () => {
        const component = renderer.create(<Border bl_rounded />).toJSON();
        expect(component).toHaveStyleRule('border-top-left-radius', '2rem');
        expect(component).toHaveStyleRule('border-bottom-left-radius', '2rem');
      });
      test('br_rounded', () => {
        const component = renderer.create(<Border br_rounded />).toJSON();
        expect(component).toHaveStyleRule('border-top-right-radius', '2rem');
        expect(component).toHaveStyleRule('border-bottom-right-radius', '2rem');
      });
      test('btr_rounded', () => {
        const component = renderer.create(<Border btr_rounded />).toJSON();
        expect(component).toHaveStyleRule('border-top-right-radius', '2rem');
      });
      test('btl_rounded', () => {
        const component = renderer.create(<Border btl_rounded />).toJSON();
        expect(component).toHaveStyleRule('border-top-left-radius', '2rem');
      });
      test('bbr_rounded', () => {
        const component = renderer.create(<Border bbr_rounded />).toJSON();
        expect(component).toHaveStyleRule('border-bottom-right-radius', '2rem');
      });
      test('bbl_rounded', () => {
        const component = renderer.create(<Border bbl_rounded />).toJSON();
        expect(component).toHaveStyleRule('border-bottom-left-radius', '2rem');
      });
    });
    describe('Edge', () => {
      test('b_edge', () => {
        const component = renderer.create(<Border b_edge />).toJSON();
        expect(component).toHaveStyleRule('border-radius', '.5rem');
      });
      test('bt_edge', () => {
        const component = renderer.create(<Border bt_edge />).toJSON();
        expect(component).toHaveStyleRule('border-top-right-radius', '.5rem');
        expect(component).toHaveStyleRule('border-top-left-radius', '.5rem');
      });
      test('bb_edge', () => {
        const component = renderer.create(<Border bb_edge />).toJSON();
        expect(component).toHaveStyleRule(
          'border-bottom-right-radius',
          '.5rem',
        );
        expect(component).toHaveStyleRule('border-bottom-left-radius', '.5rem');
      });
      test('bl_edge', () => {
        const component = renderer.create(<Border bl_edge />).toJSON();
        expect(component).toHaveStyleRule('border-top-left-radius', '.5rem');
        expect(component).toHaveStyleRule('border-bottom-left-radius', '.5rem');
      });
      test('br_edge', () => {
        const component = renderer.create(<Border br_edge />).toJSON();
        expect(component).toHaveStyleRule('border-top-right-radius', '.5rem');
        expect(component).toHaveStyleRule(
          'border-bottom-right-radius',
          '.5rem',
        );
      });
      test('btr_edge', () => {
        const component = renderer.create(<Border btr_edge />).toJSON();
        expect(component).toHaveStyleRule('border-top-right-radius', '.5rem');
      });
      test('btl_edge', () => {
        const component = renderer.create(<Border btl_edge />).toJSON();
        expect(component).toHaveStyleRule('border-top-left-radius', '.5rem');
      });
      test('bbr_edge', () => {
        const component = renderer.create(<Border bbr_edge />).toJSON();
        expect(component).toHaveStyleRule(
          'border-bottom-right-radius',
          '.5rem',
        );
      });
      test('bbl_edge', () => {
        const component = renderer.create(<Border bbl_edge />).toJSON();
        expect(component).toHaveStyleRule('border-bottom-left-radius', '.5rem');
      });
    });
  });
  describe('Width', () => {
    describe('Thick', () => {
      test('b_thick', () => {
        const component = renderer.create(<Border b_thick />).toJSON();
        expect(component).toHaveStyleRule('border-width', '.5rem');
      });
      test('bx_thick', () => {
        const component = renderer.create(<Border bx_thick />).toJSON();
        expect(component).toHaveStyleRule('border-right-width', '.5rem');
        expect(component).toHaveStyleRule('order-left-width', '.5rem');
      });
      test('by_thick', () => {
        const component = renderer.create(<Border by_thick />).toJSON();
        expect(component).toHaveStyleRule('border-top-width', '.5rem');
        expect(component).toHaveStyleRule('order-bottom-width', '.5rem');
      });
      test('bt_thick', () => {
        const component = renderer.create(<Border bt_thick />).toJSON();
        expect(component).toHaveStyleRule('border-top-width', '.5rem');
      });
      test('bb_thick', () => {
        const component = renderer.create(<Border bb_thick />).toJSON();
        expect(component).toHaveStyleRule('order-bottom-width', '.5rem');
      });
      test('bl_thick', () => {
        const component = renderer.create(<Border bl_thick />).toJSON();
        expect(component).toHaveStyleRule('order-left-width', '.5rem');
      });
      test('br_thick', () => {
        const component = renderer.create(<Border br_thick />).toJSON();
        expect(component).toHaveStyleRule('border-right-width', '.5rem');
      });
    });
    describe('Thin', () => {
      test('b_thin', () => {
        const component = renderer.create(<Border b_thin />).toJSON();
        expect(component).toHaveStyleRule('border-width', '.05rem');
      });
      test('bx_thin', () => {
        const component = renderer.create(<Border bx_thin />).toJSON();
        expect(component).toHaveStyleRule('border-right-width', '.05rem');
        expect(component).toHaveStyleRule('order-left-width', '.05rem');
      });
      test('by_thin', () => {
        const component = renderer.create(<Border by_thin />).toJSON();
        expect(component).toHaveStyleRule('border-top-width', '.05rem');
        expect(component).toHaveStyleRule('order-bottom-width', '.05rem');
      });
      test('bt_thin', () => {
        const component = renderer.create(<Border bt_thin />).toJSON();
        expect(component).toHaveStyleRule('border-top-width', '.05rem');
      });
      test('bb_thin', () => {
        const component = renderer.create(<Border bb_thin />).toJSON();
        expect(component).toHaveStyleRule('order-bottom-width', '.05rem');
      });
      test('bl_thin', () => {
        const component = renderer.create(<Border bl_thin />).toJSON();
        expect(component).toHaveStyleRule('order-left-width', '.05rem');
      });
      test('br_thin', () => {
        const component = renderer.create(<Border br_thin />).toJSON();
        expect(component).toHaveStyleRule('border-right-width', '.05rem');
      });
    });
  });
  describe('Color', () => {
    test('bc', () => {
      const component = renderer.create(<Border bc_000 />).toJSON();
      expect(component).toHaveStyleRule('border-color', '#000');
    });

    test('bxc', () => {
      const component = renderer.create(<Border bxc_0f0 />).toJSON();
      expect(component).toHaveStyleRule('border-right-color', '#0f0');
      expect(component).toHaveStyleRule('border-left-color', '#0f0');
    });

    test('byc', () => {
      const component = renderer.create(<Border byc_000 />).toJSON();
      expect(component).toHaveStyleRule('border-top-color', '#000');
      expect(component).toHaveStyleRule('border-bottom-color', '#000');
    });

    test('btc', () => {
      const component = renderer.create(<Border btc_000 />).toJSON();
      expect(component).toHaveStyleRule('border-top-color', '#000');
    });

    test('bbc', () => {
      const component = renderer.create(<Border bbc_000 />).toJSON();
      expect(component).toHaveStyleRule('border-bottom-color', '#000');
    });

    test('blc', () => {
      const component = renderer.create(<Border blc_000 />).toJSON();
      expect(component).toHaveStyleRule('border-left-color', '#000');
    });

    test('brc', () => {
      const component = renderer.create(<Border brc_000 />).toJSON();
      expect(component).toHaveStyleRule('border-right-color', '#000');
    });
  });
});
