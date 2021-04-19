import { useStaticQuery, graphql } from 'gatsby';

type NavData = {
  allMdx: {
    edges: {
      node: {
        slug: string;
        frontmatter: {
          title: string;
        };
      };
    }[];
  };
};

export function useNavData() {
  const {
    allMdx: { edges },
  } = useStaticQuery<NavData>(graphql`
    query {
      allMdx(
        filter: { slug: { regex: "/^docs/" } }
        sort: { fields: [slug], order: ASC }
      ) {
        edges {
          node {
            slug
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  return edges?.map(({ node }) => ({
    path: node?.slug,
    title: node?.frontmatter?.title,
  }));
}
