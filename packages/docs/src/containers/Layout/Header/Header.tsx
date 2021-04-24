import modules from '@booleon/modules';
import { useTheme, booleon } from '@booleon/react';
import { Svg } from '@booleon/ui';

import { Link } from 'gatsby';

import { logo, dark, light, github } from '../../../assets';

const __Header = booleon.header(modules);
const __Nav = booleon.nav(modules);
const __Label = booleon.label(modules);
const __Div = booleon.div(modules);
const __Link = booleon(Link, modules);
const __Button = booleon.button(modules);
function Header(props: any) {
  const { theme, toggleTheme } = useTheme();
  return (
    <__Header h_80 w_full {...props}>
      <__Nav
        fixed
        z_max
        flex
        h_80
        w_full
        py_10
        px_20
        dark__bdb_1_solid_000000
        bdb_1_solid_d5d5d5
        bg_color_fff
        dark__bg_color_191921>
        <__Div flex grow w_max_1440px m_auto>
          <__Link
            to="/"
            flex
            main_center
            cross_center
            ft_color_inherit
            ft_no_underline>
            <Svg w_60 mr_10 {...logo} />
            <__Label ft_size_25 h_45>
              Booleon
            </__Label>
          </__Link>
          <__Div flex grow main_end>
            <Svg w_30 {...github} />
            <__Button
              bd_none
              bg_transparent
              hover__cr_pointer
              ft_color_inherit
              hover__ft_color_d55901
              onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Svg w_30 {...dark} />
              ) : (
                <Svg w_30 {...light} />
              )}
            </__Button>
          </__Div>
        </__Div>
      </__Nav>
    </__Header>
  );
}

export default Header;
