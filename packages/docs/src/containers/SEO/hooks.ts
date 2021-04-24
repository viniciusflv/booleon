import { graphql, useStaticQuery } from 'gatsby';

type SiteMetadata = {
  site: {
    siteMetadata: {
      title: string;
      titleTemplate: string;
      description: string;
      keywords: string;
      siteName: string;
      siteUrl: string;
      author: string;
      locale: string;
      image: {
        path: string;
        type: string;
        size: string;
      };
    };
  };
};

export function useSitemetadata() {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadata>(
    graphql`
      query {
        ...SiteFragment
      }
    `,
  );

  return siteMetadata;
}
