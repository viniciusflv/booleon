import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { font } from '../../packages/modules/src/lib/font';
import { booleon } from '../../packages/react/src';

describe('Font', () => {
  const FontComponent = booleon.div(font);

  describe('Style', () => {
    test('ft_border_000', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_border_000" ft_border_000 />,
      );
      expect(getByTestId('ft_border_000')).toHaveStyle(
        'text-shadow:-1px 0 #000,0 1px #000,1px 0 #000,0 -1px #000;',
      );
    });

    test('ft_color_f00', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_color_f00" ft_color_f00 />,
      );
      expect(getByTestId('ft_color_f00')).toHaveStyle('color: #f00;');
    });

    test('ft_size_10', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_size_10" ft_size_10 />,
      );
      expect(getByTestId('ft_size_10')).toHaveStyle('font-size: 0.625rem;');
    });

    test('ft_italic', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_italic" ft_italic />,
      );
      expect(getByTestId('ft_italic')).toHaveStyle('font-style: italic;');
    });
  });

  describe('Family', () => {
    test('ft_family_Fira_Code', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_family_Fira_Code" ft_family_Fira_Code />,
      );
      expect(getByTestId('ft_family_Fira_Code')).toHaveStyle(
        'font-family: Fira Code;',
      );
    });

    test('ft_family_sans', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_family_sans" ft_family_sans />,
      );
      expect(getByTestId('ft_family_sans')).toHaveStyle(
        'font-family: sans-serif;',
      );
    });

    test('ft_family_serif', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_family_serif" ft_family_serif />,
      );
      expect(getByTestId('ft_family_serif')).toHaveStyle('font-family: serif;');
    });

    test('ft_family_mono', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_family_mono" ft_family_mono />,
      );
      expect(getByTestId('ft_family_mono')).toHaveStyle(
        'font-family: monospace;',
      );
    });
  });

  describe('User Select', () => {
    test('ft_select_none', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_select_none" ft_select_none />,
      );
      expect(getByTestId('ft_select_none')).toHaveStyle('user-select: none;');
    });

    test('ft_select_text', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_select_text" ft_select_text />,
      );
      expect(getByTestId('ft_select_text')).toHaveStyle('user-select: text;');
    });

    test('ft_select_all', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_select_all" ft_select_all />,
      );
      expect(getByTestId('ft_select_all')).toHaveStyle('user-select: all;');
    });

    test('ft_select_auto', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_select_auto" ft_select_auto />,
      );
      expect(getByTestId('ft_select_auto')).toHaveStyle('user-select: auto;');
    });
  });

  describe('Weight', () => {
    test('ft_weight_lightest', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_weight_lightest" ft_weight_lightest />,
      );
      expect(getByTestId('ft_weight_lightest')).toHaveStyle(
        'font-weight: 100;',
      );
    });

    test('ft_weight_lighter', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_weight_lighter" ft_weight_lighter />,
      );
      expect(getByTestId('ft_weight_lighter')).toHaveStyle('font-weight: 200;');
    });

    test('ft_weight_light', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_weight_light" ft_weight_light />,
      );
      expect(getByTestId('ft_weight_light')).toHaveStyle('font-weight: 300;');
    });

    test('ft_weight_normal', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_weight_normal" ft_weight_normal />,
      );
      expect(getByTestId('ft_weight_normal')).toHaveStyle('font-weight: 400;');
    });

    test('ft_weight_medium', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_weight_medium" ft_weight_medium />,
      );
      expect(getByTestId('ft_weight_medium')).toHaveStyle('font-weight: 500;');
    });

    test('ft_weight_semibold', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_weight_semibold" ft_weight_semibold />,
      );
      expect(getByTestId('ft_weight_semibold')).toHaveStyle(
        'font-weight: 600;',
      );
    });

    test('ft_weight_bold', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_weight_bold" ft_weight_bold />,
      );
      expect(getByTestId('ft_weight_bold')).toHaveStyle('font-weight: 700;');
    });

    test('ft_weight_bolder', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_weight_bolder" ft_weight_bolder />,
      );
      expect(getByTestId('ft_weight_bolder')).toHaveStyle('font-weight: 800;');
    });

    test('ft_weight_black', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_weight_black" ft_weight_black />,
      );
      expect(getByTestId('ft_weight_black')).toHaveStyle('font-weight: 900;');
    });
  });

  describe('Spacing', () => {
    test('ft_spacing_10', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_spacing_10" ft_spacing_10 />,
      );
      expect(getByTestId('ft_spacing_10')).toHaveStyle(
        'letter-spacing: 0.625rem;',
      );
    });

    test('ft_spacing_neg_10', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_spacing_neg_10" ft_spacing_neg_10 />,
      );
      expect(getByTestId('ft_spacing_neg_10')).toHaveStyle(
        'letter-spacing: -0.625rem;',
      );
    });

    test('ft_height_10', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_height_10" ft_height_10 />,
      );
      expect(getByTestId('ft_height_10')).toHaveStyle('line-height: 0.625rem;');
    });
  });

  describe('List Item', () => {
    test('li_none', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="li_none" li_none />,
      );
      expect(getByTestId('li_none')).toHaveStyle('list-style-type: none;');
    });

    test('li_disc', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="li_disc" li_disc />,
      );
      expect(getByTestId('li_disc')).toHaveStyle('list-style-type: disc;');
    });

    test('li_decimal', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="li_decimal" li_decimal />,
      );
      expect(getByTestId('li_decimal')).toHaveStyle(
        'list-style-type: decimal;',
      );
    });

    test('li_inside', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="li_inside" li_inside />,
      );
      expect(getByTestId('li_inside')).toHaveStyle(
        'list-style-position: inside;',
      );
    });

    test('li_outside', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="li_outside" li_outside />,
      );
      expect(getByTestId('li_outside')).toHaveStyle(
        'list-style-position: outside;',
      );
    });
  });

  describe('Align', () => {
    test('ft_align_left', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_align_left" ft_align_left />,
      );
      expect(getByTestId('ft_align_left')).toHaveStyle('text-align: left;');
    });

    test('ft_align_center', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_align_center" ft_align_center />,
      );
      expect(getByTestId('ft_align_center')).toHaveStyle('text-align: center;');
    });

    test('ft_align_right', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_align_right" ft_align_right />,
      );
      expect(getByTestId('ft_align_right')).toHaveStyle('text-align: right;');
    });

    test('ft_align_justify', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_align_justify" ft_align_justify />,
      );
      expect(getByTestId('ft_align_justify')).toHaveStyle(
        'text-align: justify;',
      );
    });
  });

  describe('Transform', () => {
    test('ft_transform_uppercase', () => {
      const { getByTestId } = render(
        <FontComponent
          data-testid="ft_transform_uppercase"
          ft_transform_uppercase
        />,
      );
      expect(getByTestId('ft_transform_uppercase')).toHaveStyle(
        'text-transform: uppercase;',
      );
    });

    test('ft_transform_lowercase', () => {
      const { getByTestId } = render(
        <FontComponent
          data-testid="ft_transform_lowercase"
          ft_transform_lowercase
        />,
      );
      expect(getByTestId('ft_transform_lowercase')).toHaveStyle(
        'text-transform: lowercase;',
      );
    });

    test('ft_transform_normal', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_transform_normal" ft_transform_normal />,
      );
      expect(getByTestId('ft_transform_normal')).toHaveStyle(
        'text-transform: normal;',
      );
    });

    test('ft_transform_capitalize', () => {
      const { getByTestId } = render(
        <FontComponent
          data-testid="ft_transform_capitalize"
          ft_transform_capitalize
        />,
      );
      expect(getByTestId('ft_transform_capitalize')).toHaveStyle(
        'text-transform: capitalize;',
      );
    });
  });

  describe('Decoration', () => {
    test('ft_underline', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_underline" ft_underline />,
      );
      expect(getByTestId('ft_underline')).toHaveStyle(
        'text-decoration: underline;',
      );
    });

    test('ft_line_through', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_line_through" ft_line_through />,
      );
      expect(getByTestId('ft_line_through')).toHaveStyle(
        'text-decoration: line-through;',
      );
    });

    test('ft_no_underline', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_no_underline" ft_no_underline />,
      );
      expect(getByTestId('ft_no_underline')).toHaveStyle(
        'text-decoration: none;',
      );
    });
  });

  describe('Wrap', () => {
    test('ft_wrap_space', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_wrap_space" ft_wrap_space />,
      );
      expect(getByTestId('ft_wrap_space')).toHaveStyle('white-space: normal;');
    });

    test('ft_wrap_word', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_wrap_word" ft_wrap_word />,
      );
      expect(getByTestId('ft_wrap_word')).toHaveStyle(
        'overflow-wrap: break-word;',
      );
    });

    test('ft_wrap_letter', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="ft_wrap_letter" ft_wrap_letter />,
      );
      expect(getByTestId('ft_wrap_letter')).toHaveStyle(
        'word-break: break-all;',
      );
    });

    test('f_no_wrap', () => {
      const { getByTestId } = render(
        <FontComponent
          data-testid="f_no_wrap"
          ft_wrap_word
          ft_wrap_letter
          ft_no_wrap
        />,
      );
      expect(getByTestId('f_no_wrap')).toHaveStyle('white-space: nowrap;');
      expect(getByTestId('f_no_wrap')).toHaveStyle('word-break: normal;');
      expect(getByTestId('f_no_wrap')).toHaveStyle('overflow-wrap: normal;');
    });

    test('f_truncate', () => {
      const { getByTestId } = render(
        <FontComponent data-testid="f_truncate" ft_truncate />,
      );
      expect(getByTestId('f_truncate')).toHaveStyle('overflow: hidden;');
      expect(getByTestId('f_truncate')).toHaveStyle('text-overflow: ellipsis;');
      expect(getByTestId('f_truncate')).toHaveStyle('white-space: nowrap;');
    });
  });
});
