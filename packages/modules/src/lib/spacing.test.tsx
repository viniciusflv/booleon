import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { spacing } from './spacing';

const BooleonComponent = booleon.div(spacing);
describe('Spacing', () => {
  describe('Margin', () => {
    test('m_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="m_12px" m_12px />,
      );
      expect(getByTestId('m_12px')).toHaveStyle('margin: 12px;');
    });

    test('m_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="m_auto" m_auto />,
      );
      expect(getByTestId('m_auto')).toHaveStyle('margin: auto;');
    });

    test('mt_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="mt_12px" mt_12px />,
      );
      expect(getByTestId('mt_12px')).toHaveStyle('margin-top: 12px;');
    });

    test('mt_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="mt_auto" mt_auto />,
      );
      expect(getByTestId('mt_auto')).toHaveStyle('margin-top: auto;');
    });

    test('mb_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="mb_12px" mb_12px />,
      );
      expect(getByTestId('mb_12px')).toHaveStyle('margin-bottom: 12px;');
    });

    test('mb_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="mb_auto" mb_auto />,
      );
      expect(getByTestId('mb_auto')).toHaveStyle('margin-bottom: auto;');
    });

    test('ml_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="ml_12px" ml_12px />,
      );
      expect(getByTestId('ml_12px')).toHaveStyle('margin-left: 12px;');
    });

    test('ml_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="ml_auto" ml_auto />,
      );
      expect(getByTestId('ml_auto')).toHaveStyle('margin-left: auto;');
    });

    test('mr_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="mr_12px" mr_12px />,
      );
      expect(getByTestId('mr_12px')).toHaveStyle('margin-right: 12px;');
    });

    test('mr_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="mr_auto" mr_auto />,
      );
      expect(getByTestId('mr_auto')).toHaveStyle('margin-right: auto;');
    });

    test('mx_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="mx_12px" mx_12px />,
      );
      expect(getByTestId('mx_12px')).toHaveStyle('margin-right: 12px;');
      expect(getByTestId('mx_12px')).toHaveStyle('margin-left: 12px;');
    });

    test('mx_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="mx_auto" mx_auto />,
      );
      expect(getByTestId('mx_auto')).toHaveStyle('margin-right: auto;');
      expect(getByTestId('mx_auto')).toHaveStyle('margin-left: auto;');
    });

    test('my_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="my_12px" my_12px />,
      );
      expect(getByTestId('my_12px')).toHaveStyle('margin-top: 12px;');
      expect(getByTestId('my_12px')).toHaveStyle('margin-bottom: 12px;');
    });

    test('my_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="my_auto" my_auto />,
      );
      expect(getByTestId('my_auto')).toHaveStyle('margin-top: auto;');
      expect(getByTestId('my_auto')).toHaveStyle('margin-bottom: auto;');
    });
  });

  describe('Padding', () => {
    test('p_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="p_12px" p_12px />,
      );
      expect(getByTestId('p_12px')).toHaveStyle('padding: 12px;');
    });

    test('pt_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="pt_12px" pt_12px />,
      );
      expect(getByTestId('pt_12px')).toHaveStyle('padding-top: 12px;');
    });

    test('pb_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="pb_12px" pb_12px />,
      );
      expect(getByTestId('pb_12px')).toHaveStyle('padding-bottom: 12px;');
    });

    test('pl_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="pl_12px" pl_12px />,
      );
      expect(getByTestId('pl_12px')).toHaveStyle('padding-left: 12px;');
    });

    test('pr_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="pr_12px" pr_12px />,
      );
      expect(getByTestId('pr_12px')).toHaveStyle('padding-right: 12px;');
    });

    test('px_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="px_12px" px_12px />,
      );
      expect(getByTestId('px_12px')).toHaveStyle('padding-right: 12px;');
      expect(getByTestId('px_12px')).toHaveStyle('padding-left: 12px;');
    });

    test('py_12px', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="py_12px" py_12px />,
      );
      expect(getByTestId('py_12px')).toHaveStyle('padding-top: 12px;');
      expect(getByTestId('py_12px')).toHaveStyle('padding-bottom: 12px;');
    });
  });
});
