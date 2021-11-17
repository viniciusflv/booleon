import modules, {
  background,
  border,
  container,
  flex,
  sizing,
  spacing,
} from '@booleon/modules';
import { booleon, useTheme } from '@booleon/react';
import { Svg, Link } from '@booleon/ui';

import { Link as GatsbyLink } from 'gatsby';

import { dark, github, light, logo } from '../../../assets';
import { Search } from './Search';

const _Header = booleon.header(sizing);
const _Nav = booleon.nav({
  ...flex,
  ...container,
  ...sizing,
  ...border,
  ...background,
});
const _Div = booleon.div({ ...flex, ...sizing, ...spacing });
const _Button = booleon.button(modules);

export function Header({ isDocs = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <_Header h_8vh min_h_60rxm max_h_80rxm w_100$>
      <_Nav
        fixed
        z_max
        flex
        h_8vh
        min_h_60rxm
        max_h_80rxm
        w_100$
        dark__bdb_1_solid_000
        bdb_1_solid_d5d5d5
        bg_color_fff
        dark__bg_color_22202c
      >
        <_Div flex grow cross_center max_w_1440px m_auto px_20rxm>
          <Link to="/" as={GatsbyLink} first={logo} ft_size_25rxm>
            Booleon
          </Link>
          <_Div flex grow main_end cross_center gap_20rxm>
            {isDocs ? (
              <Search />
            ) : (
              <Link to="/docs" as={GatsbyLink}>
                Documentation
              </Link>
            )}
            <Link
              ft_size_20rxm
              first={github}
              title="Github link"
              target="__blank"
              href="https://github.com/viniciusflv/booleon/"
            />
            <_Button
              flex
              ol_none
              cross_center
              bd_none
              p_0
              bg_transparent
              ft_color_inherit
              important__ft_size_30rxm
              hover__cr_pointer
              hover__ft_color_d55901
              focus__ft_color_d55901
              title="Toggle Theme"
              onClick={toggleTheme}
            >
              <Svg {...(theme === 'dark' ? dark : light)} width="1em" />
            </_Button>
          </_Div>
        </_Div>
      </_Nav>
    </_Header>
  );
}
