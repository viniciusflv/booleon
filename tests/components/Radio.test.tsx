import { render } from '@testing-library/react';
import React from 'react';

import { axe, toHaveNoViolations } from 'jest-axe';

import { Field } from '../../packages/components/src';
import '@testing-library/jest-dom';

expect.extend(toHaveNoViolations);

describe('Radio', () => {
  test('default', async () => {
    const { container } = render(<Field.Radio id="Radio">Radio</Field.Radio>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
