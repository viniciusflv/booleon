/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { styleAppender } from './styleAppender';

test('styleAppender', () => {
  styleAppender('flex', () => '.flex{display:flex;}');
  const { getByTestId } = render(
    <div data-testid="styleAppender" className="flex" />,
  );
  expect(getByTestId('styleAppender')).toHaveStyle('display: flex;');
});
