import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { animation } from '../../packages/modules/src/lib';
import { booleon } from '../../packages/react/src';

const BooleonComponent = booleon.div(animation);
describe('Animation', () => {
  test('ani_name_NAME', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_name_NAME" ani_name_NAME />,
    );
    expect(getByTestId('ani_name_NAME')).toHaveStyle('animation-name:NAME;');
  });

  test('ani_duration_5s', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_duration_5s" ani_duration_5s />,
    );
    expect(getByTestId('ani_duration_5s')).toHaveStyle(
      'animation-duration:5s;',
    );
  });

  test('ani_iteration_5s', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_iteration_5s" ani_iteration_5s />,
    );
    expect(getByTestId('ani_iteration_5s')).toHaveStyle(
      'animation-iteration-count:5s;',
    );
  });

  test('ani_iteration_infinite', () => {
    const { getByTestId } = render(
      <BooleonComponent
        data-testid="ani_iteration_infinite"
        ani_iteration_infinite
      />,
    );
    expect(getByTestId('ani_iteration_infinite')).toHaveStyle(
      'animation-iteration-count:infinite;',
    );
  });

  test('ani_pause', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_pause" ani_pause />,
    );
    expect(getByTestId('ani_pause')).toHaveStyle(
      'animation-play-state: paused;',
    );
  });

  test('ani_play', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_play" ani_play />,
    );
    expect(getByTestId('ani_play')).toHaveStyle(
      'animation-play-state: running;',
    );
  });

  test('ani_forwards', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_forwards" ani_forwards />,
    );
    expect(getByTestId('ani_forwards')).toHaveStyle(
      'animation-fill-mode:forwards;',
    );
  });

  test('ani_linear', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_linear" ani_linear />,
    );
    expect(getByTestId('ani_linear')).toHaveStyle(
      'animation-timing-function:linear;',
    );
  });

  test('ani_ease', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_ease" ani_ease />,
    );
    expect(getByTestId('ani_ease')).toHaveStyle(
      'animation-timing-function:ease;',
    );
  });

  test('ani_ease_in', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_ease_in" ani_ease_in />,
    );
    expect(getByTestId('ani_ease_in')).toHaveStyle(
      'animation-timing-function:ease-in;',
    );
  });

  test('ani_ease_out', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_ease_out" ani_ease_out />,
    );
    expect(getByTestId('ani_ease_out')).toHaveStyle(
      'animation-timing-function:ease-out;',
    );
  });

  test('ani_ease_in_out', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="ani_ease_in_out" ani_ease_in_out />,
    );
    expect(getByTestId('ani_ease_in_out')).toHaveStyle(
      'animation-timing-function:ease-in-out;',
    );
  });
});
