import { graphql } from 'gatsby';

export const DocsNavFragment = graphql`
  fragment DocsNavFragment on Query {
    allMdx(
      filter: { slug: { regex: "/^docs/" } }
      sort: { fields: [frontmatter___priority], order: ASC }
    ) {
      edges {
        node {
          slug
          frontmatter {
            priority
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
