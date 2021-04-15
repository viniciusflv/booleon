import { render } from '@testing-library/react';

import { booleon } from './booleon';
import '@testing-library/jest-dom';

describe('booleon', () => {
  test('dom', () => {
    const MyComponent = booleon.div({
      flex: () => 'display:flex;',
    });
    const { getByTestId } = render(<MyComponent data-testid="booleon" flex />);
    expect(getByTestId('booleon')).toHaveStyle('display: flex;');
  });

  test('hoc', () => {
    const MyComponent = booleon((props) => <div {...props} />, {
      flex: () => 'display:flex;',
    });
    const { getByTestId } = render(<MyComponent data-testid="booleon" flex />);
    expect(getByTestId('booleon')).toHaveStyle('display: flex;');
  });

  test('el', () => {
    const MyComponent = booleon('div', {
      flex: () => 'display:flex;',
    });
    const { getByTestId } = render(<MyComponent data-testid="booleon" flex />);
    expect(getByTestId('booleon')).toHaveStyle('display: flex;');
  });

  test('withPrefixes', () => {
    const MyComponent = booleon
      .div({
        flex: () => 'display:flex;',
      })
      .withPrefixes({
        PREFIX: ({ className }) => `.${className}{background:blue;}`,
      });
    const { getByTestId } = render(
      <MyComponent data-testid="withPrefixes" PREFIX__flex />,
    );
    expect(getByTestId('withPrefixes')).toHaveStyle('background: blue;');
  });
});
