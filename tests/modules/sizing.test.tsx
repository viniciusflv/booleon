import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { sizing } from '../../packages/modules/src/lib/sizing';
import { booleon } from '../../packages/react/src';

const BooleonComponent = booleon.div(sizing);
describe('Sizing', () => {
  describe('Height', () => {
    test('h_100', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_100" h_100 />,
      );
      expect(getByTestId('h_100')).toHaveStyle('height: 6.25rem;');
    });

    test('h_max_100', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_max_100" h_max_100 />,
      );
      expect(getByTestId('h_max_100')).toHaveStyle('max-height: 6.25rem;');
    });

    test('h_min_100', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_min_100" h_min_100 />,
      );
      expect(getByTestId('h_min_100')).toHaveStyle('min-height: 6.25rem;');
    });

    test('h_30vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_30vh" h_30vh />,
      );
      expect(getByTestId('h_30vh')).toHaveStyle('height: 30vh;');
    });

    test('h_max_30vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_max_30vh" h_max_30vh />,
      );
      expect(getByTestId('h_max_30vh')).toHaveStyle('max-height: 30vh;');
    });

    test('h_min_30vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_min_30vh" h_min_30vh />,
      );
      expect(getByTestId('h_min_30vh')).toHaveStyle('min-height: 30vh;');
    });

    test('h_full', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_full" h_full />,
      );
      expect(getByTestId('h_full')).toHaveStyle('height: 100%;');
    });

    test('h_max_full', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_max_full" h_max_full />,
      );
      expect(getByTestId('h_max_full')).toHaveStyle('max-height: 100%;');
    });

    test('h_min_full', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_min_full" h_min_full />,
      );
      expect(getByTestId('h_min_full')).toHaveStyle('min-height: 100%;');
    });

    test('h_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_auto" h_auto />,
      );
      expect(getByTestId('h_auto')).toHaveStyle('height: auto;');
    });

    test('h_max_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_max_auto" h_max_auto />,
      );
      expect(getByTestId('h_max_auto')).toHaveStyle('max-height: auto;');
    });

    test('h_min_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_min_auto" h_min_auto />,
      );
      expect(getByTestId('h_min_auto')).toHaveStyle('min-height: auto;');
    });

    test('h_screen', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_screen" h_screen />,
      );
      expect(getByTestId('h_screen')).toHaveStyle('height: 100vh;');
    });

    test('h_max_screen', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_max_screen" h_max_screen />,
      );
      expect(getByTestId('h_max_screen')).toHaveStyle('max-height: 100vh;');
    });

    test('h_min_screen', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_min_screen" h_min_screen />,
      );
      expect(getByTestId('h_min_screen')).toHaveStyle('min-height: 100vh;');
    });
  });

  describe('Width', () => {
    test('w_100', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_100" w_100 />,
      );
      expect(getByTestId('w_100')).toHaveStyle('width: 6.25rem;');
    });

    test('w_max_100', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_max_100" w_max_100 />,
      );
      expect(getByTestId('w_max_100')).toHaveStyle('max-width: 6.25rem;');
    });

    test('w_min_100', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_min_100" w_min_100 />,
      );
      expect(getByTestId('w_min_100')).toHaveStyle('min-width: 6.25rem;');
    });

    test('w_30vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_30vw" w_30vw />,
      );
      expect(getByTestId('w_30vw')).toHaveStyle('width: 30vw;');
    });

    test('w_max_30vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_max_30vw" w_max_30vw />,
      );
      expect(getByTestId('w_max_30vw')).toHaveStyle('max-width: 30vw;');
    });

    test('w_min_30vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_min_30vw" w_min_30vw />,
      );
      expect(getByTestId('w_min_30vw')).toHaveStyle('min-width: 30vw;');
    });

    test('w_full', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_full" w_full />,
      );
      expect(getByTestId('w_full')).toHaveStyle('width: 100%;');
    });

    test('w_max_full', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_max_full" w_max_full />,
      );
      expect(getByTestId('w_max_full')).toHaveStyle('max-width: 100%;');
    });

    test('w_min_full', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_min_full" w_min_full />,
      );
      expect(getByTestId('w_min_full')).toHaveStyle('min-width: 100%;');
    });

    test('w_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_auto" w_auto />,
      );
      expect(getByTestId('w_auto')).toHaveStyle('width: auto;');
    });

    test('w_max_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_max_auto" w_max_auto />,
      );
      expect(getByTestId('w_max_auto')).toHaveStyle('max-width: auto;');
    });

    test('w_min_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_min_auto" w_min_auto />,
      );
      expect(getByTestId('w_min_auto')).toHaveStyle('min-width: auto;');
    });

    test('w_screen', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_screen" w_screen />,
      );
      expect(getByTestId('w_screen')).toHaveStyle('width: 100vw;');
    });

    test('w_max_screen', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_max_screen" w_max_screen />,
      );
      expect(getByTestId('w_max_screen')).toHaveStyle('max-width: 100vw;');
    });

    test('w_min_screen', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_min_screen" w_min_screen />,
      );
      expect(getByTestId('w_min_screen')).toHaveStyle('min-width: 100vw;');
    });
  });
});
