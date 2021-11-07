import '@testing-library/jest-dom';
import React from 'react';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { container } from './container';

const BooleonComponent = booleon.div(container);
describe('Container', () => {
  describe('Content', () => {
    test('content default', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="content" content />,
      );
      expect(getByTestId('content')).toHaveStyle('content: "";');
    });

    test('content string', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="content-string" content="X" />,
      );

      expect(getByTestId('content-string')).toHaveStyle('content: X;');
    });

    test('op_PERCENTAGE', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="op_PERCENTAGE" op_10 />,
      );
      expect(getByTestId('op_PERCENTAGE')).toHaveStyle('opacity: 0.1;');
    });
  });

  describe('Z-Index', () => {
    test('z_666', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="z_666" z_666 />,
      );
      expect(getByTestId('z_666')).toHaveStyle('z-index: 666;');
    });

    test('z_max', () => {
      const MAX_SAFE_INTEGER = Math.pow(2, 31) - 1;
      const { getByTestId } = render(
        <BooleonComponent data-testid="z_max" z_max />,
      );
      expect(getByTestId('z_max')).toHaveStyle(`z-index: ${MAX_SAFE_INTEGER};`);
    });

    test('z_neg_1', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="z_neg_1" z_neg_1 />,
      );
      expect(getByTestId('z_neg_1')).toHaveStyle('z-index: -1;');
    });

    test('z_auto', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="z_auto" z_auto />,
      );
      expect(getByTestId('z_auto')).toHaveStyle('z-index: auto;');
    });
  });

  describe('Placement', () => {
    describe('Top', () => {
      test('top_666px', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="top_666px" top_666px />,
        );
        expect(getByTestId('top_666px')).toHaveStyle('top: 666px;');
      });

      test('top_neg_666px', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="top_neg_666px" top_neg_666px />,
        );
        expect(getByTestId('top_neg_666px')).toHaveStyle('top: -666px;');
      });

      test('top', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="top" top />,
        );
        expect(getByTestId('top')).toHaveStyle('top: 0;');
      });

      test('top_neg_100$', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="top_neg_100$" top_neg_100$ />,
        );
        expect(getByTestId('top_neg_100$')).toHaveStyle('top: -100%;');
      });
    });

    describe('Bottom', () => {
      test('bottom_666px', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="bottom_666px" bottom_666px />,
        );
        expect(getByTestId('bottom_666px')).toHaveStyle('bottom: 666px;');
      });

      test('bottom_neg_666px', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="bottom_neg_666px" bottom_neg_666px />,
        );
        expect(getByTestId('bottom_neg_666px')).toHaveStyle('bottom: -666px;');
      });

      test('bottom', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="bottom" bottom />,
        );
        expect(getByTestId('bottom')).toHaveStyle('bottom: 0;');
      });

      test('bottom_neg_100$', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="bottom_neg_100$" bottom_neg_100$ />,
        );
        expect(getByTestId('bottom_neg_100$')).toHaveStyle('bottom: -100%;');
      });
    });

    describe('Left', () => {
      test('left_666px', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="left_666px" left_666px />,
        );
        expect(getByTestId('left_666px')).toHaveStyle('left: 666px;');
      });

      test('left_neg_666px', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="left_neg_666px" left_neg_666px />,
        );
        expect(getByTestId('left_neg_666px')).toHaveStyle('left: -666px;');
      });

      test('left', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="left" left />,
        );
        expect(getByTestId('left')).toHaveStyle('left: 0;');
      });

      test('left_neg_100$', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="left_neg_100$" left_neg_100$ />,
        );
        expect(getByTestId('left_neg_100$')).toHaveStyle('left: -100%;');
      });
    });

    describe('Right', () => {
      test('right_666px', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="right_666px" right_666px />,
        );
        expect(getByTestId('right_666px')).toHaveStyle('right: 666px;');
      });

      test('right_neg_666px', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="right_neg_666px" right_neg_666px />,
        );
        expect(getByTestId('right_neg_666px')).toHaveStyle('right: -666px;');
      });

      test('right', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="right" right />,
        );
        expect(getByTestId('right')).toHaveStyle('right: 0;');
      });

      test('right_neg_100$', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="right_neg_100$" right_neg_100$ />,
        );
        expect(getByTestId('right_neg_100$')).toHaveStyle('right: -100%;');
      });
    });

    describe('Inset', () => {
      test('inset', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="inset" inset />,
        );
        expect(getByTestId('inset')).toHaveStyle('top: 0;');
        expect(getByTestId('inset')).toHaveStyle('bottom: 0;');
        expect(getByTestId('inset')).toHaveStyle('left: 0;');
        expect(getByTestId('inset')).toHaveStyle('right: 0;');
      });

      test('inset_x', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="inset_x" inset_x />,
        );
        expect(getByTestId('inset_x')).toHaveStyle('left: 0;');
        expect(getByTestId('inset_x')).toHaveStyle('right: 0;');
      });

      test('inset_y', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="inset_y" inset_y />,
        );
        expect(getByTestId('inset_y')).toHaveStyle('top: 0;');
        expect(getByTestId('inset_y')).toHaveStyle('bottom: 0;');
      });
    });
  });

  describe('Position', () => {
    test('fixed', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="fixed" fixed />,
      );
      expect(getByTestId('fixed')).toHaveStyle('position: fixed;');
    });

    test('absolute', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="absolute" absolute />,
      );
      expect(getByTestId('absolute')).toHaveStyle('position: absolute;');
    });

    test('relative', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="relative" relative />,
      );
      expect(getByTestId('relative')).toHaveStyle('position: relative;');
    });

    test('sticky', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="sticky" sticky />,
      );
      expect(getByTestId('sticky')).toHaveStyle('position: sticky;');
    });
  });

  describe('Scroll', () => {
    describe('Auto', () => {
      test('sc_auto', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="sc_auto" sc_auto />,
        );
        expect(getByTestId('sc_auto')).toHaveStyle('overflow: auto;');
      });

      test('scy_auto', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="scy_auto" scy_auto />,
        );
        expect(getByTestId('scy_auto')).toHaveStyle('overflow-y: auto;');
      });

      test('scx_auto', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="scx_auto" scx_auto />,
        );
        expect(getByTestId('scx_auto')).toHaveStyle('overflow-x: auto;');
      });
    });

    describe('Hidden', () => {
      test('sc_hidden', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="sc_hidden" sc_hidden />,
        );
        expect(getByTestId('sc_hidden')).toHaveStyle('overflow: hidden;');
      });

      test('scy_hidden', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="scy_hidden" scy_hidden />,
        );
        expect(getByTestId('scy_hidden')).toHaveStyle('overflow-y: hidden;');
      });

      test('scx_hidden', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="scx_hidden" scx_hidden />,
        );
        expect(getByTestId('scx_hidden')).toHaveStyle('overflow-x: hidden;');
      });
    });

    describe('Visible', () => {
      test('sc_visible', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="sc_visible" sc_visible />,
        );
        expect(getByTestId('sc_visible')).toHaveStyle('overflow: visible;');
      });

      test('scy_visible', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="scy_visible" scy_visible />,
        );
        expect(getByTestId('scy_visible')).toHaveStyle('overflow-y: visible;');
      });

      test('scx_visible', () => {
        const { getByTestId } = render(
          <BooleonComponent data-testid="scx_visible" scx_visible />,
        );
        expect(getByTestId('scx_visible')).toHaveStyle('overflow-x: visible;');
      });
    });
  });

  describe('Visibility', () => {
    test('hidden', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="hidden" hidden />,
      );
      expect(getByTestId('hidden')).toHaveStyle('display: none;');
    });

    test('visible', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="visible" visible />,
      );
      expect(getByTestId('visible')).toHaveStyle('visibility: visible;');
    });

    test('invisible', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="invisible" invisible />,
      );
      expect(getByTestId('invisible')).toHaveStyle('visibility: hidden;');
    });

    test('noappearance', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="noappearance" noappearance />,
      );
      expect(getByTestId('noappearance')).toHaveStyle('appearance: none;');
    });
  });

  describe('Fit', () => {
    test('fit_contain', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="fit_contain" fit_contain />,
      );
      expect(getByTestId('fit_contain')).toHaveStyle('object-fit: contain;');
    });

    test('fit_cover', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="fit_cover" fit_cover />,
      );
      expect(getByTestId('fit_cover')).toHaveStyle('object-fit: cover;');
    });

    test('fit_fill', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="fit_fill" fit_fill />,
      );
      expect(getByTestId('fit_fill')).toHaveStyle('object-fit: fill;');
    });

    test('fit_none', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="fit_none" fit_none />,
      );
      expect(getByTestId('fit_none')).toHaveStyle('object-fit: none;');
    });
  });

  describe('Resize', () => {
    test('rz_none', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="rz_none" rz_none />,
      );
      expect(getByTestId('rz_none')).toHaveStyle('resize: none;');
    });

    test('rz', () => {
      const { getByTestId } = render(<BooleonComponent data-testid="rz" rz />);
      expect(getByTestId('rz')).toHaveStyle('resize: both;');
    });

    test('rzy', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="rzy" rzy />,
      );
      expect(getByTestId('rzy')).toHaveStyle('resize: vertical;');
    });

    test('rzx', () => {
      const { getByTestId } = render(
        <BooleonComponent data-testid="rzx" rzx />,
      );
      expect(getByTestId('rzx')).toHaveStyle('resize: horizontal;');
    });
  });
});