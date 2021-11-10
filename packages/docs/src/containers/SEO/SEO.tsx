import { Helmet } from 'react-helmet';

import { useSiteMetadata } from '../../fragments/SiteFragment';
import type { SEOProps } from './SEO.types';

export function SEO(props: SEOProps) {
  const siteMetadata = useSiteMetadata();

  const meta = { ...siteMetadata, ...props };

  return (
    <Helmet
      defaultTitle={meta?.title}
      titleTemplate={meta?.titleTemplate}
      defer={false}
      htmlAttributes={{ lang: meta?.locale }}
    >
      <title>{meta?.title}</title>
      <meta content={meta?.title} property="og:title" />
      <meta content={meta?.description} name="description" />
      <meta content={meta?.description} itemProp="description" />
      <meta content={meta?.description} property="og:description" />
      <meta content={meta?.keywords} name="keywords" />
      <meta content={meta?.author} name="author" />
      <meta content={meta?.siteName} itemProp="name" />
      <meta content={meta?.siteName} property="og:site_name" />
      <meta content={meta?.siteUrl} property="og:url" />
      <meta content={meta?.siteUrl + meta?.image.path} itemProp="image" />
      <meta content={meta?.siteUrl + meta?.image.path} property="og:image" />
      <meta content={meta?.image.type} property="og:image:type" />
      <meta content={meta?.image.size} property="og:image:width" />
      <meta content={meta?.image.size} property="og:image:height" />
      <meta content={meta?.locale} property="og:locale" />
      <meta content="website" property="og:type" />
    </Helmet>
  );
}
