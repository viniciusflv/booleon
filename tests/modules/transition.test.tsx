import React from 'react';
import '@testing-library/jest-dom';

import { hocBooleon } from '../../packages/react/src';
import { render } from '@testing-library/react';

import { transition } from '../../packages/modules/src/lib/transition';

describe('Transition', () => {
  let TransitionComponent;

  beforeAll(() => {
    TransitionComponent = hocBooleon((props) => <div {...props} />, transition);
  });

  describe('Time', () => {
    test('ts_duration_5s', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_duration_5s" ts_duration_5s />,
      );
      expect(getByTestId('ts_duration_5s')).toHaveStyle(
        'transition-duration: 5s;',
      );
    });

    test('ts_delay_5s', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_delay_5s" ts_delay_5s />,
      );
      expect(getByTestId('ts_delay_5s')).toHaveStyle('transition-delay: 5s;');
    });
  });

  describe('Property', () => {
    test('ts', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts" ts />,
      );
      expect(getByTestId('ts')).toHaveStyle(
        'transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;',
      );
    });

    test('ts_none', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_none" ts_none />,
      );
      expect(getByTestId('ts_none')).toHaveStyle('transition-property: none;');
    });

    test('ts_all', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_all" ts_all />,
      );
      expect(getByTestId('ts_all')).toHaveStyle('transition-property: all;');
    });

    test('ts_colors', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_colors" ts_colors />,
      );
      expect(getByTestId('ts_colors')).toHaveStyle(
        'transition-property: background-color,border-color,color,fill,stroke;',
      );
    });

    test('ts_opacity', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_opacity" ts_opacity />,
      );
      expect(getByTestId('ts_opacity')).toHaveStyle(
        'transition-property: opacity;',
      );
    });

    test('ts_shadow', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_shadow" ts_shadow />,
      );
      expect(getByTestId('ts_shadow')).toHaveStyle(
        'transition-property: box-shadow;',
      );
    });

    test('ts_transform', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_transform" ts_transform />,
      );
      expect(getByTestId('ts_transform')).toHaveStyle(
        'transition-property: transform;',
      );
    });
  });

  describe('Timing', () => {
    test('ts_ease_linear', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_ease_linear" ts_ease_linear />,
      );
      expect(getByTestId('ts_ease_linear')).toHaveStyle(
        'transition-timing-function: linear;',
      );
    });

    test('ts_ease_in', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_ease_in" ts_ease_in />,
      );
      expect(getByTestId('ts_ease_in')).toHaveStyle(
        'transition-timing-function: cubic-bezier(0.4,0,1,1);',
      );
    });

    test('ts_ease_out', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_ease_out" ts_ease_out />,
      );
      expect(getByTestId('ts_ease_out')).toHaveStyle(
        'transition-timing-function: cubic-bezier(0,0,0.2,1);',
      );
    });

    test('ts_ease_in_out', () => {
      const { getByTestId } = render(
        <TransitionComponent data-testid="ts_ease_in_out" ts_ease_in_out />,
      );
      expect(getByTestId('ts_ease_in_out')).toHaveStyle(
        'transition-timing-function: cubic-bezier(0.4,0,0.2,1);',
      );
    });
  });
});
