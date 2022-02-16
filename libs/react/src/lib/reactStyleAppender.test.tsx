/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { reactStyleAppender } from './reactStyleAppender';

test('reactStyleAppender', () => {
  reactStyleAppender('flex', {}, () => {
    return '.flex{display:flex;}';
  });
  const { getByTestId } = render(
    <div data-testid="reactStyleAppender" className="flex" />,
  );
  expect(getByTestId('reactStyleAppender')).toHaveStyle('display: flex;');
});
