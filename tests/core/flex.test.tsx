import '@testing-library/jest-dom';
import { View } from '../../packages/core/src';
import { render } from '@testing-library/react';
import React from 'react';

describe('Flex', () => {
  test('flex', () => {
    const { getByTestId } = render(<View.div data-testid="flex" flex />);
    expect(getByTestId('flex')).toHaveStyle('display: flex;');
  });

  test('grow', () => {
    const { getByTestId } = render(<View.div data-testid="grow" grow />);
    expect(getByTestId('grow')).toHaveStyle('flex-grow: 1;');
  });

  test('col', () => {
    const { getByTestId } = render(<View.div data-testid="col" col />);
    expect(getByTestId('col')).toHaveStyle('flex-direction: column;');
  });

  test('row', () => {
    const { getByTestId } = render(<View.div data-testid="row" row />);
    expect(getByTestId('row')).toHaveStyle('flex-direction: row;');
  });

  test('row_reverse', () => {
    const { getByTestId } = render(
      <View.div data-testid="row_reverse" row_reverse />,
    );
    expect(getByTestId('row_reverse')).toHaveStyle(
      'flex-direction: row-reverse;',
    );
  });

  test('col_reverse', () => {
    const { getByTestId } = render(
      <View.div data-testid="col_reverse" col_reverse />,
    );
    expect(getByTestId('col_reverse')).toHaveStyle(
      'flex-direction: column-reverse;',
    );
  });

  test('main_between', () => {
    const { getByTestId } = render(
      <View.div data-testid="main_between" main_between />,
    );
    expect(getByTestId('main_between')).toHaveStyle(
      'justify-content: space-between;',
    );
  });

  test('main_around', () => {
    const { getByTestId } = render(
      <View.div data-testid="main_around" main_around />,
    );
    expect(getByTestId('main_around')).toHaveStyle(
      'justify-content: space-around;',
    );
  });

  test('main_evenly', () => {
    const { getByTestId } = render(
      <View.div data-testid="main_evenly" main_evenly />,
    );
    expect(getByTestId('main_evenly')).toHaveStyle(
      'justify-content: space-evenly;',
    );
  });

  test('main_center', () => {
    const { getByTestId } = render(
      <View.div data-testid="main_center" main_center />,
    );
    expect(getByTestId('main_center')).toHaveStyle('justify-content: center;');
  });

  test('main_stretch', () => {
    const { getByTestId } = render(
      <View.div data-testid="main_stretch" main_stretch />,
    );
    expect(getByTestId('main_stretch')).toHaveStyle(
      'justify-content: stretch;',
    );
  });

  test('main_start', () => {
    const { getByTestId } = render(
      <View.div data-testid="main_start" main_start />,
    );
    expect(getByTestId('main_start')).toHaveStyle(
      'justify-content: flex-start;',
    );
  });

  test('main_end', () => {
    const { getByTestId } = render(
      <View.div data-testid="main_end" main_end />,
    );
    expect(getByTestId('main_end')).toHaveStyle('justify-content: flex-end;');
  });

  test('cross_center', () => {
    const { getByTestId } = render(
      <View.div data-testid="cross_center" cross_center />,
    );
    expect(getByTestId('cross_center')).toHaveStyle('align-items: center;');
  });

  test('cross_stretch', () => {
    const { getByTestId } = render(
      <View.div data-testid="cross_stretch" cross_stretch />,
    );
    expect(getByTestId('cross_stretch')).toHaveStyle('align-items: stretch;');
  });

  test('cross_start', () => {
    const { getByTestId } = render(
      <View.div data-testid="cross_start" cross_start />,
    );
    expect(getByTestId('cross_start')).toHaveStyle('align-items: flex-start;');
  });

  test('cross_end', () => {
    const { getByTestId } = render(
      <View.div data-testid="cross_end" cross_end />,
    );
    expect(getByTestId('cross_end')).toHaveStyle('align-items: flex-end;');
  });
});
