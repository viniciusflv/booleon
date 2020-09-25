import { render } from '@testing-library/react';
import React from 'react';

import { View } from '../../packages/core/src';
import '@testing-library/jest-dom';

describe('Sizing', () => {
  describe('Height', () => {
    test('h_100', () => {
      const { getByTestId } = render(<View.div data-testid="h_100" h_100 />);
      expect(getByTestId('h_100')).toHaveStyle('height: 1rem;');
    });

    test('h_max_100', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_max_100" h_max_100 />,
      );
      expect(getByTestId('h_max_100')).toHaveStyle('max-height: 1rem;');
    });

    test('h_min_100', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_min_100" h_min_100 />,
      );
      expect(getByTestId('h_min_100')).toHaveStyle('min-height: 1rem;');
    });

    test('h_screen_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_screen_30" h_screen_30 />,
      );
      expect(getByTestId('h_screen_30')).toHaveStyle('height: 30vh;');
    });

    test('h_max_screen_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_max_screen_30" h_max_screen_30 />,
      );
      expect(getByTestId('h_max_screen_30')).toHaveStyle('max-height: 30vh;');
    });

    test('h_min_screen_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_min_screen_30" h_min_screen_30 />,
      );
      expect(getByTestId('h_min_screen_30')).toHaveStyle('min-height: 30vh;');
    });

    test('h_full', () => {
      const { getByTestId } = render(<View.div data-testid="h_full" h_full />);
      expect(getByTestId('h_full')).toHaveStyle('height: 100%;');
    });

    test('h_max_full', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_max_full" h_max_full />,
      );
      expect(getByTestId('h_max_full')).toHaveStyle('max-height: 100%;');
    });

    test('h_min_full', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_min_full" h_min_full />,
      );
      expect(getByTestId('h_min_full')).toHaveStyle('min-height: 100%;');
    });

    test('h_auto', () => {
      const { getByTestId } = render(<View.div data-testid="h_auto" h_auto />);
      expect(getByTestId('h_auto')).toHaveStyle('height: auto;');
    });

    test('h_max_auto', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_max_auto" h_max_auto />,
      );
      expect(getByTestId('h_max_auto')).toHaveStyle('max-height: auto;');
    });

    test('h_min_auto', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_min_auto" h_min_auto />,
      );
      expect(getByTestId('h_min_auto')).toHaveStyle('min-height: auto;');
    });

    test('h_screen', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_screen" h_screen />,
      );
      expect(getByTestId('h_screen')).toHaveStyle('height: 100vh;');
    });

    test('h_max_screen', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_max_screen" h_max_screen />,
      );
      expect(getByTestId('h_max_screen')).toHaveStyle('max-height: 100vh;');
    });

    test('h_min_screen', () => {
      const { getByTestId } = render(
        <View.div data-testid="h_min_screen" h_min_screen />,
      );
      expect(getByTestId('h_min_screen')).toHaveStyle('min-height: 100vh;');
    });
  });

  describe('Width', () => {
    test('w_100', () => {
      const { getByTestId } = render(<View.div data-testid="w_100" w_100 />);
      expect(getByTestId('w_100')).toHaveStyle('width: 1rem;');
    });

    test('w_max_100', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_max_100" w_max_100 />,
      );
      expect(getByTestId('w_max_100')).toHaveStyle('max-width: 1rem;');
    });

    test('w_min_100', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_min_100" w_min_100 />,
      );
      expect(getByTestId('w_min_100')).toHaveStyle('min-width: 1rem;');
    });

    test('w_screen_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_screen_30" w_screen_30 />,
      );
      expect(getByTestId('w_screen_30')).toHaveStyle('width: 30vw;');
    });

    test('w_max_screen_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_max_screen_30" w_max_screen_30 />,
      );
      expect(getByTestId('w_max_screen_30')).toHaveStyle('max-width: 30vw;');
    });

    test('w_min_screen_30', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_min_screen_30" w_min_screen_30 />,
      );
      expect(getByTestId('w_min_screen_30')).toHaveStyle('min-width: 30vw;');
    });

    test('w_full', () => {
      const { getByTestId } = render(<View.div data-testid="w_full" w_full />);
      expect(getByTestId('w_full')).toHaveStyle('width: 100%;');
    });

    test('w_max_full', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_max_full" w_max_full />,
      );
      expect(getByTestId('w_max_full')).toHaveStyle('max-width: 100%;');
    });

    test('w_min_full', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_min_full" w_min_full />,
      );
      expect(getByTestId('w_min_full')).toHaveStyle('min-width: 100%;');
    });

    test('w_auto', () => {
      const { getByTestId } = render(<View.div data-testid="w_auto" w_auto />);
      expect(getByTestId('w_auto')).toHaveStyle('width: auto;');
    });

    test('w_max_auto', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_max_auto" w_max_auto />,
      );
      expect(getByTestId('w_max_auto')).toHaveStyle('max-width: auto;');
    });

    test('w_min_auto', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_min_auto" w_min_auto />,
      );
      expect(getByTestId('w_min_auto')).toHaveStyle('min-width: auto;');
    });

    test('w_screen', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_screen" w_screen />,
      );
      expect(getByTestId('w_screen')).toHaveStyle('width: 100vw;');
    });

    test('w_max_screen', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_max_screen" w_max_screen />,
      );
      expect(getByTestId('w_max_screen')).toHaveStyle('max-width: 100vw;');
    });

    test('w_min_screen', () => {
      const { getByTestId } = render(
        <View.div data-testid="w_min_screen" w_min_screen />,
      );
      expect(getByTestId('w_min_screen')).toHaveStyle('min-width: 100vw;');
    });
  });
});
