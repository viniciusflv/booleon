import modules, { background, container } from '@booleon/modules';
import { booleon } from '@booleon/react';

import { SEO } from '../SEO';
import { Header } from './Header';

const _Layout = booleon.section({ ...background, ...container });
const _Main = booleon.main(modules);

export function Layout({ children, pageContext, path }: any) {
  const isDocs = path.startsWith('/docs');

  return (
    <_Layout h_min_screen h_100$ w_100$ bg_color_fff dark__bg_color_22202c>
      <SEO {...pageContext?.frontmatter} />
      <Header isDocs={isDocs} />
      {children}
    </_Layout>
  );
}
