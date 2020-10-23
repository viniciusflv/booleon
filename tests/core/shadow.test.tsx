import { render } from '@testing-library/react';
import React from 'react';

import { View } from '../../packages/base/src';
import '@testing-library/jest-dom';

describe('Shadow', () => {
  test('sd_1', () => {
    const { getByTestId } = render(<View.div data-testid="sd_1" sd_1 />);
    expect(getByTestId('sd_1')).toHaveStyle(
      'box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.20);',
    );
  });

  test('sdi_1', () => {
    const { getByTestId } = render(<View.div data-testid="sdi_1" sdi_1 />);
    expect(getByTestId('sdi_1')).toHaveStyle(
      'box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14) inset,0 2px 1px -1px rgba(0,0,0,0.12) inset,0 1px 3px 0 rgba(0,0,0,0.20) inset;',
    );
  });
});
