import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { View } from '../../packages/core/src';

describe('Filter', () => {
  test('ft_blur_1', () => {
    const { getByTestId } = render(<View.div data-testid='ft_blur_1' ft_blur_1 />);
    expect(getByTestId('ft_blur_1')).toHaveStyle('filter: blur(1rem);');
  });

  test('ft_bn_100', () => {
    const { getByTestId } = render(<View.div data-testid='ft_bn_100' ft_bn_100 />);
    expect(getByTestId('ft_bn_100')).toHaveStyle('filter: brightness(1);');
  });

  test('ft_contrast_100', () => {
    const { getByTestId } = render(<View.div data-testid='ft_contrast_100' ft_contrast_100 />);
    expect(getByTestId('ft_contrast_100')).toHaveStyle('filter: contrast(100%);');
  });

  test('ft_grayscale_100', () => {
    const { getByTestId } = render(<View.div data-testid='ft_grayscale_100' ft_grayscale_100 />);
    expect(getByTestId('ft_grayscale_100')).toHaveStyle('filter: grayscale(100%);');
  });

  test('ft_hue_10', () => {
    const { getByTestId } = render(<View.div data-testid='ft_hue_10' ft_hue_10 />);
    expect(getByTestId('ft_hue_10')).toHaveStyle('filter: hue-rotate(10deg);');
  });

  test('ft_opacity_10', () => {
    const { getByTestId } = render(<View.div data-testid='ft_opacity_10' ft_opacity_10 />);
    expect(getByTestId('ft_opacity_10')).toHaveStyle('filter: opacity(10%);');
  });

  test('ft_saturate_10', () => {
    const { getByTestId } = render(<View.div data-testid='ft_saturate_10' ft_saturate_10 />);
    expect(getByTestId('ft_saturate_10')).toHaveStyle('filter: saturate(10);');
  });

  test('ft_sepia_10', () => {
    const { getByTestId } = render(<View.div data-testid='ft_sepia_10' ft_sepia_10 />);
    expect(getByTestId('ft_sepia_10')).toHaveStyle('filter: sepia(10%);');
  });

  test('ft_sd_1', () => {
    const { getByTestId } = render(<View.div data-testid='ft_sd_1' ft_sd_1 />);
    expect(getByTestId('ft_sd_1')).toHaveStyle('filter: drop-shadow(0 1px 1px rgba(0,0,0,0.14))drop-shadow(0 2px 1px rgba(0,0,0,0.12))drop-shadow(0 1px 3px rgba(0,0,0,0.20));');
  });

  test('ft_invert', () => {
    const { getByTestId } = render(<View.div data-testid='ft_invert' ft_invert />);
    expect(getByTestId('ft_invert')).toHaveStyle('filter: invert(100%);');
  });
});
