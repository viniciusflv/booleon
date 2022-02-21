/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Text } from '.';

expect.extend(toHaveNoViolations);

describe('Text', () => {
  test('default', async () => {
    const { container } = render(<Text>Text</Text>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
