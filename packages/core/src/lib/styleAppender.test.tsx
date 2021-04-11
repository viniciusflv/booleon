import { render } from '@testing-library/react';

import { styleAppender } from './styleAppender';

import '@testing-library/jest-dom';

test('styleAppender', () => {
  styleAppender('flex', () => '.flex{display:flex;}');
  const { getByTestId } = render(
    <div data-testid="styleAppender" className="flex" />,
  );
  expect(getByTestId('styleAppender')).toHaveStyle('display: flex;');
});
