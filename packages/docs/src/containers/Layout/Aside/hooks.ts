import { useStaticQuery, graphql } from 'gatsby';

type NavData = {
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

// const x = [
//   { label, path, child: [{ label, path}] },
//   { label, path },
// ];
