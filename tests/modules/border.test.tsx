import React from 'react';

import { render } from '@testing-library/react';

import { border } from '../../packages/modules/src/lib/border';
import { booleon } from '../../packages/react/src';
import '@testing-library/jest-dom';

const BorderComponent = booleon.div(border);
describe('Border', () => {
  describe('Combine', () => {
    test('bd_1px_solid_0_0_0_80', () => {
      const { getByTestId } = render(
        <BorderComponent
          data-testid="bd_1px_solid_0_0_0_80"
          bd_1px_solid_0_0_0_80
        />,
      );
      expect(getByTestId('bd_1px_solid_0_0_0_80')).toHaveStyle(
        'border: 1px solid rgba(0,0,0,0.8);',
      );
    });

    test('bdt_1px_solid_0_0_0_80', () => {
      const { getByTestId } = render(
        <BorderComponent
          data-testid="bdt_1px_solid_0_0_0_80"
          bdt_1px_solid_0_0_0_80
        />,
      );
      expect(getByTestId('bdt_1px_solid_0_0_0_80')).toHaveStyle(
        'border-top: 1px solid rgba(0,0,0,0.8);',
      );
    });

    test('bdb_1px_solid_0_0_0_80', () => {
      const { getByTestId } = render(
        <BorderComponent
          data-testid="bdb_1px_solid_0_0_0_80"
          bdb_1px_solid_0_0_0_80
        />,
      );
      expect(getByTestId('bdb_1px_solid_0_0_0_80')).toHaveStyle(
        'border-bottom: 1px solid rgba(0,0,0,0.8);',
      );
    });

    test('bdl_1px_solid_0_0_0_80', () => {
      const { getByTestId } = render(
        <BorderComponent
          data-testid="bdl_1px_solid_0_0_0_80"
          bdl_1px_solid_0_0_0_80
        />,
      );
      expect(getByTestId('bdl_1px_solid_0_0_0_80')).toHaveStyle(
        'border-left: 1px solid rgba(0,0,0,0.8);',
      );
    });

    test('bdr_1px_solid_0_0_0_80', () => {
      const { getByTestId } = render(
        <BorderComponent
          data-testid="bdr_1px_solid_0_0_0_80"
          bdr_1px_solid_0_0_0_80
        />,
      );
      expect(getByTestId('bdr_1px_solid_0_0_0_80')).toHaveStyle(
        'border-right: 1px solid rgba(0,0,0,0.8);',
      );
    });

    test('bdx_1px_solid_0_0_0_80', () => {
      const { getByTestId } = render(
        <BorderComponent
          data-testid="bdx_1px_solid_0_0_0_80"
          bdx_1px_solid_0_0_0_80
        />,
      );
      expect(getByTestId('bdx_1px_solid_0_0_0_80')).toHaveStyle(
        'border-left: 1px solid rgba(0,0,0,0.8);',
      );
      expect(getByTestId('bdx_1px_solid_0_0_0_80')).toHaveStyle(
        'border-right: 1px solid rgba(0,0,0,0.8);',
      );
    });

    test('bdy_1px_solid_0_0_0_80', () => {
      const { getByTestId } = render(
        <BorderComponent
          data-testid="bdy_1px_solid_0_0_0_80"
          bdy_1px_solid_0_0_0_80
        />,
      );
      expect(getByTestId('bdy_1px_solid_0_0_0_80')).toHaveStyle(
        'border-top: 1px solid rgba(0,0,0,0.8);',
      );
      expect(getByTestId('bdy_1px_solid_0_0_0_80')).toHaveStyle(
        'border-bottom: 1px solid rgba(0,0,0,0.8);',
      );
    });
  });

  describe('Color', () => {
    test('bd_color_fff', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bd_color_fff" bd_color_fff />,
      );
      expect(getByTestId('bd_color_fff')).toHaveStyle('border-color: #fff;');
    });

    test('bdt_color_HEX', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdt_color_HEX" bdt_color_fff />,
      );
      expect(getByTestId('bdt_color_HEX')).toHaveStyle(
        'border-top-color: #fff;',
      );
    });

    test('bdb_color_HEX', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdb_color_HEX" bdb_color_fff />,
      );
      expect(getByTestId('bdb_color_HEX')).toHaveStyle(
        'border-bottom-color: #fff;',
      );
    });

    test('bdl_color_HEX', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdl_color_HEX" bdl_color_fff />,
      );
      expect(getByTestId('bdl_color_HEX')).toHaveStyle(
        'border-left-color: #fff;',
      );
    });

    test('bdr_color_HEX', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdr_color_HEX" bdr_color_fff />,
      );
      expect(getByTestId('bdr_color_HEX')).toHaveStyle(
        'border-right-color: #fff;',
      );
    });

    test('bdx_color_HEX', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdx_color_HEX" bdx_color_fff />,
      );
      expect(getByTestId('bdx_color_HEX')).toHaveStyle(
        'border-right-color: #fff;',
      );
      expect(getByTestId('bdx_color_HEX')).toHaveStyle(
        'border-left-color: #fff;',
      );
    });

    test('bdy_color_HEX', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdy_color_HEX" bdy_color_fff />,
      );
      expect(getByTestId('bdy_color_HEX')).toHaveStyle(
        'border-top-color: #fff;',
      );
      expect(getByTestId('bdy_color_HEX')).toHaveStyle(
        'border-bottom-color: #fff;',
      );
    });
  });

  describe('Style', () => {
    test('bd_style_dashed', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bd_style_dashed" bd_style_dashed />,
      );
      expect(getByTestId('bd_style_dashed')).toHaveStyle(
        'border-style: dashed;',
      );
    });

    test('bdt_style_dotted', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdt_style_dotted" bdt_style_dotted />,
      );
      expect(getByTestId('bdt_style_dotted')).toHaveStyle(
        'border-top-style: dotted;',
      );
    });

    test('bdb_style_dotted', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdb_style_dotted" bdb_style_dotted />,
      );
      expect(getByTestId('bdb_style_dotted')).toHaveStyle(
        'border-bottom-style: dotted;',
      );
    });

    test('bdl_style_dotted', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdl_style_dotted" bdl_style_dotted />,
      );
      expect(getByTestId('bdl_style_dotted')).toHaveStyle(
        'border-left-style: dotted;',
      );
    });

    test('bdr_style_dotted', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdr_style_dotted" bdr_style_dotted />,
      );
      expect(getByTestId('bdr_style_dotted')).toHaveStyle(
        'border-right-style: dotted;',
      );
    });

    test('bdx_style_dotted', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdx_style_dotted" bdx_style_dotted />,
      );
      expect(getByTestId('bdx_style_dotted')).toHaveStyle(
        'border-right-style: dotted;',
      );
      expect(getByTestId('bdx_style_dotted')).toHaveStyle(
        'border-left-style: dotted;',
      );
    });

    test('bdy_style_dotted', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdy_style_dotted" bdy_style_dotted />,
      );
      expect(getByTestId('bdy_style_dotted')).toHaveStyle(
        'border-top-style: dotted;',
      );
      expect(getByTestId('bdy_style_dotted')).toHaveStyle(
        'border-bottom-style: dotted;',
      );
    });
  });

  describe('Width', () => {
    test('bd_width_10px', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bd_width_10px" bd_width_10px />,
      );
      expect(getByTestId('bd_width_10px')).toHaveStyle('border-width: 10px;');
    });

    test('bdt_width_10', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdt_width_10" bdt_width_10 />,
      );
      expect(getByTestId('bdt_width_10')).toHaveStyle(
        'border-top-width: 0.625rem;',
      );
    });

    test('bdb_width_10', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdb_width_10" bdb_width_10 />,
      );
      expect(getByTestId('bdb_width_10')).toHaveStyle(
        'border-bottom-width: 0.625rem;',
      );
    });

    test('bdl_width_10', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdl_width_10" bdl_width_10 />,
      );
      expect(getByTestId('bdl_width_10')).toHaveStyle(
        'border-left-width: 0.625rem;',
      );
    });

    test('bdr_width_10', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdr_width_10" bdr_width_10 />,
      );
      expect(getByTestId('bdr_width_10')).toHaveStyle(
        'border-right-width: 0.625rem;',
      );
    });

    test('bdx_width_10', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdx_width_10" bdx_width_10 />,
      );
      expect(getByTestId('bdx_width_10')).toHaveStyle(
        'border-right-width: 0.625rem;',
      );
      expect(getByTestId('bdx_width_10')).toHaveStyle(
        'border-left-width: 0.625rem;',
      );
    });

    test('bdy_width_10', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdy_width_10" bdy_width_10 />,
      );
      expect(getByTestId('bdy_width_10')).toHaveStyle(
        'border-top-width: 0.625rem;',
      );
      expect(getByTestId('bdy_width_10')).toHaveStyle(
        'border-bottom-width: 0.625rem;',
      );
    });
  });

  describe('Collapse', () => {
    test('bd_collapse', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bd_collapse" bd_collapse />,
      );
      expect(getByTestId('bd_collapse')).toHaveStyle(
        'border-collapse: collapse;',
      );
    });

    test('bd_separate', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bd_separate" bd_separate />,
      );
      expect(getByTestId('bd_separate')).toHaveStyle(
        'border-collapse: separate;',
      );
    });
  });

  describe('None', () => {
    test('bd_none', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bd_none" bd_none />,
      );
      expect(getByTestId('bd_none')).toHaveStyle('border: none;');
    });

    test('bt_none', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bt_none" bt_none />,
      );
      expect(getByTestId('bt_none')).toHaveStyle('border-top: none;');
    });

    test('bbd_none', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bbd_none" bbd_none />,
      );
      expect(getByTestId('bbd_none')).toHaveStyle('border-bottom: none;');
    });

    test('bl_none', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bl_none" bl_none />,
      );
      expect(getByTestId('bl_none')).toHaveStyle('border-left: none;');
    });

    test('br_none', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="br_none" br_none />,
      );
      expect(getByTestId('br_none')).toHaveStyle('border-right: none;');
    });

    test('bx_none', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bx_none" bx_none />,
      );
      expect(getByTestId('bx_none')).toHaveStyle('border-left: none;');
      expect(getByTestId('bx_none')).toHaveStyle('border-right: none;');
    });

    test('by_none', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="by_none" by_none />,
      );
      expect(getByTestId('by_none')).toHaveStyle('border-top: none;');
      expect(getByTestId('by_none')).toHaveStyle('border-bottom: none;');
    });
  });

  describe('Radius', () => {
    test('bd_radius_100$', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bd_radius_100$" bd_radius_100$ />,
      );
      expect(getByTestId('bd_radius_100$')).toHaveStyle('border-radius: 100%;');
    });

    test('bdtr_radius_100$', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdtr_radius_100$" bdtr_radius_100$ />,
      );
      expect(getByTestId('bdtr_radius_100$')).toHaveStyle(
        'border-top-right-radius: 100%;',
      );
    });

    test('bdtl_radius_100$', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdtl_radius_100$" bdtl_radius_100$ />,
      );
      expect(getByTestId('bdtl_radius_100$')).toHaveStyle(
        'border-top-left-radius: 100%;',
      );
    });

    test('bdbr_radius_100$', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdbr_radius_100$" bdbr_radius_100$ />,
      );
      expect(getByTestId('bdbr_radius_100$')).toHaveStyle(
        'border-bottom-right-radius: 100%;',
      );
    });

    test('bdbl_radius_100$', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdbl_radius_100$" bdbl_radius_100$ />,
      );
      expect(getByTestId('bdbl_radius_100$')).toHaveStyle(
        'border-bottom-left-radius: 100%;',
      );
    });

    test('bdr_radius_100$', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdr_radius_100$" bdr_radius_100$ />,
      );
      expect(getByTestId('bdr_radius_100$')).toHaveStyle(
        'border-top-right-radius: 100%;',
      );
      expect(getByTestId('bdr_radius_100$')).toHaveStyle(
        'border-bottom-right-radius: 100%;',
      );
    });

    test('bdl_radius_100$', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdl_radius_100$" bdl_radius_100$ />,
      );
      expect(getByTestId('bdl_radius_100$')).toHaveStyle(
        'border-top-left-radius: 100%;',
      );
      expect(getByTestId('bdl_radius_100$')).toHaveStyle(
        'border-bottom-left-radius: 100%;',
      );
    });

    test('bdb_radius_100$', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdb_radius_100$" bdb_radius_100$ />,
      );
      expect(getByTestId('bdb_radius_100$')).toHaveStyle(
        'border-bottom-right-radius: 100%;',
      );
      expect(getByTestId('bdb_radius_100$')).toHaveStyle(
        'border-bottom-left-radius: 100%;',
      );
    });

    test('bdt_radius_100$', () => {
      const { getByTestId } = render(
        <BorderComponent data-testid="bdt_radius_100$" bdt_radius_100$ />,
      );
      expect(getByTestId('bdt_radius_100$')).toHaveStyle(
        'border-top-right-radius: 100%;',
      );
      expect(getByTestId('bdt_radius_100$')).toHaveStyle(
        'border-top-left-radius: 100%;',
      );
    });
  });
});
