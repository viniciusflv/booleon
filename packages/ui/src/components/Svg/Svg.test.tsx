import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Svg } from '.';
import { booleon } from '../../assets';

expect.extend(toHaveNoViolations);

describe('Svg', () => {
  test('default', async () => {
    const { container } = render(<Svg {...booleon} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
