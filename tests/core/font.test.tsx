import React from 'react';
import { View } from '../../packages/core/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Font', () => {
  describe('Style', () => {
    test('fb_000', () => {
      const { getByTestId } = render(<View.div data-testid="fb_000" fb_000 />);
      expect(getByTestId('fb_000')).toHaveStyle(
        'text-shadow:-1px 0 #000,0 1px #000,1px 0 #000,0 -1px #000;',
      );
    });

    test('fc_f00', () => {
      const { getByTestId } = render(<View.div data-testid="fc_f00" fc_f00 />);
      expect(getByTestId('fc_f00')).toHaveStyle('color: #f00;');
    });

    test('fs_10', () => {
      const { getByTestId } = render(<View.div data-testid="fs_10" fs_10 />);
      expect(getByTestId('fs_10')).toHaveStyle('font-size: 0.1rem;');
    });

    test('f_italic', () => {
      const { getByTestId } = render(
        <View.div data-testid="f_italic" f_italic />,
      );
      expect(getByTestId('f_italic')).toHaveStyle('font-style: italic;');
    });
  });

  describe('Family', () => {
    test('ff_Fira_Code', () => {
      const { getByTestId } = render(
        <View.div data-testid="ff_Fira_Code" ff_Fira_Code />,
      );
      expect(getByTestId('ff_Fira_Code')).toHaveStyle(
        'font-family: Fira Code;',
      );
    });

    test('ff_sans', () => {
      const { getByTestId } = render(
        <View.div data-testid="ff_sans" ff_sans />,
      );
      expect(getByTestId('ff_sans')).toHaveStyle('font-family: sans-serif;');
    });

    test('ff_serif', () => {
      const { getByTestId } = render(
        <View.div data-testid="ff_serif" ff_serif />,
      );
      expect(getByTestId('ff_serif')).toHaveStyle('font-family: serif;');
    });

    test('ff_mono', () => {
      const { getByTestId } = render(
        <View.div data-testid="ff_mono" ff_mono />,
      );
      expect(getByTestId('ff_mono')).toHaveStyle('font-family: monospace;');
    });
  });

  describe('User Select', () => {
    test('fsl_none', () => {
      const { getByTestId } = render(
        <View.div data-testid="fsl_none" fsl_none />,
      );
      expect(getByTestId('fsl_none')).toHaveStyle('user-select: none;');
    });

    test('fsl_text', () => {
      const { getByTestId } = render(
        <View.div data-testid="fsl_text" fsl_text />,
      );
      expect(getByTestId('fsl_text')).toHaveStyle('user-select: text;');
    });

    test('fsl_all', () => {
      const { getByTestId } = render(
        <View.div data-testid="fsl_all" fsl_all />,
      );
      expect(getByTestId('fsl_all')).toHaveStyle('user-select: all;');
    });

    test('fsl_auto', () => {
      const { getByTestId } = render(
        <View.div data-testid="fsl_auto" fsl_auto />,
      );
      expect(getByTestId('fsl_auto')).toHaveStyle('user-select: auto;');
    });
  });

  describe('Weight', () => {
    test('fw_lightest', () => {
      const { getByTestId } = render(
        <View.div data-testid="fw_lightest" fw_lightest />,
      );
      expect(getByTestId('fw_lightest')).toHaveStyle('font-weight: 100;');
    });

    test('fw_lighter', () => {
      const { getByTestId } = render(
        <View.div data-testid="fw_lighter" fw_lighter />,
      );
      expect(getByTestId('fw_lighter')).toHaveStyle('font-weight: 200;');
    });

    test('fw_light', () => {
      const { getByTestId } = render(
        <View.div data-testid="fw_light" fw_light />,
      );
      expect(getByTestId('fw_light')).toHaveStyle('font-weight: 300;');
    });

    test('fw_normal', () => {
      const { getByTestId } = render(
        <View.div data-testid="fw_normal" fw_normal />,
      );
      expect(getByTestId('fw_normal')).toHaveStyle('font-weight: 400;');
    });

    test('fw_medium', () => {
      const { getByTestId } = render(
        <View.div data-testid="fw_medium" fw_medium />,
      );
      expect(getByTestId('fw_medium')).toHaveStyle('font-weight: 500;');
    });

    test('fw_semibold', () => {
      const { getByTestId } = render(
        <View.div data-testid="fw_semibold" fw_semibold />,
      );
      expect(getByTestId('fw_semibold')).toHaveStyle('font-weight: 600;');
    });

    test('fw_bold', () => {
      const { getByTestId } = render(
        <View.div data-testid="fw_bold" fw_bold />,
      );
      expect(getByTestId('fw_bold')).toHaveStyle('font-weight: 700;');
    });

    test('fw_bolder', () => {
      const { getByTestId } = render(
        <View.div data-testid="fw_bolder" fw_bolder />,
      );
      expect(getByTestId('fw_bolder')).toHaveStyle('font-weight: 800;');
    });

    test('fw_black', () => {
      const { getByTestId } = render(
        <View.div data-testid="fw_black" fw_black />,
      );
      expect(getByTestId('fw_black')).toHaveStyle('font-weight: 900;');
    });
  });

  describe('Spacing', () => {
    test('ls_10', () => {
      const { getByTestId } = render(<View.div data-testid="ls_10" ls_10 />);
      expect(getByTestId('ls_10')).toHaveStyle('letter-spacing: 0.1rem;');
    });

    test('ls_neg_10', () => {
      const { getByTestId } = render(
        <View.div data-testid="ls_neg_10" ls_neg_10 />,
      );
      expect(getByTestId('ls_neg_10')).toHaveStyle('letter-spacing: -0.1rem;');
    });

    test('lh_10', () => {
      const { getByTestId } = render(<View.div data-testid="lh_10" lh_10 />);
      expect(getByTestId('lh_10')).toHaveStyle('line-height: 0.1rem;');
    });
  });

  describe('List Item', () => {
    test('li_none', () => {
      const { getByTestId } = render(
        <View.div data-testid="li_none" li_none />,
      );
      expect(getByTestId('li_none')).toHaveStyle('list-style-type: none;');
    });

    test('li_disc', () => {
      const { getByTestId } = render(
        <View.div data-testid="li_disc" li_disc />,
      );
      expect(getByTestId('li_disc')).toHaveStyle('list-style-type: disc;');
    });

    test('li_decimal', () => {
      const { getByTestId } = render(
        <View.div data-testid="li_decimal" li_decimal />,
      );
      expect(getByTestId('li_decimal')).toHaveStyle(
        'list-style-type: decimal;',
      );
    });

    test('li_inside', () => {
      const { getByTestId } = render(
        <View.div data-testid="li_inside" li_inside />,
      );
      expect(getByTestId('li_inside')).toHaveStyle(
        'list-style-position: inside;',
      );
    });

    test('li_outside', () => {
      const { getByTestId } = render(
        <View.div data-testid="li_outside" li_outside />,
      );
      expect(getByTestId('li_outside')).toHaveStyle(
        'list-style-position: outside;',
      );
    });
  });

  describe('Align', () => {
    test('fa_left', () => {
      const { getByTestId } = render(
        <View.div data-testid="fa_left" fa_left />,
      );
      expect(getByTestId('fa_left')).toHaveStyle('text-align: left;');
    });

    test('fa_center', () => {
      const { getByTestId } = render(
        <View.div data-testid="fa_center" fa_center />,
      );
      expect(getByTestId('fa_center')).toHaveStyle('text-align: center;');
    });

    test('fa_right', () => {
      const { getByTestId } = render(
        <View.div data-testid="fa_right" fa_right />,
      );
      expect(getByTestId('fa_right')).toHaveStyle('text-align: right;');
    });

    test('fa_justify', () => {
      const { getByTestId } = render(
        <View.div data-testid="fa_justify" fa_justify />,
      );
      expect(getByTestId('fa_justify')).toHaveStyle('text-align: justify;');
    });
  });

  describe('Transform', () => {
    test('ft_uppercase', () => {
      const { getByTestId } = render(
        <View.div data-testid="ft_uppercase" ft_uppercase />,
      );
      expect(getByTestId('ft_uppercase')).toHaveStyle(
        'text-transform: uppercase;',
      );
    });

    test('ft_lowercase', () => {
      const { getByTestId } = render(
        <View.div data-testid="ft_lowercase" ft_lowercase />,
      );
      expect(getByTestId('ft_lowercase')).toHaveStyle(
        'text-transform: lowercase;',
      );
    });

    test('ft_normal', () => {
      const { getByTestId } = render(
        <View.div data-testid="ft_normal" ft_normal />,
      );
      expect(getByTestId('ft_normal')).toHaveStyle('text-transform: normal;');
    });

    test('ft_capitalize', () => {
      const { getByTestId } = render(
        <View.div data-testid="ft_capitalize" ft_capitalize />,
      );
      expect(getByTestId('ft_capitalize')).toHaveStyle(
        'text-transform: capitalize;',
      );
    });
  });

  describe('Decoration', () => {
    test('f_underline', () => {
      const { getByTestId } = render(
        <View.div data-testid="f_underline" f_underline />,
      );
      expect(getByTestId('f_underline')).toHaveStyle(
        'text-decoration: underline;',
      );
    });

    test('f_line_through', () => {
      const { getByTestId } = render(
        <View.div data-testid="f_line_through" f_line_through />,
      );
      expect(getByTestId('f_line_through')).toHaveStyle(
        'text-decoration: line-through;',
      );
    });

    test('f_no_underline', () => {
      const { getByTestId } = render(
        <View.div data-testid="f_no_underline" f_no_underline />,
      );
      expect(getByTestId('f_no_underline')).toHaveStyle(
        'text-decoration: none;',
      );
    });
  });

  describe('Wrap', () => {
    test('f_wrap_space', () => {
      const { getByTestId } = render(
        <View.div data-testid="f_wrap_space" f_wrap_space />,
      );
      expect(getByTestId('f_wrap_space')).toHaveStyle('white-space: normal;');
    });

    test('f_wrap_word', () => {
      const { getByTestId } = render(
        <View.div data-testid="f_wrap_word" f_wrap_word />,
      );
      expect(getByTestId('f_wrap_word')).toHaveStyle(
        'overflow-wrap: break-word;',
      );
    });

    test('f_wrap_letter', () => {
      const { getByTestId } = render(
        <View.div data-testid="f_wrap_letter" f_wrap_letter />,
      );
      expect(getByTestId('f_wrap_letter')).toHaveStyle(
        'word-break: break-all;',
      );
    });

    test('f_no_wrap', () => {
      const { getByTestId } = render(
        <View.div
          data-testid="f_no_wrap"
          f_wrap_word
          f_wrap_letter
          f_no_wrap
        />,
      );
      expect(getByTestId('f_no_wrap')).toHaveStyle('white-space: nowrap;');
      expect(getByTestId('f_no_wrap')).toHaveStyle('word-break: normal;');
      expect(getByTestId('f_no_wrap')).toHaveStyle('overflow-wrap: normal;');
    });

    test('f_truncate', () => {
      const { getByTestId } = render(
        <View.div data-testid="f_truncate" f_truncate />,
      );
      expect(getByTestId('f_truncate')).toHaveStyle('overflow: hidden;');
      expect(getByTestId('f_truncate')).toHaveStyle('text-overflow: ellipsis;');
      expect(getByTestId('f_truncate')).toHaveStyle('white-space: nowrap;');
    });
  });
});
