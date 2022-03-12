/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Button } from '.';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  test('default', async () => {
    const { container } = render(
      <Button title="Click" href="#">
        Button
      </Button>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
