/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { SearchField } from '.';

expect.extend(toHaveNoViolations);

describe('SearchField', () => {
  test('default', async () => {
    const { container } = render(<SearchField label="Label" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
