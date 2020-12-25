import React from 'react';

import { render } from '@testing-library/react';

import { styleAppender } from '../../packages/core/src';

import '@testing-library/jest-dom';

test('styleAppender', () => {
  styleAppender('flex', () => '.flex{display:flex;}');
  const { getByTestId } = render(
    <div data-testid="styleAppender" className="flex" />,
  );
  expect(getByTestId('styleAppender')).toHaveStyle('display: flex;');
});
