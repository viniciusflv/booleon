/**
 * @jest-environment jsdom
 */
import { useEffect, useRef } from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { List, ListItem } from '.';
import type { ListRef } from '.';

expect.extend(toHaveNoViolations);

describe('List', () => {
  test('default', async () => {
    const { container } = render(
      <List title="Click" href="#">
        {Array.from(Array(5)).map((_, i) => (
          <ListItem key={i} depth={i}>
            Lorem, ipsum dolor sit amet
          </ListItem>
        ))}
      </List>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('ref', () => {
    const RefComponent = () => {
      const ref = useRef<ListRef>();

      useEffect(() => {
        ref.current?.setAttribute('data-testid', 'booleon');
      }, []);

      return (
        <List title="ref" ref={ref}>
          {Array.from(Array(5)).map((_, i) => (
            <ListItem key={i} depth={i}>
              Lorem, ipsum dolor sit amet
            </ListItem>
          ))}
        </List>
      );
    };

    const { getByTestId } = render(<RefComponent />);

    expect(getByTestId('booleon')).toBeDefined();
  });
});
