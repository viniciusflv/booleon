import { graphql, useStaticQuery } from 'gatsby';

export const NavDataFragment = graphql`
  fragment NavDataFragment on Query {
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

export type NavData = {
  allMdx: {
    edges: {
      node: {
        slug: string;
        frontmatter: {
          title: string;
          icon: string;
        };
        headings: { value: string; depth: number }[];
      };
    }[];
  };
};

export function useNavData(path: string) {
  const {
    allMdx: { edges },
  } = useStaticQuery<NavData>(graphql`
    query {
      ...NavDataFragment
    }
  `);

  const headings = edges
    ?.filter(({ node }) => node?.slug === path)
    ?.reduce((acc, { node: { headings } }) => [...acc, ...headings], []);

  const navigation = edges?.map(({ node }) => ({
    path: node?.slug,
    ...node?.frontmatter,
  }));

  return {
    headings,
    navigation,
  };
}
