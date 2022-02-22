/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Container } from '.';

expect.extend(toHaveNoViolations);

describe('Container', () => {
  test('default', async () => {
    const { container } = render(<Container>Container</Container>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
