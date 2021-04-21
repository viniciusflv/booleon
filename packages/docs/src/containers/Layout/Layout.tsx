import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { SEO } from '../SEO';
import { Aside } from './Aside';
import { Header } from './Header';
import { MDX } from './MDX';

const __Section = booleon.section(modules);
const __Main = booleon.main(modules);
function Layout({ children, pageContext, path }: any) {
  return (
    <MDX>
      <__Section
        h_min_screen
        w_full
        bg_color_efefef
        dark__bg_color_22202c
        // grid
        // md__cols_auto_1fr_auto
        // areas={`
        //   "HEADER HEADER HEADER"
        //   "x x x"
        // `}
      >
        <SEO {...pageContext?.frontmatter} />
        <Header area_HEADER />
        <__Main flex m_auto w_max_1440px>
          <Aside path={path?.replace(/\/|\\/, '')}>
            <__Section
              area_MAIN
              h_min_screen
              w_max_1440px
              w_full
              p_20
              md__p_100>
              {children}
            </__Section>
          </Aside>
        </__Main>
      </__Section>
    </MDX>
  );
}

export default Layout;
