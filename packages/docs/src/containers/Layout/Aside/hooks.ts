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
      ...DocsNavFragment
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
