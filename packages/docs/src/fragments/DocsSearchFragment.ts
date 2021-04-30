import { graphql } from 'gatsby';

export const DocsSearchFragment = graphql`
  fragment DocsSearchFragment on Query {
    localSearchDocs {
      store
      index
    }
  }
`;
