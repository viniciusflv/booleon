/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Svg } from '.';

expect.extend(toHaveNoViolations);

describe('Svg', () => {
  test('default', async () => {
    const { container } = render(<Svg alt="icon" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
