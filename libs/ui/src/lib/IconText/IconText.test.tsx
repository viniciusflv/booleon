/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

//  import { IconText } from '.';

expect.extend(toHaveNoViolations);

describe('IconText', () => {
  test('default', async () => {
    //  const { container } = render(<IconText />);
    //  expect(await axe(container)).toHaveNoViolations();
  });
});
