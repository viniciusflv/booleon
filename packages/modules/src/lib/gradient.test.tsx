import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { gradient } from './gradient';

const BooleonComponent = booleon.div(gradient);
describe('gradient', () => {
  describe('linear gradient', () => {
    test('gdx_linear_f00', () => {
      const { getByTestId } = render(
        <BooleonComponent
          data-testid="gdx_linear_f00"
          bg_img="/a"
          gdx_linear_f00
        />,
      );
      expect(getByTestId('gdx_linear_f00')).toHaveStyle(
        'background-image: linear-gradient(to right,#f00,transparent,#f00);',
      );
    });

    test('gdy_linear_f00', () => {
      const { getByTestId } = render(
        <BooleonComponent
          data-testid="gdy_linear_f00"
          bg_img="/a"
          gdy_linear_f00
        />,
      );
      expect(getByTestId('gdy_linear_f00')).toHaveStyle(
        'background-image: linear-gradient(to top,#f00,transparent,#f00);',
      );
    });

    test('gdt_linear_f00', () => {
      const { getByTestId } = render(
        <BooleonComponent
          data-testid="gdt_linear_f00"
          bg_img="/a"
          gdt_linear_f00
        />,
      );
      expect(getByTestId('gdt_linear_f00')).toHaveStyle(
        'background-image: linear-gradient(to top,transparent,#f00);',
      );
    });

    test('gdb_linear_f00', () => {
      const { getByTestId } = render(
        <BooleonComponent
          data-testid="gdb_linear_f00"
          bg_img="/a"
          gdb_linear_f00
        />,
      );
      expect(getByTestId('gdb_linear_f00')).toHaveStyle(
        'background-image: linear-gradient(to bottom,transparent,#f00);',
      );
    });

    test('gdl_linear_f00', () => {
      const { getByTestId } = render(
        <BooleonComponent
          data-testid="gdl_linear_f00"
          bg_img="/a"
          gdl_linear_f00
        />,
      );
      expect(getByTestId('gdl_linear_f00')).toHaveStyle(
        'background-image: linear-gradient(to left,transparent,#f00);',
      );
    });

    test('gdr_linear_f00', () => {
      const { getByTestId } = render(
        <BooleonComponent
          data-testid="gdl_linear_f00"
          bg_img="/a"
          gdr_linear_f00
        />,
      );
      expect(getByTestId('gdl_linear_f00')).toHaveStyle(
        'background-image: linear-gradient(to right,transparent,#f00);',
      );
    });
  });
});
