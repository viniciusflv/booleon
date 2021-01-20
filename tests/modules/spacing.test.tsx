import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { spacing } from '../../packages/modules/src/lib/spacing';
import { hocBooleon } from '../../packages/react/src';

describe('Spacing', () => {
  let SpacingComponent;

  beforeAll(() => {
    SpacingComponent = hocBooleon((props) => <div {...props} />, spacing);
  });

  describe('Margin', () => {
    test('m_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="m_12" m_12 />,
      );
      expect(getByTestId('m_12')).toHaveStyle('margin: 0.75rem;');
    });

    test('m_auto', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="m_auto" m_auto />,
      );
      expect(getByTestId('m_auto')).toHaveStyle('margin: auto;');
    });

    test('mt_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="mt_12" mt_12 />,
      );
      expect(getByTestId('mt_12')).toHaveStyle('margin-top: 0.75rem;');
    });

    test('mt_auto', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="mt_auto" mt_auto />,
      );
      expect(getByTestId('mt_auto')).toHaveStyle('margin-top: auto;');
    });

    test('mb_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="mb_12" mb_12 />,
      );
      expect(getByTestId('mb_12')).toHaveStyle('margin-bottom: 0.75rem;');
    });

    test('mb_auto', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="mb_auto" mb_auto />,
      );
      expect(getByTestId('mb_auto')).toHaveStyle('margin-bottom: auto;');
    });

    test('ml_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="ml_12" ml_12 />,
      );
      expect(getByTestId('ml_12')).toHaveStyle('margin-left: 0.75rem;');
    });

    test('ml_auto', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="ml_auto" ml_auto />,
      );
      expect(getByTestId('ml_auto')).toHaveStyle('margin-left: auto;');
    });

    test('mr_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="mr_12" mr_12 />,
      );
      expect(getByTestId('mr_12')).toHaveStyle('margin-right: 0.75rem;');
    });

    test('mr_auto', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="mr_auto" mr_auto />,
      );
      expect(getByTestId('mr_auto')).toHaveStyle('margin-right: auto;');
    });

    test('mx_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="mx_12" mx_12 />,
      );
      expect(getByTestId('mx_12')).toHaveStyle('margin-right: 0.75rem;');
      expect(getByTestId('mx_12')).toHaveStyle('margin-left: 0.75rem;');
    });

    test('mx_auto', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="mx_auto" mx_auto />,
      );
      expect(getByTestId('mx_auto')).toHaveStyle('margin-right: auto;');
      expect(getByTestId('mx_auto')).toHaveStyle('margin-left: auto;');
    });

    test('my_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="my_12" my_12 />,
      );
      expect(getByTestId('my_12')).toHaveStyle('margin-top: 0.75rem;');
      expect(getByTestId('my_12')).toHaveStyle('margin-bottom: 0.75rem;');
    });

    test('my_auto', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="my_auto" my_auto />,
      );
      expect(getByTestId('my_auto')).toHaveStyle('margin-top: auto;');
      expect(getByTestId('my_auto')).toHaveStyle('margin-bottom: auto;');
    });
  });

  describe('Padding', () => {
    test('p_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="p_12" p_12 />,
      );
      expect(getByTestId('p_12')).toHaveStyle('padding: 0.75rem;');
    });

    test('pt_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="pt_12" pt_12 />,
      );
      expect(getByTestId('pt_12')).toHaveStyle('padding-top: 0.75rem;');
    });

    test('pb_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="pb_12" pb_12 />,
      );
      expect(getByTestId('pb_12')).toHaveStyle('padding-bottom: 0.75rem;');
    });

    test('pl_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="pl_12" pl_12 />,
      );
      expect(getByTestId('pl_12')).toHaveStyle('padding-left: 0.75rem;');
    });

    test('pr_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="pr_12" pr_12 />,
      );
      expect(getByTestId('pr_12')).toHaveStyle('padding-right: 0.75rem;');
    });

    test('px_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="px_12" px_12 />,
      );
      expect(getByTestId('px_12')).toHaveStyle('padding-right: 0.75rem;');
      expect(getByTestId('px_12')).toHaveStyle('padding-left: 0.75rem;');
    });

    test('py_12', () => {
      const { getByTestId } = render(
        <SpacingComponent data-testid="py_12" py_12 />,
      );
      expect(getByTestId('py_12')).toHaveStyle('padding-top: 0.75rem;');
      expect(getByTestId('py_12')).toHaveStyle('padding-bottom: 0.75rem;');
    });
  });
});
