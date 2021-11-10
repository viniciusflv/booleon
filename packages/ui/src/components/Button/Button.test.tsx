import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Button } from '.';

expect.extend(toHaveNoViolations);

describe.skip('Button', () => {
  test('default', async () => {
    const { container } = render(<Button>label</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
