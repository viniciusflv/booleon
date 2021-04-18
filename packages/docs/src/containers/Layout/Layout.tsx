import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { Header } from './Header';

const __Section = booleon.section(modules);
const __Main = booleon.main(modules);
function Layout({ children }: any) {
  return (
    <__Section h_min_screen w_full bg_color_efefef dark__bg_color_22202c>
      <Header />
      <__Main p_20 md__p_100>
        {children}
      </__Main>
    </__Section>
  );
}

export default Layout;
