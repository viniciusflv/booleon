import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { View } from '../../packages/core/src';

describe('Flex', () => {
  test('flex', () => {
    const { getByTestId } = render(<View.div data-testid='flex' flex />);
    expect(getByTestId('flex')).toHaveStyle('display: flex;');
  });
});
