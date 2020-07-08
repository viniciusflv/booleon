import 'jest-styled-components';
import { Text } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Font', () => {
  describe('Style', () => {
    test('border', () => {
      const stroke = '-1px 0 #ff0, 0 1px #ff0, 1px 0 #ff0, 0 -1px #ff0';
      const component = renderer.create(<Text fb_ff0 />).toJSON();
      expect(component).toHaveStyleRule('text-shadow', stroke);
    });
  
    test('color', () => {
      const component = renderer.create(<Text fc_ff0 />).toJSON();
      expect(component).toHaveStyleRule('color', '#ff0');
    });
  
    test('italic', () => {
      const component = renderer.create(<Text f_italic />).toJSON();
      expect(component).toHaveStyleRule('font-style', 'italic');
    });
  });
  
  describe('Family', () => {
    test('ff_sans', () => {
      const ff_sans = 'Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif';
      const component = renderer.create(<Text ff_sans />).toJSON();
      expect(component).toHaveStyleRule('font-family', ff_sans);
    });
  
    test('ff_serif', () => {
      const ff_serif = 'Georgia,Cambria,"Times New Roman",Times,serif';
      const component = renderer.create(<Text ff_serif />).toJSON();
      expect(component).toHaveStyleRule('font-family', ff_serif);
    });
  
    test('ff_mono', () => {
      const ff_mono =
          'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace';
      const component = renderer.create(<Text ff_mono />).toJSON();
      expect(component).toHaveStyleRule('font-family', ff_mono);
    });
  });
  
  describe('Size', () => {
    test('f_xs', () => {
      const component = renderer.create(<Text fs_1 />).toJSON();
      expect(component).toHaveStyleRule('font-size', '0.1rem');
    });
  
    test('f_sm', () => {
      const component = renderer.create(<Text fs_2 />).toJSON();
      expect(component).toHaveStyleRule('font-size', '0.2rem');
    });
  
    test('f_md', () => {
      const component = renderer.create(<Text fs_3 />).toJSON();
      expect(component).toHaveStyleRule('font-size', '0.3rem');
    });
  
    test('f_lg', () => {
      const component = renderer.create(<Text fs_4 />).toJSON();
      expect(component).toHaveStyleRule('font-size', '0.4rem');
    });
  
    test('f_xl', () => {
      const component = renderer.create(<Text fs_5 />).toJSON();
      expect(component).toHaveStyleRule('font-size', '0.5rem');
    });
  });
  
  describe('Weight', () => {
    test('fw_lightest', () => {
      const component = renderer.create(<Text fw_lightest />).toJSON();
      expect(component).toHaveStyleRule('font-weight', '100');
    });
  
    test('fw_lighter', () => {
      const component = renderer.create(<Text fw_lighter />).toJSON();
      expect(component).toHaveStyleRule('font-weight', '200');
    });
  
    test('fw_light', () => {
      const component = renderer.create(<Text fw_light />).toJSON();
      expect(component).toHaveStyleRule('font-weight', '300');
    });
  
    test('fw_normal', () => {
      const component = renderer.create(<Text fw_normal />).toJSON();
      expect(component).toHaveStyleRule('font-weight', '400');
    });
  
    test('fw_medium', () => {
      const component = renderer.create(<Text fw_medium />).toJSON();
      expect(component).toHaveStyleRule('font-weight', '500');
    });
  
    test('fw_semibold', () => {
      const component = renderer.create(<Text fw_semibold />).toJSON();
      expect(component).toHaveStyleRule('font-weight', '600');
    });
  
    test('fw_bold', () => {
      const component = renderer.create(<Text fw_bold />).toJSON();
      expect(component).toHaveStyleRule('font-weight', '700');
    });
  
    test('fw_bolder', () => {
      const component = renderer.create(<Text fw_bolder />).toJSON();
      expect(component).toHaveStyleRule('font-weight', '800');
    });
  
    test('fw_black', () => {
      const component = renderer.create(<Text fw_black />).toJSON();
      expect(component).toHaveStyleRule('font-weight', '900');
    });
  });
  
  describe('Spacing', () => {
    test('ls_tighter', () => {
      const component = renderer.create(<Text ls_tighter />).toJSON();
      expect(component).toHaveStyleRule('letter-spacing', '-0.05em');
    });
  
    test('ls_tight', () => {
      const component = renderer.create(<Text ls_tight />).toJSON();
      expect(component).toHaveStyleRule('letter-spacing', '-0.025em');
    });
  
    test('ls_normal', () => {
      const component = renderer.create(<Text ls_normal />).toJSON();
      expect(component).toHaveStyleRule('letter-spacing', '0');
    });
  
    test('ls_wide', () => {
      const component = renderer.create(<Text ls_wide />).toJSON();
      expect(component).toHaveStyleRule('letter-spacing', '0.025em');
    });
  
    test('ls_wider', () => {
      const component = renderer.create(<Text ls_wider />).toJSON();
      expect(component).toHaveStyleRule('letter-spacing', '0.05em');
    });
  
    test('ls_widest', () => {
      const component = renderer.create(<Text ls_widest />).toJSON();
      expect(component).toHaveStyleRule('letter-spacing', '0.1em');
    });
  });
  
  describe('Line Height', () => {
    test('lh_none', () => {
      const component = renderer.create(<Text lh_none />).toJSON();
      expect(component).toHaveStyleRule('line-height', '1');
    });
  
    test('lh_tight', () => {
      const component = renderer.create(<Text lh_tight />).toJSON();
      expect(component).toHaveStyleRule('line-height', '1.25');
    });
  
    test('lh_snug', () => {
      const component = renderer.create(<Text lh_snug />).toJSON();
      expect(component).toHaveStyleRule('line-height', '1.375');
    });
  
    test('lh_normal', () => {
      const component = renderer.create(<Text lh_normal />).toJSON();
      expect(component).toHaveStyleRule('line-height', '1.5');
    });
  
    test('lh_relaxed', () => {
      const component = renderer.create(<Text lh_relaxed />).toJSON();
      expect(component).toHaveStyleRule('line-height', '1.625');
    });
  
    test('lh_loose', () => {
      const component = renderer.create(<Text lh_loose />).toJSON();
      expect(component).toHaveStyleRule('line-height', '2');
    });
  });
  
  describe('List Item', () => {
    test('li_none', () => {
      const component = renderer.create(<Text li_none />).toJSON();
      expect(component).toHaveStyleRule('list-style-type', 'none');
    });
  
    test('li_disc', () => {
      const component = renderer.create(<Text li_disc />).toJSON();
      expect(component).toHaveStyleRule('list-style-type', 'disc');
    });
  
    test('li_decimal', () => {
      const component = renderer.create(<Text li_decimal />).toJSON();
      expect(component).toHaveStyleRule('list-style-type', 'decimal');
    });
  
    test('li_inside', () => {
      const component = renderer.create(<Text li_inside />).toJSON();
      expect(component).toHaveStyleRule('list-style-position', 'inside');
    });
  
    test('li_outside', () => {
      const component = renderer.create(<Text li_outside />).toJSON();
      expect(component).toHaveStyleRule('list-style-position', 'outside');
    });
  });
  
  describe('Align', () => {
    test('f_left', () => {
      const component = renderer.create(<Text f_left />).toJSON();
      expect(component).toHaveStyleRule('text-align', 'left');
    });
  
    test('f_center', () => {
      const component = renderer.create(<Text f_center />).toJSON();
      expect(component).toHaveStyleRule('text-align', 'center');
    });
  
    test('f_right', () => {
      const component = renderer.create(<Text f_right />).toJSON();
      expect(component).toHaveStyleRule('text-align', 'right');
    });
  
    test('f_justify', () => {
      const component = renderer.create(<Text f_justify />).toJSON();
      expect(component).toHaveStyleRule('text-align', 'justify');
    });
  });
    
  describe('Decoration', () => {
    test('f_underline', () => {
      const component = renderer.create(<Text f_underline />).toJSON();
      expect(component).toHaveStyleRule('text-decoration', 'underline');
    });
  
    test('f_line_through', () => {
      const component = renderer.create(<Text f_line_through />).toJSON();
      expect(component).toHaveStyleRule('text-decoration', 'line-through');
    });
  
    test('f_no_underline', () => {
      const component = renderer.create(<Text f_no_underline />).toJSON();
      expect(component).toHaveStyleRule('text-decoration', 'none');
    });
  });
  
  describe('Transform', () => {
    test('ft_uppercase', () => {
      const component = renderer.create(<Text ft_uppercase />).toJSON();
      expect(component).toHaveStyleRule('text-transform', 'uppercase');
    });
  
    test('ft_lowercase', () => {
      const component = renderer.create(<Text ft_lowercase />).toJSON();
      expect(component).toHaveStyleRule('text-transform', 'lowercase');
    });
  
    test('ft_capitalize', () => {
      const component = renderer.create(<Text ft_capitalize />).toJSON();
      expect(component).toHaveStyleRule('text-transform', 'capitalize');
    });
  
    test('ft_normal', () => {
      const component = renderer.create(<Text ft_normal />).toJSON();
      expect(component).toHaveStyleRule('text-transform', 'none');
    });
  });
  
  describe('Wrap', () => {
    test('f_wrap_space', () => {
      const component = renderer.create(<Text f_wrap_space />).toJSON();
      expect(component).toHaveStyleRule('white-space', 'normal');
    });
  
    test('f_wrap_word', () => {
      const component = renderer.create(<Text f_wrap_word />).toJSON();
      expect(component).toHaveStyleRule('overflow-wrap', 'break-word');
    });
  
    test('f_wrap_letter', () => {
      const component = renderer.create(<Text f_wrap_letter />).toJSON();
      expect(component).toHaveStyleRule('word-break', 'break-all');
    });
  
    test('f_no_wrap', () => {
      const component = renderer.create(<Text f_no_wrap />).toJSON();
      expect(component).toHaveStyleRule('white-space', 'nowrap');
      expect(component).toHaveStyleRule('overflow-wrap', 'normal');
      expect(component).toHaveStyleRule('word-break', 'normal');
    });
  
    test('f_truncate', () => {
      const component = renderer.create(<Text f_truncate />).toJSON();
      expect(component).toHaveStyleRule('overflow', 'hidden');
      expect(component).toHaveStyleRule('text-overflow', 'ellipsis');
      expect(component).toHaveStyleRule('white-space', 'nowrap');
    });
  });
});
