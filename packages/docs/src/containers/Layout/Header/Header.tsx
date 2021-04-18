import modules from '@booleon/modules';
import { useTheme, booleon } from '@booleon/react';

const __Header = booleon.header(modules);
function Header() {
  const { toggleTheme } = useTheme();
  return (
    <__Header h_80 bdb_1_solid_d55901 bg_color_fff dark__bg_color_191921>
      <button onClick={toggleTheme}>TOGGLE</button>
    </__Header>
  );
}

export default Header;
