import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { View } from '../../packages/core/src';

describe('Background', () => {
  test('bg_HEX', () => {
    const { getByTestId } = render(<View.div data-testid="bg_HEX" bg_fff />);
    expect(getByTestId('bg_HEX')).toHaveStyle('background-color: #fff;');
  });

  test('bg_img', () => {
    const bg_img = 'https://www.w3schools.com/cssref/img_tree.gif';
    const { getByTestId } = render(<View.div data-testid="bg_img" bg_img={bg_img} />);
    expect(getByTestId('bg_img')).toHaveStyle(`background-image: url(${bg_img});`);
  });

  test('bg_repeat', () => {
    const { getByTestId } = render(<View.div data-testid="bg_repeat" bg_repeat />);
    expect(getByTestId('bg_repeat')).toHaveStyle('background-repeat: repeat;');
  });

  test('bg_norepeat', () => {
    const { getByTestId } = render(<View.div data-testid="bg_norepeat" bg_norepeat />);
    expect(getByTestId('bg_norepeat')).toHaveStyle('background-repeat: no-repeat;');
  });

  test('bg_auto', () => {
    const { getByTestId } = render(<View.div data-testid="bg_auto" bg_auto />);
    expect(getByTestId('bg_auto')).toHaveStyle('background-size: auto;');
  });

  test('bg_cover', () => {
    const { getByTestId } = render(<View.div data-testid="bg_cover" bg_cover />);
    expect(getByTestId('bg_cover')).toHaveStyle('background-size: cover;');
  });

  test('bg_contain', () => {
    const { getByTestId } = render(<View.div data-testid="bg_contain" bg_contain />);
    expect(getByTestId('bg_contain')).toHaveStyle('background-size: contain;');
  });

  test('bg_fixed', () => {
    const { getByTestId } = render(<View.div data-testid="bg_fixed" bg_fixed />);
    expect(getByTestId('bg_fixed')).toHaveStyle('background-attachment: fixed;');
  });

  test('bg_local', () => {
    const { getByTestId } = render(<View.div data-testid="bg_local" bg_local />);
    expect(getByTestId('bg_local')).toHaveStyle('background-attachment: local;');
  });

  test('bg_scroll', () => {
    const { getByTestId } = render(<View.div data-testid="bg_scroll" bg_scroll />);
    expect(getByTestId('bg_scroll')).toHaveStyle('background-attachment: scroll;');
  });
});
