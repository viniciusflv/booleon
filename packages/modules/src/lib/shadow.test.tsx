import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { shadow } from './shadow';

const BooleonComponent = booleon.div(shadow);
describe('Shadow', () => {
  describe('around', () => {
    test('sd_1', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_1" sd_1 />,
      );
      expect(getByTestId('sd_1')).toHaveStyle(
        'box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.20);',
      );
    });

    test('sd_2', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_2" sd_2 />,
      );
      expect(getByTestId('sd_2')).toHaveStyle(
        'box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.20);',
      );
    });

    test('sd_3', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_3" sd_3 />,
      );
      expect(getByTestId('sd_3')).toHaveStyle(
        'box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14),0 3px 3px -2px rgba(0,0,0,0.12),0 1px 8px 0 rgba(0,0,0,0.20);',
      );
    });

    test('sd_4', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_4" sd_4 />,
      );
      expect(getByTestId('sd_4')).toHaveStyle(
        'box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.20);',
      );
    });

    test('sd_6', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_6" sd_6 />,
      );
      expect(getByTestId('sd_6')).toHaveStyle(
        'box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.20);',
      );
    });

    test('sd_8', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_8" sd_8 />,
      );
      expect(getByTestId('sd_8')).toHaveStyle(
        'box-shadow: 0 8px 10px  1px rgba(0,0,0,0.14),0 3px 14px  2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.20);',
      );
    });

    test('sd_9', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_9" sd_9 />,
      );
      expect(getByTestId('sd_9')).toHaveStyle(
        'box-shadow: 0 9px 12px 1px rgba(0,0,0,0.14),0 3px 16px 2px rgba(0,0,0,0.12),0 5px 6px -3px rgba(0,0,0,0.20);',
      );
    });

    test('sd_12', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_12" sd_12 />,
      );
      expect(getByTestId('sd_12')).toHaveStyle(
        'box-shadow: 0 12px 17px 2px rgba(0,0,0,0.14),0 5px 22px 4px rgba(0,0,0,0.12),0 7px 8px -4px rgba(0,0,0,0.20);',
      );
    });

    test('sd_16', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_16" sd_16 />,
      );
      expect(getByTestId('sd_16')).toHaveStyle(
        'box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.20);',
      );
    });

    test('sd_24', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sd_24" sd_24 />,
      );
      expect(getByTestId('sd_24')).toHaveStyle(
        'box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.20);',
      );
    });
  });

  describe('inset', () => {
    test('sdi_1', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_1" sdi_1 />,
      );
      expect(getByTestId('sdi_1')).toHaveStyle(
        'box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14) inset,0 2px 1px -1px rgba(0,0,0,0.12) inset,0 1px 3px 0 rgba(0,0,0,0.20) inset;',
      );
    });

    test('sdi_2', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_2" sdi_2 />,
      );
      expect(getByTestId('sdi_2')).toHaveStyle(
        'box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14) inset,0 3px 1px -2px rgba(0,0,0,0.12) inset,0 1px 5px 0 rgba(0,0,0,0.20) inset;',
      );
    });

    test('sdi_3', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_3" sdi_3 />,
      );
      expect(getByTestId('sdi_3')).toHaveStyle(
        'box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14) inset,0 3px 3px -2px rgba(0,0,0,0.12) inset,0 1px 8px 0 rgba(0,0,0,0.20) inset;',
      );
    });

    test('sdi_4', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_4" sdi_4 />,
      );
      expect(getByTestId('sdi_4')).toHaveStyle(
        'box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14) inset,0 1px 10px 0 rgba(0,0,0,0.12) inset,0 2px 4px -1px rgba(0,0,0,0.20) inset;',
      );
    });

    test('sdi_6', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_6" sdi_6 />,
      );
      expect(getByTestId('sdi_6')).toHaveStyle(
        'box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14) inset,0 1px 18px 0 rgba(0,0,0,0.12) inset,0 3px 5px -1px rgba(0,0,0,0.20) inset;',
      );
    });

    test('sdi_8', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_8" sdi_8 />,
      );
      expect(getByTestId('sdi_8')).toHaveStyle(
        'box-shadow: 0 8px 10px  1px rgba(0,0,0,0.14) inset,0 3px 14px  2px rgba(0,0,0,0.12) inset,0 5px 5px -3px rgba(0,0,0,0.20) inset;',
      );
    });

    test('sdi_9', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_9" sdi_9 />,
      );
      expect(getByTestId('sdi_9')).toHaveStyle(
        'box-shadow: 0 9px 12px 1px rgba(0,0,0,0.14) inset,0 3px 16px 2px rgba(0,0,0,0.12) inset,0 5px 6px -3px rgba(0,0,0,0.20) inset;',
      );
    });

    test('sdi_12', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_12" sdi_12 />,
      );
      expect(getByTestId('sdi_12')).toHaveStyle(
        'box-shadow: 0 12px 17px 2px rgba(0,0,0,0.14) inset,0 5px 22px 4px rgba(0,0,0,0.12) inset,0 7px 8px -4px rgba(0,0,0,0.20) inset;',
      );
    });

    test('sdi_16', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_16" sdi_16 />,
      );
      expect(getByTestId('sdi_16')).toHaveStyle(
        'box-shadow: 0 16px 24px 2px rgba(0,0,0,0.14) inset,0 6px 30px 5px rgba(0,0,0,0.12) inset,0 8px 10px -5px rgba(0,0,0,0.20) inset;',
      );
    });

    test('sdi_24', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sdi_24" sdi_24 />,
      );
      expect(getByTestId('sdi_24')).toHaveStyle(
        'box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14) inset,0 9px 46px 8px rgba(0,0,0,0.12) inset,0 11px 15px -7px rgba(0,0,0,0.20) inset;',
      );
    });
  });
});
