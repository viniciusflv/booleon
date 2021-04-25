import modules from '@booleon/modules';
import { useTheme, booleon } from '@booleon/react';
import { Svg, Link } from '@booleon/ui';

import { Link as GatsbyLink } from 'gatsby';

import { logo, dark, light, github } from '../../../assets';

const __Header = booleon.header(modules);
const __Nav = booleon.nav(modules);
const __Div = booleon.div(modules);
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
        <__Div flex grow cross_center w_max_1440px m_auto>
          <Link
            to="/"
            as={GatsbyLink}
            first={logo}
            md__ft_size_30
            ft_size_25
            flex
            main_center
            cross_center
            child__cr_pointer
            ft_color_inherit
            ft_no_underline
            hover__ft_color_d55901>
            Booleon
          </Link>
          <__Div flex grow main_end child__mr_10 last__mr_0>
            <Link
              bd_none
              bg_transparent
              hover__cr_pointer
              ft_color_inherit
              hover__ft_color_d55901
              title="Github link"
              target="__blank"
              href="https://github.com/viniciusflv/booleon/">
              <Svg w_30 {...github} />
            </Link>
            <__Button
              flex
              ol_none
              cross_center
              bd_none
              p_0
              bg_transparent
              ft_color_inherit
              hover__cr_pointer
              hover__ft_color_d55901
              focus__ft_color_d55901
              title="Toggle Theme"
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
