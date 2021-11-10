import { graphql, useStaticQuery } from 'gatsby';

export const SiteMetadataFragment = graphql`
  fragment SiteMetadataFragment on Query {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        keywords
        siteName
        siteUrl
        author
        locale
        image {
          path
          type
          size
        }
      }
    }
  }
`;

export type SiteMetadata = {
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

export function useSiteMetadata() {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadata>(
    graphql`
      query {
        ...SiteMetadataFragment
      }
    `,
  );

  return siteMetadata;
}
