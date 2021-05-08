import modules from '@booleon/modules';
import { useTheme, booleon } from '@booleon/react';
import { Svg, Link } from '@booleon/ui';

import { Link as GatsbyLink } from 'gatsby';

import { logo, dark, light, github } from '../../../assets';
import { Search } from './Search';

const __Header = booleon.header(modules);
const __Nav = booleon.nav(modules);
const __Div = booleon.div(modules);
const __Button = booleon.button(modules);
function Header({ isDocs, ...props }: any) {
  const { theme, toggleTheme } = useTheme();

  return (
    <__Header h_8vh h_min_60 h_max_80 w_full {...props}>
      <__Nav
        fixed
        z_max
        flex
        h_8vh
        h_min_60
        h_max_80
        w_full
        dark__bdb_1_solid_000
        bdb_1_solid_d5d5d5
        bg_color_fff
        dark__bg_color_22202c>
        <__Div flex grow cross_center w_max_1440px m_auto px_20>
          <Link
            to="/"
            as={GatsbyLink}
            first={logo}
            ft_size_25
            flex
            main_center
            cross_center
            child__cr_pointer
            ft_color_inherit
            ft_no_underline
            child_last__hidden
            child_first__w_min_30
            sm__child_last__block
            hover__ft_color_d55901>
            Booleon
          </Link>
          <__Div flex grow main_end cross_center child__mr_20 last__mr_0>
            {isDocs ? (
              <Search />
            ) : (
              <Link to="/docs" as={GatsbyLink}>
                Documentation
              </Link>
            )}
            <Link
              bd_none
              bg_transparent
              ft_color_inherit
              ft_size_20
              child_first__w_min_30
              hover__cr_pointer
              hover__ft_color_d55901
              first={github}
              title="Github link"
              target="__blank"
              href="https://github.com/viniciusflv/booleon/"
            />
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
