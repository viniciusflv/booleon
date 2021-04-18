import modules from '@booleon/modules';
import { useTheme, booleon } from '@booleon/react';
import { Svg } from '@booleon/ui';

import { logo } from '../../../assets';

const __Header = booleon.header(modules);
const __Nav = booleon.nav(modules);
const __Label = booleon.label(modules);
const __Div = booleon.div(modules);
function Header() {
  const { toggleTheme } = useTheme();
  return (
    <__Header h_80>
      <__Nav
        fixed
        flex
        h_80
        w_full
        py_10
        px_20
        bdb_1_solid_d55901
        bg_color_fff
        dark__bg_color_191921>
        <__Div flex main_center cross_center>
          <Svg w_60 mr_10 {...logo} />
          <__Label ft_size_25 h_45>
            Booleon
          </__Label>
        </__Div>
        <__Div flex grow main_end>
          <button onClick={toggleTheme}>TOGGLE</button>
        </__Div>
      </__Nav>
    </__Header>
  );
}

export default Header;
