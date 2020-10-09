import { render } from '@testing-library/react';
import React from 'react';

import { View } from '../../packages/core/src';
import '@testing-library/jest-dom';

describe('Border', () => {
  describe('Color', () => {
    test('bc_HEX', () => {
      const { getByTestId } = render(<View.div data-testid="bc_HEX" bc_fff />);
      expect(getByTestId('bc_HEX')).toHaveStyle('border-color: #fff;');
    });

    test('btc_HEX', () => {
      const { getByTestId } = render(
        <View.div data-testid="btc_HEX" btc_fff />,
      );
      expect(getByTestId('btc_HEX')).toHaveStyle('border-top-color: #fff;');
    });

    test('bbc_HEX', () => {
      const { getByTestId } = render(
        <View.div data-testid="bbc_HEX" bbc_fff />,
      );
      expect(getByTestId('bbc_HEX')).toHaveStyle('border-bottom-color: #fff;');
    });

    test('blc_HEX', () => {
      const { getByTestId } = render(
        <View.div data-testid="blc_HEX" blc_fff />,
      );
      expect(getByTestId('blc_HEX')).toHaveStyle('border-left-color: #fff;');
    });

    test('brc_HEX', () => {
      const { getByTestId } = render(
        <View.div data-testid="brc_HEX" brc_fff />,
      );
      expect(getByTestId('brc_HEX')).toHaveStyle('border-right-color: #fff;');
    });

    test('bxc_HEX', () => {
      const { getByTestId } = render(
        <View.div data-testid="bxc_HEX" bxc_fff />,
      );
      expect(getByTestId('bxc_HEX')).toHaveStyle('border-right-color: #fff;');
      expect(getByTestId('bxc_HEX')).toHaveStyle('border-left-color: #fff;');
    });

    test('byc_HEX', () => {
      const { getByTestId } = render(
        <View.div data-testid="byc_HEX" byc_fff />,
      );
      expect(getByTestId('byc_HEX')).toHaveStyle('border-top-color: #fff;');
      expect(getByTestId('byc_HEX')).toHaveStyle('border-bottom-color: #fff;');
    });
  });

  describe('Style', () => {
    test('bs_dashed', () => {
      const { getByTestId } = render(
        <View.div data-testid="bs_dashed" bs_dashed />,
      );
      expect(getByTestId('bs_dashed')).toHaveStyle('border-style: dashed;');
    });

    test('bts_dotted', () => {
      const { getByTestId } = render(
        <View.div data-testid="bts_dotted" bts_dotted />,
      );
      expect(getByTestId('bts_dotted')).toHaveStyle(
        'border-top-style: dotted;',
      );
    });

    test('bbs_dotted', () => {
      const { getByTestId } = render(
        <View.div data-testid="bbs_dotted" bbs_dotted />,
      );
      expect(getByTestId('bbs_dotted')).toHaveStyle(
        'border-bottom-style: dotted;',
      );
    });

    test('bls_dotted', () => {
      const { getByTestId } = render(
        <View.div data-testid="bls_dotted" bls_dotted />,
      );
      expect(getByTestId('bls_dotted')).toHaveStyle(
        'border-left-style: dotted;',
      );
    });

    test('brs_dotted', () => {
      const { getByTestId } = render(
        <View.div data-testid="brs_dotted" brs_dotted />,
      );
      expect(getByTestId('brs_dotted')).toHaveStyle(
        'border-right-style: dotted;',
      );
    });

    test('bxs_dotted', () => {
      const { getByTestId } = render(
        <View.div data-testid="bxs_dotted" bxs_dotted />,
      );
      expect(getByTestId('bxs_dotted')).toHaveStyle(
        'border-right-style: dotted;',
      );
      expect(getByTestId('bxs_dotted')).toHaveStyle(
        'border-left-style: dotted;',
      );
    });

    test('bys_dotted', () => {
      const { getByTestId } = render(
        <View.div data-testid="bys_dotted" bys_dotted />,
      );
      expect(getByTestId('bys_dotted')).toHaveStyle(
        'border-top-style: dotted;',
      );
      expect(getByTestId('bys_dotted')).toHaveStyle(
        'border-bottom-style: dotted;',
      );
    });
  });

  describe('Width', () => {
    test('bw_10', () => {
      const { getByTestId } = render(<View.div data-testid="bw_10" bw_10 />);
      expect(getByTestId('bw_10')).toHaveStyle('border-width: 0.625rem;');
    });

    test('btw_10', () => {
      const { getByTestId } = render(<View.div data-testid="btw_10" btw_10 />);
      expect(getByTestId('btw_10')).toHaveStyle('border-top-width: 0.625rem;');
    });

    test('bbw_10', () => {
      const { getByTestId } = render(<View.div data-testid="bbw_10" bbw_10 />);
      expect(getByTestId('bbw_10')).toHaveStyle(
        'border-bottom-width: 0.625rem;',
      );
    });

    test('blw_10', () => {
      const { getByTestId } = render(<View.div data-testid="blw_10" blw_10 />);
      expect(getByTestId('blw_10')).toHaveStyle('border-left-width: 0.625rem;');
    });

    test('brw_10', () => {
      const { getByTestId } = render(<View.div data-testid="brw_10" brw_10 />);
      expect(getByTestId('brw_10')).toHaveStyle(
        'border-right-width: 0.625rem;',
      );
    });

    test('bxw_10', () => {
      const { getByTestId } = render(<View.div data-testid="bxw_10" bxw_10 />);
      expect(getByTestId('bxw_10')).toHaveStyle(
        'border-right-width: 0.625rem;',
      );
      expect(getByTestId('bxw_10')).toHaveStyle('border-left-width: 0.625rem;');
    });

    test('byw_10', () => {
      const { getByTestId } = render(<View.div data-testid="byw_10" byw_10 />);
      expect(getByTestId('byw_10')).toHaveStyle('border-top-width: 0.625rem;');
      expect(getByTestId('byw_10')).toHaveStyle(
        'border-bottom-width: 0.625rem;',
      );
    });
  });

  test('b_collapse', () => {
    const { getByTestId } = render(
      <View.div data-testid="b_collapse" b_collapse />,
    );
    expect(getByTestId('b_collapse')).toHaveStyle('border-collapse: collapse;');
  });

  test('b_separate', () => {
    const { getByTestId } = render(
      <View.div data-testid="b_separate" b_separate />,
    );
    expect(getByTestId('b_separate')).toHaveStyle('border-collapse: separate;');
  });

  describe('None', () => {
    test('b_none', () => {
      const { getByTestId } = render(
        <View.button data-testid="b_none" b_none />,
      );
      expect(getByTestId('b_none')).toHaveStyle('border: none;');
    });

    test('bt_none', () => {
      const { getByTestId } = render(
        <View.button data-testid="bt_none" bt_none />,
      );
      expect(getByTestId('bt_none')).toHaveStyle('border-top: none;');
    });

    test('bb_none', () => {
      const { getByTestId } = render(
        <View.button data-testid="bb_none" bb_none />,
      );
      expect(getByTestId('bb_none')).toHaveStyle('border-bottom: none;');
    });

    test('bl_none', () => {
      const { getByTestId } = render(
        <View.button data-testid="bl_none" bl_none />,
      );
      expect(getByTestId('bl_none')).toHaveStyle('border-left: none;');
    });

    test('br_none', () => {
      const { getByTestId } = render(
        <View.button data-testid="br_none" br_none />,
      );
      expect(getByTestId('br_none')).toHaveStyle('border-right: none;');
    });

    test('bx_none', () => {
      const { getByTestId } = render(
        <View.button data-testid="bx_none" bx_none />,
      );
      expect(getByTestId('bx_none')).toHaveStyle('border-left: none;');
      expect(getByTestId('bx_none')).toHaveStyle('border-right: none;');
    });

    test('by_none', () => {
      const { getByTestId } = render(
        <View.button data-testid="by_none" by_none />,
      );
      expect(getByTestId('by_none')).toHaveStyle('border-top: none;');
      expect(getByTestId('by_none')).toHaveStyle('border-bottom: none;');
    });
  });

  describe('Circular', () => {
    test('b_circular', () => {
      const { getByTestId } = render(
        <View.div data-testid="b_circular" b_circular />,
      );
      expect(getByTestId('b_circular')).toHaveStyle('border-radius: 100px;');
    });

    test('btr_circular', () => {
      const { getByTestId } = render(
        <View.div data-testid="btr_circular" btr_circular />,
      );
      expect(getByTestId('btr_circular')).toHaveStyle(
        'border-top-right-radius: 100px;',
      );
    });

    test('btl_circular', () => {
      const { getByTestId } = render(
        <View.div data-testid="btl_circular" btl_circular />,
      );
      expect(getByTestId('btl_circular')).toHaveStyle(
        'border-top-left-radius: 100px;',
      );
    });

    test('bbr_circular', () => {
      const { getByTestId } = render(
        <View.div data-testid="bbr_circular" bbr_circular />,
      );
      expect(getByTestId('bbr_circular')).toHaveStyle(
        'border-bottom-right-radius: 100px;',
      );
    });

    test('bbl_circular', () => {
      const { getByTestId } = render(
        <View.div data-testid="bbl_circular" bbl_circular />,
      );
      expect(getByTestId('bbl_circular')).toHaveStyle(
        'border-bottom-left-radius: 100px;',
      );
    });

    test('br_circular', () => {
      const { getByTestId } = render(
        <View.div data-testid="br_circular" br_circular />,
      );
      expect(getByTestId('br_circular')).toHaveStyle(
        'border-top-right-radius: 100px;',
      );
      expect(getByTestId('br_circular')).toHaveStyle(
        'border-bottom-right-radius: 100px;',
      );
    });

    test('bl_circular', () => {
      const { getByTestId } = render(
        <View.div data-testid="bl_circular" bl_circular />,
      );
      expect(getByTestId('bl_circular')).toHaveStyle(
        'border-top-left-radius: 100px;',
      );
      expect(getByTestId('bl_circular')).toHaveStyle(
        'border-bottom-left-radius: 100px;',
      );
    });

    test('bb_circular', () => {
      const { getByTestId } = render(
        <View.div data-testid="bb_circular" bb_circular />,
      );
      expect(getByTestId('bb_circular')).toHaveStyle(
        'border-bottom-right-radius: 100px;',
      );
      expect(getByTestId('bb_circular')).toHaveStyle(
        'border-bottom-left-radius: 100px;',
      );
    });

    test('bt_circular', () => {
      const { getByTestId } = render(
        <View.div data-testid="bt_circular" bt_circular />,
      );
      expect(getByTestId('bt_circular')).toHaveStyle(
        'border-top-right-radius: 100px;',
      );
      expect(getByTestId('bt_circular')).toHaveStyle(
        'border-top-left-radius: 100px;',
      );
    });
  });

  describe('Rounded', () => {
    test('b_rounded', () => {
      const { getByTestId } = render(
        <View.div data-testid="b_rounded" b_rounded />,
      );
      expect(getByTestId('b_rounded')).toHaveStyle('border-radius: 5rem;');
    });

    test('btr_rounded', () => {
      const { getByTestId } = render(
        <View.div data-testid="btr_rounded" btr_rounded />,
      );
      expect(getByTestId('btr_rounded')).toHaveStyle(
        'border-top-right-radius: 5rem;',
      );
    });

    test('btl_rounded', () => {
      const { getByTestId } = render(
        <View.div data-testid="btl_rounded" btl_rounded />,
      );
      expect(getByTestId('btl_rounded')).toHaveStyle(
        'border-top-left-radius: 5rem;',
      );
    });

    test('bbr_rounded', () => {
      const { getByTestId } = render(
        <View.div data-testid="bbr_rounded" bbr_rounded />,
      );
      expect(getByTestId('bbr_rounded')).toHaveStyle(
        'border-bottom-right-radius: 5rem;',
      );
    });

    test('bbl_rounded', () => {
      const { getByTestId } = render(
        <View.div data-testid="bbl_rounded" bbl_rounded />,
      );
      expect(getByTestId('bbl_rounded')).toHaveStyle(
        'border-bottom-left-radius: 5rem;',
      );
    });

    test('br_rounded', () => {
      const { getByTestId } = render(
        <View.div data-testid="br_rounded" br_rounded />,
      );
      expect(getByTestId('br_rounded')).toHaveStyle(
        'border-top-right-radius: 5rem;',
      );
      expect(getByTestId('br_rounded')).toHaveStyle(
        'border-bottom-right-radius: 5rem;',
      );
    });

    test('bl_rounded', () => {
      const { getByTestId } = render(
        <View.div data-testid="bl_rounded" bl_rounded />,
      );
      expect(getByTestId('bl_rounded')).toHaveStyle(
        'border-top-left-radius: 5rem;',
      );
      expect(getByTestId('bl_rounded')).toHaveStyle(
        'border-bottom-left-radius: 5rem;',
      );
    });

    test('bb_rounded', () => {
      const { getByTestId } = render(
        <View.div data-testid="bb_rounded" bb_rounded />,
      );
      expect(getByTestId('bb_rounded')).toHaveStyle(
        'border-bottom-right-radius: 5rem;',
      );
      expect(getByTestId('bb_rounded')).toHaveStyle(
        'border-bottom-left-radius: 5rem;',
      );
    });

    test('bt_rounded', () => {
      const { getByTestId } = render(
        <View.div data-testid="bt_rounded" bt_rounded />,
      );
      expect(getByTestId('bt_rounded')).toHaveStyle(
        'border-top-right-radius: 5rem;',
      );
      expect(getByTestId('bt_rounded')).toHaveStyle(
        'border-top-left-radius: 5rem;',
      );
    });
  });

  describe('Edge', () => {
    test('b_edge', () => {
      const { getByTestId } = render(<View.div data-testid="b_edge" b_edge />);
      expect(getByTestId('b_edge')).toHaveStyle('border-radius: .5rem;');
    });

    test('btr_edge', () => {
      const { getByTestId } = render(
        <View.div data-testid="btr_edge" btr_edge />,
      );
      expect(getByTestId('btr_edge')).toHaveStyle(
        'border-top-right-radius: .5rem;',
      );
    });

    test('btl_edge', () => {
      const { getByTestId } = render(
        <View.div data-testid="btl_edge" btl_edge />,
      );
      expect(getByTestId('btl_edge')).toHaveStyle(
        'border-top-left-radius: .5rem;',
      );
    });

    test('bbr_edge', () => {
      const { getByTestId } = render(
        <View.div data-testid="bbr_edge" bbr_edge />,
      );
      expect(getByTestId('bbr_edge')).toHaveStyle(
        'border-bottom-right-radius: .5rem;',
      );
    });

    test('bbl_edge', () => {
      const { getByTestId } = render(
        <View.div data-testid="bbl_edge" bbl_edge />,
      );
      expect(getByTestId('bbl_edge')).toHaveStyle(
        'border-bottom-left-radius: .5rem;',
      );
    });

    test('br_edge', () => {
      const { getByTestId } = render(
        <View.div data-testid="br_edge" br_edge />,
      );
      expect(getByTestId('br_edge')).toHaveStyle(
        'border-top-right-radius: .5rem;',
      );
      expect(getByTestId('br_edge')).toHaveStyle(
        'border-bottom-right-radius: .5rem;',
      );
    });

    test('bl_edge', () => {
      const { getByTestId } = render(
        <View.div data-testid="bl_edge" bl_edge />,
      );
      expect(getByTestId('bl_edge')).toHaveStyle(
        'border-top-left-radius: .5rem;',
      );
      expect(getByTestId('bl_edge')).toHaveStyle(
        'border-bottom-left-radius: .5rem;',
      );
    });

    test('bb_edge', () => {
      const { getByTestId } = render(
        <View.div data-testid="bb_edge" bb_edge />,
      );
      expect(getByTestId('bb_edge')).toHaveStyle(
        'border-bottom-right-radius: .5rem;',
      );
      expect(getByTestId('bb_edge')).toHaveStyle(
        'border-bottom-left-radius: .5rem;',
      );
    });

    test('bt_edge', () => {
      const { getByTestId } = render(
        <View.div data-testid="bt_edge" bt_edge />,
      );
      expect(getByTestId('bt_edge')).toHaveStyle(
        'border-top-right-radius: .5rem;',
      );
      expect(getByTestId('bt_edge')).toHaveStyle(
        'border-top-left-radius: .5rem;',
      );
    });
  });
});
