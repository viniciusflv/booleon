import { graphql } from 'gatsby';

export const SiteFragment = graphql`
  fragment SiteFragment on Query {
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
