import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { SEO } from '../SEO';
import { Aside } from './Aside';
import { Header } from './Header';
import { MDX } from './MDX';

const __Section = booleon.section(modules);
const __Main = booleon.main(modules);
function Layout({ children, pageContext, path }: any) {
  const isDocs = path.startsWith('/docs');
  return (
    <MDX>
      <__Section h_min_screen h_full w_full bg_color_fff dark__bg_color_22202c>
        <SEO {...pageContext?.frontmatter} />
        <Header isDocs={isDocs} />
        {isDocs ? (
          <__Main grid cols_auto_1fr_auto w_max_1440 w_full m_auto px_20>
            <Aside slug={path?.replace(/\/|\\/, '')}>
              <__Section h_min_screen w_min_full w_full p_20 md__p_60>
                {children}
              </__Section>
            </Aside>
          </__Main>
        ) : (
          children
        )}
      </__Section>
    </MDX>
  );
}

export default Layout;
