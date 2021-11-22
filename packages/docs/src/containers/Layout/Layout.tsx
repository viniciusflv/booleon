import modules, {
  background,
  container,
  sizing,
  spacing,
} from '@booleon/modules';
import { booleon } from '@booleon/react';

import { SEO } from '../SEO';
import { Aside } from './Aside';
import { Header } from './Header';
import { MDX } from './MDX';

const _Layout = booleon.section({
  ...background,
  ...container,
  ...sizing,
  ...spacing,
});
const _Section = booleon.section({ ...sizing, ...spacing });
const _Main = booleon.main(modules);

export function Layout({ children, pageContext, path }: any) {
  const isDocs = path.startsWith('/docs');

  return (
    <MDX>
      <_Layout min_h_screen bg_color_fff dark__bg_color_22202c>
        <SEO {...pageContext?.frontmatter} />
        <Header isDocs={isDocs} />
        {isDocs ? (
          <_Main grid cols_auto_1fr_auto max_w_1440rxm w_full m_auto px_20rxm>
            <Aside slug={path?.replace(/\/|\\/, '')}>
              <_Section min_h_screen min_w_full w_full p_20rxm md__p_60rxm>
                {children}
              </_Section>
            </Aside>
          </_Main>
        ) : (
          children
        )}
      </_Layout>
    </MDX>
  );
}
