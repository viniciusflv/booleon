import React from 'react';
import '@testing-library/jest-dom';

import { hocBooleon } from '../../packages/react/src';
import { render } from '@testing-library/react';

import { container } from '../../packages/modules/src/lib/container';

describe('Container', () => {
  let ContainerComponent;

  beforeAll(() => {
    ContainerComponent = hocBooleon((props) => <div {...props} />, container);
  });

  describe('Content', () => {
    test('content default', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="content" content />,
      );
      expect(getByTestId('content')).toHaveStyle('content: "";');
    });

    test('content', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="content" content="X" />,
      );
      expect(getByTestId('content')).toHaveStyle('content: X;');
    });

    test('op_PERCENTAGE', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="op_PERCENTAGE" op_10 />,
      );
      expect(getByTestId('op_PERCENTAGE')).toHaveStyle('opacity: 0.1;');
    });
  });

  describe('Z-Index', () => {
    test('z_666', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="z_666" z_666 />,
      );
      expect(getByTestId('z_666')).toHaveStyle('z-index: 666;');
    });

    test('z_max', () => {
      const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
      const { getByTestId } = render(
        <ContainerComponent data-testid="z_max" z_max />,
      );
      expect(getByTestId('z_max')).toHaveStyle(`z-index: ${MAX_SAFE_INTEGER};`);
    });

    test('z_neg', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="z_neg" z_neg />,
      );
      expect(getByTestId('z_neg')).toHaveStyle('z-index: -1;');
    });

    test('z_auto', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="z_auto" z_auto />,
      );
      expect(getByTestId('z_auto')).toHaveStyle('z-index: auto;');
    });
  });

  describe('Placement', () => {
    describe('Top', () => {
      test('top_666', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="top_666" top_666 />,
        );
        expect(getByTestId('top_666')).toHaveStyle('top: 41.625rem;');
      });

      test('top_neg_666', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="top_neg_666" top_neg_666 />,
        );
        expect(getByTestId('top_neg_666')).toHaveStyle('top: -41.625rem;');
      });

      test('top', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="top" top />,
        );
        expect(getByTestId('top')).toHaveStyle('top: 0;');
      });

      test('top_neg', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="top_neg" top_neg />,
        );
        expect(getByTestId('top_neg')).toHaveStyle('top: -100%;');
      });
    });

    describe('Bottom', () => {
      test('bottom_666', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="bottom_666" bottom_666 />,
        );
        expect(getByTestId('bottom_666')).toHaveStyle('bottom: 41.625rem;');
      });

      test('bottom_neg_666', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="bottom_neg_666" bottom_neg_666 />,
        );
        expect(getByTestId('bottom_neg_666')).toHaveStyle(
          'bottom: -41.625rem;',
        );
      });

      test('bottom', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="bottom" bottom />,
        );
        expect(getByTestId('bottom')).toHaveStyle('bottom: 0;');
      });

      test('bottom_neg', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="bottom_neg" bottom_neg />,
        );
        expect(getByTestId('bottom_neg')).toHaveStyle('bottom: -100%;');
      });
    });

    describe('Left', () => {
      test('left_666', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="left_666" left_666 />,
        );
        expect(getByTestId('left_666')).toHaveStyle('left: 41.625rem;');
      });

      test('left_neg_666', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="left_neg_666" left_neg_666 />,
        );
        expect(getByTestId('left_neg_666')).toHaveStyle('left: -41.625rem;');
      });

      test('left', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="left" left />,
        );
        expect(getByTestId('left')).toHaveStyle('left: 0;');
      });

      test('left_neg', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="left_neg" left_neg />,
        );
        expect(getByTestId('left_neg')).toHaveStyle('left: -100%;');
      });
    });

    describe('Right', () => {
      test('right_666', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="right_666" right_666 />,
        );
        expect(getByTestId('right_666')).toHaveStyle('right: 41.625rem;');
      });

      test('right_neg_666', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="right_neg_666" right_neg_666 />,
        );
        expect(getByTestId('right_neg_666')).toHaveStyle('right: -41.625rem;');
      });

      test('right', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="right" right />,
        );
        expect(getByTestId('right')).toHaveStyle('right: 0;');
      });

      test('right_neg', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="right_neg" right_neg />,
        );
        expect(getByTestId('right_neg')).toHaveStyle('right: -100%;');
      });
    });

    describe('Inset', () => {
      test('inset', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="inset" inset />,
        );
        expect(getByTestId('inset')).toHaveStyle('top: 0;');
        expect(getByTestId('inset')).toHaveStyle('bottom: 0;');
        expect(getByTestId('inset')).toHaveStyle('left: 0;');
        expect(getByTestId('inset')).toHaveStyle('right: 0;');
      });

      test('inset_x', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="inset_x" inset_x />,
        );
        expect(getByTestId('inset_x')).toHaveStyle('left: 0;');
        expect(getByTestId('inset_x')).toHaveStyle('right: 0;');
      });

      test('inset_y', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="inset_y" inset_y />,
        );
        expect(getByTestId('inset_y')).toHaveStyle('top: 0;');
        expect(getByTestId('inset_y')).toHaveStyle('bottom: 0;');
      });
    });
  });

  describe('Position', () => {
    test('fixed', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="fixed" fixed />,
      );
      expect(getByTestId('fixed')).toHaveStyle('position: fixed;');
    });

    test('absolute', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="absolute" absolute />,
      );
      expect(getByTestId('absolute')).toHaveStyle('position: absolute;');
    });

    test('relative', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="relative" relative />,
      );
      expect(getByTestId('relative')).toHaveStyle('position: relative;');
    });

    test('sticky', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="sticky" sticky />,
      );
      expect(getByTestId('sticky')).toHaveStyle('position: sticky;');
    });
  });

  describe('Scroll', () => {
    describe('Auto', () => {
      test('sc_auto', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="sc_auto" sc_auto />,
        );
        expect(getByTestId('sc_auto')).toHaveStyle('overflow: auto;');
      });

      test('scy_auto', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="scy_auto" scy_auto />,
        );
        expect(getByTestId('scy_auto')).toHaveStyle('overflow-y: auto;');
      });

      test('scx_auto', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="scx_auto" scx_auto />,
        );
        expect(getByTestId('scx_auto')).toHaveStyle('overflow-x: auto;');
      });
    });

    describe('Hidden', () => {
      test('sc_hidden', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="sc_hidden" sc_hidden />,
        );
        expect(getByTestId('sc_hidden')).toHaveStyle('overflow: hidden;');
      });

      test('scy_hidden', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="scy_hidden" scy_hidden />,
        );
        expect(getByTestId('scy_hidden')).toHaveStyle('overflow-y: hidden;');
      });

      test('scx_hidden', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="scx_hidden" scx_hidden />,
        );
        expect(getByTestId('scx_hidden')).toHaveStyle('overflow-x: hidden;');
      });
    });

    describe('Visible', () => {
      test('sc_visible', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="sc_visible" sc_visible />,
        );
        expect(getByTestId('sc_visible')).toHaveStyle('overflow: visible;');
      });

      test('scy_visible', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="scy_visible" scy_visible />,
        );
        expect(getByTestId('scy_visible')).toHaveStyle('overflow-y: visible;');
      });

      test('scx_visible', () => {
        const { getByTestId } = render(
          <ContainerComponent data-testid="scx_visible" scx_visible />,
        );
        expect(getByTestId('scx_visible')).toHaveStyle('overflow-x: visible;');
      });
    });
  });

  describe('Visibility', () => {
    test('hidden', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="hidden" hidden />,
      );
      expect(getByTestId('hidden')).toHaveStyle('display: none;');
    });

    test('visible', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="visible" visible />,
      );
      expect(getByTestId('visible')).toHaveStyle('visibility: visible;');
    });

    test('invisible', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="invisible" invisible />,
      );
      expect(getByTestId('invisible')).toHaveStyle('visibility: hidden;');
    });

    test('noappearance', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="noappearance" noappearance />,
      );
      expect(getByTestId('noappearance')).toHaveStyle('appearance: none;');
    });
  });

  describe('Fit', () => {
    test('fit_contain', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="fit_contain" fit_contain />,
      );
      expect(getByTestId('fit_contain')).toHaveStyle('object-fit: contain;');
    });

    test('fit_cover', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="fit_cover" fit_cover />,
      );
      expect(getByTestId('fit_cover')).toHaveStyle('object-fit: cover;');
    });

    test('fit_fill', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="fit_fill" fit_fill />,
      );
      expect(getByTestId('fit_fill')).toHaveStyle('object-fit: fill;');
    });

    test('fit_none', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="fit_none" fit_none />,
      );
      expect(getByTestId('fit_none')).toHaveStyle('object-fit: none;');
    });
  });

  describe('Resize', () => {
    test('rz_none', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="rz_none" rz_none />,
      );
      expect(getByTestId('rz_none')).toHaveStyle('resize: none;');
    });

    test('rz', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="rz" rz />,
      );
      expect(getByTestId('rz')).toHaveStyle('resize: both;');
    });

    test('rzy', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="rzy" rzy />,
      );
      expect(getByTestId('rzy')).toHaveStyle('resize: vertical;');
    });

    test('rzx', () => {
      const { getByTestId } = render(
        <ContainerComponent data-testid="rzx" rzx />,
      );
      expect(getByTestId('rzx')).toHaveStyle('resize: horizontal;');
    });
  });
});
