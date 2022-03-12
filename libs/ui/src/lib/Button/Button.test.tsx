/**
 * @jest-environment jsdom
 */
import { useEffect, useRef } from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Button } from '.';
import type { ButtonRef } from '.';

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

  test('ref', () => {
    const RefComponent = () => {
      const ref = useRef<ButtonRef>();

      useEffect(() => {
        ref.current?.setAttribute('data-testid', 'booleon');
      }, []);

      return (
        <Button title="ref" ref={ref}>
          Button
        </Button>
      );
    };

    const { getByTestId } = render(<RefComponent />);

    expect(getByTestId('booleon')).toBeDefined();
  });
});
