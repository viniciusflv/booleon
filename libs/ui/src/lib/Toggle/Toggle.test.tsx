/**
 * @jest-environment jsdom
 */
import { useEffect, useRef } from 'react';

import { dark, light } from '@booleon/icons';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { IconOff, IconOn, Toggle } from '.';
import type { ToggleRef } from '.';

expect.extend(toHaveNoViolations);

describe('Toggle', () => {
  test('default', async () => {
    const { container } = render(
      <Toggle>
        <IconOn {...light} alt="light" />
        <IconOff {...dark} alt="dark" />
      </Toggle>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('ref', () => {
    const RefComponent = () => {
      const ref = useRef<ToggleRef>();

      useEffect(() => {
        ref.current?.setAttribute('data-testid', 'booleon');
      }, []);

      return (
        <Toggle ref={ref}>
          <IconOn {...light} alt="light" />
          <IconOff {...dark} alt="dark" />
        </Toggle>
      );
    };

    const { getByTestId } = render(<RefComponent />);

    expect(getByTestId('booleon')).toBeDefined();
  });
});
