import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { SEO } from '../SEO';
import { Aside } from './Aside';
import { Header } from './Header';

const __Section = booleon.section(modules);
const __Main = booleon.main(modules);
function Layout({ children, pageContext, path }: any) {
  return (
    <__Section
      h_min_screen
      w_full
      bg_color_efefef
      dark__bg_color_22202c
      grid
      md__cols_auto_1fr_auto
      areas={`
        "HEADER HEADER HEADER"
        "ASIDE_DOCS MAIN ASIDE_HEADINGS"
      `}>
      <SEO {...pageContext?.frontmatter} />
      <Header area_HEADER />
      <Aside path={path?.replace(/\/|\\/, '')}>
        <__Main area_MAIN h_min_screen w_max_1440px w_full p_20 md__p_100>
          {children}
        </__Main>
      </Aside>
    </__Section>
  );
}

export default Layout;
