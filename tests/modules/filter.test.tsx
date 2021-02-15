import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { filter } from '../../packages/modules/src';
import { booleon } from '../../packages/react/src';

const BooleonComponent = booleon.div(filter);
describe('Filter', () => {
  test('combined', () => {
    const { getByTestId } = render(
      <BooleonComponent
        data-testid="fl_blur_1rem"
        fl_blur_1rem
        fl_brightness_100
        fl_contrast_100$
        fl_grayscale_100$
        fl_hue_10deg
        fl_opacity_10$
        fl_saturate_1000
        fl_sepia_10$
        fl_sd_1
        fl_invert
      />,
    );
    expect(getByTestId('fl_blur_1rem')).toHaveStyle(
      'filter:' +
        'invert(100%)' +
        'drop-shadow(0 1px 1px rgba(0,0,0,0.14))' +
        'drop-shadow(0 2px 1px rgba(0,0,0,0.12))' +
        'drop-shadow(0 1px 3px rgba(0,0,0,0.20))' +
        'sepia(10%)' +
        'saturate(10)' +
        'opacity(10%)' +
        'hue-rotate(10deg)' +
        'grayscale(100%)' +
        'contrast(100%)' +
        'brightness(1)' +
        'blur(1rem);',
    );
  });

  test('fl_blur_1rem', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_blur_1rem" fl_blur_1rem />,
    );
    expect(getByTestId('fl_blur_1rem')).toHaveStyle('filter: blur(1rem);');
  });

  test('fl_brightness_100', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_brightness_100" fl_brightness_100 />,
    );
    expect(getByTestId('fl_brightness_100')).toHaveStyle(
      'filter: brightness(1);',
    );
  });

  test('fl_contrast_100$', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_contrast_100$" fl_contrast_100$ />,
    );
    expect(getByTestId('fl_contrast_100$')).toHaveStyle(
      'filter: contrast(100%);',
    );
  });

  test('fl_grayscale_100$', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_grayscale_100$" fl_grayscale_100$ />,
    );
    expect(getByTestId('fl_grayscale_100$')).toHaveStyle(
      'filter: grayscale(100%);',
    );
  });

  test('fl_hue_10deg', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_hue_10deg" fl_hue_10deg />,
    );
    expect(getByTestId('fl_hue_10deg')).toHaveStyle(
      'filter: hue-rotate(10deg);',
    );
  });

  test('fl_opacity_10$', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_opacity_10$" fl_opacity_10$ />,
    );
    expect(getByTestId('fl_opacity_10$')).toHaveStyle('filter: opacity(10%);');
  });

  test('fl_saturate_1000', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_saturate_1000" fl_saturate_1000 />,
    );
    expect(getByTestId('fl_saturate_1000')).toHaveStyle(
      'filter: saturate(10);',
    );
  });

  test('fl_sepia_10$', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_sepia_10$" fl_sepia_10$ />,
    );
    expect(getByTestId('fl_sepia_10$')).toHaveStyle('filter: sepia(10%);');
  });

  test('fl_sd_1', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_sd_1" fl_sd_1 />,
    );
    expect(getByTestId('fl_sd_1')).toHaveStyle(
      'filter: drop-shadow(0 1px 1px rgba(0,0,0,0.14))drop-shadow(0 2px 1px rgba(0,0,0,0.12))drop-shadow(0 1px 3px rgba(0,0,0,0.20));',
    );
  });

  test('fl_invert', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="fl_invert" fl_invert />,
    );
    expect(getByTestId('fl_invert')).toHaveStyle('filter: invert(100%);');
  });
});
