import modules from '@booleon/modules';
import { useTheme, booleon } from '@booleon/react';
import { Svg } from '@booleon/ui';

import { Link } from 'gatsby';

import { logo } from '../../../assets';

const __Header = booleon.header(modules);
const __Nav = booleon.nav(modules);
const __Label = booleon.label(modules);
const __Div = booleon.div(modules);
const __Link = booleon(Link, modules);
function Header(props: any) {
  const { toggleTheme } = useTheme();
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
        sd_6
        bdb_1_solid_d55901
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
            <button onClick={toggleTheme}>TOGGLE</button>
          </__Div>
        </__Div>
      </__Nav>
    </__Header>
  );
}

export default Header;
