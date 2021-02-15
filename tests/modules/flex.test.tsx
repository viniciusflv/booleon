import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { flex } from '../../packages/modules/src/lib/flex';
import { booleon } from '../../packages/react/src';

const BooleonComponent = booleon.div(flex);
describe('Flex', () => {
  test('flex', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="flex" flex />,
    );
    expect(getByTestId('flex')).toHaveStyle('display: flex;');
  });

  test('wrap', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="wrap" wrap />,
    );
    expect(getByTestId('wrap')).toHaveStyle('flex-wrap:wrap;');
  });

  test('no_wrap', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="no_wrap" no_wrap />,
    );
    expect(getByTestId('no_wrap')).toHaveStyle('flex-wrap:nowrap;');
  });

  test('reverse_wrap', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="reverse_wrap" reverse_wrap />,
    );
    expect(getByTestId('reverse_wrap')).toHaveStyle('flex-wrap:wrap-reverse;');
  });

  test('grow', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="grow" grow />,
    );
    expect(getByTestId('grow')).toHaveStyle('flex-grow: 1;');
  });

  test('col', () => {
    const { getByTestId } = render(<BooleonComponent data-testid="col" col />);
    expect(getByTestId('col')).toHaveStyle('flex-direction: column;');
  });

  test('row', () => {
    const { getByTestId } = render(<BooleonComponent data-testid="row" row />);
    expect(getByTestId('row')).toHaveStyle('flex-direction: row;');
  });

  test('row_reverse', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="row_reverse" row_reverse />,
    );
    expect(getByTestId('row_reverse')).toHaveStyle(
      'flex-direction: row-reverse;',
    );
  });

  test('col_reverse', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="col_reverse" col_reverse />,
    );
    expect(getByTestId('col_reverse')).toHaveStyle(
      'flex-direction: column-reverse;',
    );
  });

  test('main_between', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="main_between" main_between />,
    );
    expect(getByTestId('main_between')).toHaveStyle(
      'justify-content: space-between;',
    );
  });

  test('main_around', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="main_around" main_around />,
    );
    expect(getByTestId('main_around')).toHaveStyle(
      'justify-content: space-around;',
    );
  });

  test('main_evenly', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="main_evenly" main_evenly />,
    );
    expect(getByTestId('main_evenly')).toHaveStyle(
      'justify-content: space-evenly;',
    );
  });

  test('main_center', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="main_center" main_center />,
    );
    expect(getByTestId('main_center')).toHaveStyle('justify-content: center;');
  });

  test('main_stretch', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="main_stretch" main_stretch />,
    );
    expect(getByTestId('main_stretch')).toHaveStyle(
      'justify-content: stretch;',
    );
  });

  test('main_start', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="main_start" main_start />,
    );
    expect(getByTestId('main_start')).toHaveStyle(
      'justify-content: flex-start;',
    );
  });

  test('main_end', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="main_end" main_end />,
    );
    expect(getByTestId('main_end')).toHaveStyle('justify-content: flex-end;');
  });

  test('cross_center', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cross_center" cross_center />,
    );
    expect(getByTestId('cross_center')).toHaveStyle('align-items: center;');
  });

  test('cross_stretch', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cross_stretch" cross_stretch />,
    );
    expect(getByTestId('cross_stretch')).toHaveStyle('align-items: stretch;');
  });

  test('cross_start', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cross_start" cross_start />,
    );
    expect(getByTestId('cross_start')).toHaveStyle('align-items: flex-start;');
  });

  test('cross_end', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cross_end" cross_end />,
    );
    expect(getByTestId('cross_end')).toHaveStyle('align-items: flex-end;');
  });
});
