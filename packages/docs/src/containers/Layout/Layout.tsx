import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { SEO } from '../SEO';
import { Aside } from './Aside';
import { Header } from './Header';
import { MDX } from './MDX';

const __Section = booleon.section(modules);
const __Main = booleon.main(modules);
const __Footer = booleon.footer(modules);
function Layout({ children, pageContext, path }: any) {
  return (
    <MDX>
      <__Section
        h_min_screen
        w_full
        bg_color_efefef
        dark__bg_color_22202c
        grid
        md__cols_1fr_auto_1fr
        areas={`
          "HEADER HEADER HEADER"
          "ASIDE_DOCS MAIN ASIDE_HEADINGS"
          "FOOTER FOOTER FOOTER"
        `}>
        <SEO {...pageContext?.frontmatter} />
        <Header area_HEADER />
        <Aside slug={path?.replace(/\/|\\/, '')}>
          <__Main area_MAIN h_min_screen w_max_1024 w_full p_20 md__p_100>
            {children}
          </__Main>
        </Aside>
        <__Footer
          area_FOOTER
          h_300
          bdt_1_solid_d5d5d5
          dark__bdt_1_solid_000000
          bg_color_fff
          dark__bg_color_191921
        />
      </__Section>
    </MDX>
  );
}

export default Layout;
