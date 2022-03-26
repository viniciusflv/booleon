/**
 * @jest-environment jsdom
 */
import { useEffect, useRef } from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { SearchField, SearchFieldRef } from '.';

expect.extend(toHaveNoViolations);

describe('SearchField', () => {
  test('default', async () => {
    const { container } = render(<SearchField label="Label" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('ref', () => {
    const RefComponent = () => {
      const ref = useRef<SearchFieldRef>();

      useEffect(() => {
        ref.current?.setAttribute('data-testid', 'booleon');
      }, []);

      return <SearchField label="Procurar" ref={ref} />;
    };

    const { getByTestId } = render(<RefComponent />);

    expect(getByTestId('booleon')).toBeDefined();
  });
});
