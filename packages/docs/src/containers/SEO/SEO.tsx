import { Helmet } from 'react-helmet';

import { graphql, useStaticQuery } from 'gatsby';

function SEO() {
  const {
    site: { siteMetadata: seo },
  } = useStaticQuery(
    graphql`
      query {
        site {
          ...SiteFragment
        }
      }
    `,
  );

  return (
    <Helmet
      defaultTitle={seo?.title}
      titleTemplate={seo?.titleTemplate}
      defer={false}
      htmlAttributes={{ lang: seo?.locale }}>
      <title>{seo?.title}</title>
      <meta content={seo?.title} property="og:title" />
      <meta content={seo?.description} name="description" />
      <meta content={seo?.description} itemProp="description" />
      <meta content={seo?.description} property="og:description" />
      <meta content={seo?.keywords} name="keywords" />
      <meta content={seo?.author} name="author" />
      <meta content={seo?.siteName} itemProp="name" />
      <meta content={seo?.siteName} property="og:site_name" />
      <meta content={seo?.siteUrl} property="og:url" />
      <meta content={seo?.siteUrl + seo?.image.path} itemProp="image" />
      <meta content={seo?.siteUrl + seo?.image.path} property="og:image" />
      <meta content={seo?.image.type} property="og:image:type" />
      <meta content={seo?.image.size} property="og:image:width" />
      <meta content={seo?.image.size} property="og:image:height" />
      <meta content={seo?.locale} property="og:locale" />
      <meta content="website" property="og:type" />
    </Helmet>
  );
}

export default SEO;
