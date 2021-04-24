import { graphql } from 'gatsby';

export const DocsNavFragment = graphql`
  fragment DocsNavFragment on Query {
    allMdx(
      filter: { slug: { regex: "/^docs/" } }
      sort: { fields: [slug], order: ASC }
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
            icon
          }
          headings {
            value
            depth
          }
        }
      }
    }
  }
`;
