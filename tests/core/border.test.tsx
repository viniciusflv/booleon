import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { View } from '../../packages/core/src';

describe('Border', () => {
  describe('Color', () => {
    test('bc_HEX', () => {
      const { getByTestId } = render(<View.div data-testid="bc_HEX" bc_fff />);
      expect(getByTestId('bc_HEX')).toHaveStyle('border-color: #fff;');
    });
  
    test('btc_HEX', () => {
      const { getByTestId } = render(<View.div data-testid="btc_HEX" btc_fff />);
      expect(getByTestId('btc_HEX')).toHaveStyle('border-top-color: #fff;');
    });
  
    test('bbc_HEX', () => {
      const { getByTestId } = render(<View.div data-testid="bbc_HEX" bbc_fff />);
      expect(getByTestId('bbc_HEX')).toHaveStyle('border-bottom-color: #fff;');
    });
  
    test('blc_HEX', () => {
      const { getByTestId } = render(<View.div data-testid="blc_HEX" blc_fff />);
      expect(getByTestId('blc_HEX')).toHaveStyle('border-left-color: #fff;');
    });
  
    test('brc_HEX', () => {
      const { getByTestId } = render(<View.div data-testid="brc_HEX" brc_fff />);
      expect(getByTestId('brc_HEX')).toHaveStyle('border-right-color: #fff;');
    });
  
    test('bxc_HEX', () => {
      const { getByTestId } = render(<View.div data-testid="bxc_HEX" bxc_fff />);
      expect(getByTestId('bxc_HEX')).toHaveStyle('border-right-color: #fff;');
      expect(getByTestId('bxc_HEX')).toHaveStyle('border-left-color: #fff;');
    });
  
    test('byc_HEX', () => {
      const { getByTestId } = render(<View.div data-testid="byc_HEX" byc_fff />);
      expect(getByTestId('byc_HEX')).toHaveStyle('border-top-color: #fff;');
      expect(getByTestId('byc_HEX')).toHaveStyle('border-bottom-color: #fff;');
    });
  });

  test('b_collapse', () => {
    const { getByTestId } = render(<View.div data-testid="b_collapse" b_collapse />);
    expect(getByTestId('b_collapse')).toHaveStyle('border-collapse: collapse;');
  });

  test('b_separate', () => {
    const { getByTestId } = render(<View.div data-testid="b_separate" b_separate />);
    expect(getByTestId('b_separate')).toHaveStyle('border-collapse: separate;');
  });

  describe('None', () => {
    test('b_none', () => {
      const { getByTestId } = render(<View.button data-testid="b_none" b_none />);
      expect(getByTestId('b_none')).toHaveStyle('border: none;');
    });

    test('bt_none', () => {
      const { getByTestId } = render(<View.button data-testid="bt_none" bt_none />);
      expect(getByTestId('bt_none')).toHaveStyle('border-top: none;');
    });

    test('bb_none', () => {
      const { getByTestId } = render(<View.button data-testid="bb_none" bb_none />);
      expect(getByTestId('bb_none')).toHaveStyle('border-bottom: none;');
    });

    test('by_none', () => {
      const { getByTestId } = render(<View.button data-testid="by_none" by_none />);
      expect(getByTestId('by_none')).toHaveStyle('border-top: none;');
      expect(getByTestId('by_none')).toHaveStyle('border-bottom: none;');
    });
  })


  describe('Style', () => {
    test('b_solid', () => {
      const { getByTestId } = render(<View.div data-testid="b_solid" b_solid />);
      expect(getByTestId('b_solid')).toHaveStyle('border-style: solid;');
    });
  
    test('b_dashed', () => {
      const { getByTestId } = render(<View.div data-testid="b_dashed" b_dashed />);
      expect(getByTestId('b_dashed')).toHaveStyle('border-style: dashed;');
    });
  
    test('b_dotted', () => {
      const { getByTestId } = render(<View.div data-testid="b_dotted" b_dotted />);
      expect(getByTestId('b_dotted')).toHaveStyle('border-style: dotted;');
    });
  
    test('b_double', () => {
      const { getByTestId } = render(<View.div data-testid="b_double" b_double />);
      expect(getByTestId('b_double')).toHaveStyle('border-style: double;');
    });
  });

  describe('Radius', () => {
    test('b_circular', () => {
      const { getByTestId } = render(<View.div data-testid="b_circular" b_circular />);
      expect(getByTestId('b_circular')).toHaveStyle('border-radius: 100px;');
    });
  
    test('b_rounded', () => {
      const { getByTestId } = render(<View.div data-testid="b_rounded" b_rounded />);
      expect(getByTestId('b_rounded')).toHaveStyle('border-radius: 5rem;');
    });
  
    test('b_edge', () => {
      const { getByTestId } = render(<View.div data-testid="b_edge" b_edge />);
      expect(getByTestId('b_edge')).toHaveStyle('border-radius: .5rem;');
    });
  });
});
