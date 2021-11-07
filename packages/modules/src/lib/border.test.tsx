import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { border } from './border';

const BooleonComponent = booleon.div(border);
describe('Border', () => {
  describe('Combine', () => {
    test('bd_1px_solid_0_0_0_80', () => {
      const { getByTestId } = render(
        <BooleonComponent
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
        <BooleonComponent
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
        <BooleonComponent
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
        <BooleonComponent
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
        <BooleonComponent
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
        <BooleonComponent
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
        <BooleonComponent
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
        <BooleonComponent data-testid="bd_color_fff" bd_color_fff />,
      );
      expect(getByTestId('bd_color_fff')).toHaveStyle('border-color: #fff;');
    });

    test('bdt_color_HEX', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdt_color_HEX" bdt_color_fff />,
      );
      expect(getByTestId('bdt_color_HEX')).toHaveStyle(
        'border-top-color: #fff;',
      );
    });

    test('bdb_color_HEX', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdb_color_HEX" bdb_color_fff />,
      );
      expect(getByTestId('bdb_color_HEX')).toHaveStyle(
        'border-bottom-color: #fff;',
      );
    });

    test('bdl_color_HEX', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdl_color_HEX" bdl_color_fff />,
      );
      expect(getByTestId('bdl_color_HEX')).toHaveStyle(
        'border-left-color: #fff;',
      );
    });

    test('bdr_color_HEX', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdr_color_HEX" bdr_color_fff />,
      );
      expect(getByTestId('bdr_color_HEX')).toHaveStyle(
        'border-right-color: #fff;',
      );
    });

    test('bdx_color_HEX', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdx_color_HEX" bdx_color_fff />,
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
        <BooleonComponent data-testid="bdy_color_HEX" bdy_color_fff />,
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
        <BooleonComponent data-testid="bd_style_dashed" bd_style_dashed />,
      );
      expect(getByTestId('bd_style_dashed')).toHaveStyle(
        'border-style: dashed;',
      );
    });

    test('bdt_style_dotted', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdt_style_dotted" bdt_style_dotted />,
      );
      expect(getByTestId('bdt_style_dotted')).toHaveStyle(
        'border-top-style: dotted;',
      );
    });

    test('bdb_style_dotted', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdb_style_dotted" bdb_style_dotted />,
      );
      expect(getByTestId('bdb_style_dotted')).toHaveStyle(
        'border-bottom-style: dotted;',
      );
    });

    test('bdl_style_dotted', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdl_style_dotted" bdl_style_dotted />,
      );
      expect(getByTestId('bdl_style_dotted')).toHaveStyle(
        'border-left-style: dotted;',
      );
    });

    test('bdr_style_dotted', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdr_style_dotted" bdr_style_dotted />,
      );
      expect(getByTestId('bdr_style_dotted')).toHaveStyle(
        'border-right-style: dotted;',
      );
    });

    test('bdx_style_dotted', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdx_style_dotted" bdx_style_dotted />,
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
        <BooleonComponent data-testid="bdy_style_dotted" bdy_style_dotted />,
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
        <BooleonComponent data-testid="bd_width_10px" bd_width_10px />,
      );
      expect(getByTestId('bd_width_10px')).toHaveStyle('border-width: 10px;');
    });

    test('bdt_width_10px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdt_width_10px" bdt_width_10px />,
      );
      expect(getByTestId('bdt_width_10px')).toHaveStyle(
        'border-top-width: 10px;',
      );
    });

    test('bdb_width_10px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdb_width_10px" bdb_width_10px />,
      );
      expect(getByTestId('bdb_width_10px')).toHaveStyle(
        'border-bottom-width: 10px;',
      );
    });

    test('bdl_width_10px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdl_width_10px" bdl_width_10px />,
      );
      expect(getByTestId('bdl_width_10px')).toHaveStyle(
        'border-left-width: 10px;',
      );
    });

    test('bdr_width_10px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdr_width_10px" bdr_width_10px />,
      );
      expect(getByTestId('bdr_width_10px')).toHaveStyle(
        'border-right-width: 10px;',
      );
    });

    test('bdx_width_10px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdx_width_10px" bdx_width_10px />,
      );
      expect(getByTestId('bdx_width_10px')).toHaveStyle(
        'border-right-width: 10px;',
      );
      expect(getByTestId('bdx_width_10px')).toHaveStyle(
        'border-left-width: 10px;',
      );
    });

    test('bdy_width_10px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdy_width_10px" bdy_width_10px />,
      );
      expect(getByTestId('bdy_width_10px')).toHaveStyle(
        'border-top-width: 10px;',
      );
      expect(getByTestId('bdy_width_10px')).toHaveStyle(
        'border-bottom-width: 10px;',
      );
    });
  });

  describe('Collapse', () => {
    test('bd_collapse', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bd_collapse" bd_collapse />,
      );
      expect(getByTestId('bd_collapse')).toHaveStyle(
        'border-collapse: collapse;',
      );
    });

    test('bd_separate', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bd_separate" bd_separate />,
      );
      expect(getByTestId('bd_separate')).toHaveStyle(
        'border-collapse: separate;',
      );
    });
  });

  describe('None', () => {
    test('bd_none', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bd_none" bd_none />,
      );
      expect(getByTestId('bd_none')).toHaveStyle('border: none;');
    });

    test('bdt_none', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdt_none" bdt_none />,
      );
      expect(getByTestId('bdt_none')).toHaveStyle('border-top: none;');
    });

    test('bdb_none', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdb_none" bdb_none />,
      );
      expect(getByTestId('bdb_none')).toHaveStyle('border-bottom: none;');
    });

    test('bdl_none', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdl_none" bdl_none />,
      );
      expect(getByTestId('bdl_none')).toHaveStyle('border-left: none;');
    });

    test('bdr_none', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdr_none" bdr_none />,
      );
      expect(getByTestId('bdr_none')).toHaveStyle('border-right: none;');
    });

    test('bdx_none', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdx_none" bdx_none />,
      );
      expect(getByTestId('bdx_none')).toHaveStyle('border-left: none;');
      expect(getByTestId('bdx_none')).toHaveStyle('border-right: none;');
    });

    test('bdy_none', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdy_none" bdy_none />,
      );
      expect(getByTestId('bdy_none')).toHaveStyle('border-top: none;');
      expect(getByTestId('bdy_none')).toHaveStyle('border-bottom: none;');
    });
  });

  describe('Radius', () => {
    test('bd_radius_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bd_radius_100$" bd_radius_100$ />,
      );
      expect(getByTestId('bd_radius_100$')).toHaveStyle('border-radius: 100%;');
    });

    test('bdtr_radius_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdtr_radius_100$" bdtr_radius_100$ />,
      );
      expect(getByTestId('bdtr_radius_100$')).toHaveStyle(
        'border-top-right-radius: 100%;',
      );
    });

    test('bdtl_radius_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdtl_radius_100$" bdtl_radius_100$ />,
      );
      expect(getByTestId('bdtl_radius_100$')).toHaveStyle(
        'border-top-left-radius: 100%;',
      );
    });

    test('bdbr_radius_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdbr_radius_100$" bdbr_radius_100$ />,
      );
      expect(getByTestId('bdbr_radius_100$')).toHaveStyle(
        'border-bottom-right-radius: 100%;',
      );
    });

    test('bdbl_radius_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdbl_radius_100$" bdbl_radius_100$ />,
      );
      expect(getByTestId('bdbl_radius_100$')).toHaveStyle(
        'border-bottom-left-radius: 100%;',
      );
    });

    test('bdr_radius_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="bdr_radius_100$" bdr_radius_100$ />,
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
        <BooleonComponent data-testid="bdl_radius_100$" bdl_radius_100$ />,
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
        <BooleonComponent data-testid="bdb_radius_100$" bdb_radius_100$ />,
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
        <BooleonComponent data-testid="bdt_radius_100$" bdt_radius_100$ />,
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
