import React from 'react';

import { render } from '@testing-library/react';

import { reactStyleAppender } from '../../packages/react/src';

import '@testing-library/jest-dom';

test('reactStyleAppender', () => {
  reactStyleAppender('flex', () => {
    return '.flex{display:flex;}';
  });
  const { getByTestId } = render(
    <div data-testid="reactStyleAppender" className="flex" />,
  );
  expect(getByTestId('reactStyleAppender')).toHaveStyle('display: flex;');
});
