import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { sizing } from './sizing';

const BooleonComponent = booleon.div(sizing);
describe('Sizing', () => {
  describe('Height', () => {
    test('h_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_100px" h_100px />,
      );
      expect(getByTestId('h_100px')).toHaveStyle('height: 100px;');
    });

    test('h_max_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_max_100px" h_max_100px />,
      );
      expect(getByTestId('h_max_100px')).toHaveStyle('max-height: 100px;');
    });

    test('h_min_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_min_100px" h_min_100px />,
      );
      expect(getByTestId('h_min_100px')).toHaveStyle('min-height: 100px;');
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

    test('h_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_100$" h_100$ />,
      );
      expect(getByTestId('h_100$')).toHaveStyle('height: 100%;');
    });

    test('h_max_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_max_100$" h_max_100$ />,
      );
      expect(getByTestId('h_max_100$')).toHaveStyle('max-height: 100%;');
    });

    test('h_min_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_min_100$" h_min_100$ />,
      );
      expect(getByTestId('h_min_100$')).toHaveStyle('min-height: 100%;');
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

    test('h_100vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_100vh" h_100vh />,
      );
      expect(getByTestId('h_100vh')).toHaveStyle('height: 100vh;');
    });

    test('h_max_100vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_max_100vh" h_max_100vh />,
      );
      expect(getByTestId('h_max_100vh')).toHaveStyle('max-height: 100vh;');
    });

    test('h_min_100vh', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="h_min_100vh" h_min_100vh />,
      );
      expect(getByTestId('h_min_100vh')).toHaveStyle('min-height: 100vh;');
    });
  });

  describe('Width', () => {
    test('w_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_100px" w_100px />,
      );
      expect(getByTestId('w_100px')).toHaveStyle('width: 100px;');
    });

    test('w_max_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_max_100px" w_max_100px />,
      );
      expect(getByTestId('w_max_100px')).toHaveStyle('max-width: 100px;');
    });

    test('w_min_100px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_min_100px" w_min_100px />,
      );
      expect(getByTestId('w_min_100px')).toHaveStyle('min-width: 100px;');
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

    test('w_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_100$" w_100$ />,
      );
      expect(getByTestId('w_100$')).toHaveStyle('width: 100%;');
    });

    test('w_max_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_max_100$" w_max_100$ />,
      );
      expect(getByTestId('w_max_100$')).toHaveStyle('max-width: 100%;');
    });

    test('w_min_100$', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_min_100$" w_min_100$ />,
      );
      expect(getByTestId('w_min_100$')).toHaveStyle('min-width: 100%;');
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

    test('w_100vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_100vw" w_100vw />,
      );
      expect(getByTestId('w_100vw')).toHaveStyle('width: 100vw;');
    });

    test('w_max_100vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_max_100vw" w_max_100vw />,
      );
      expect(getByTestId('w_max_100vw')).toHaveStyle('max-width: 100vw;');
    });

    test('w_min_100vw', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="w_min_100vw" w_min_100vw />,
      );
      expect(getByTestId('w_min_100vw')).toHaveStyle('min-width: 100vw;');
    });
  });
});
