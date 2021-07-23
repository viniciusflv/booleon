// @ts-ignore
import { useFlexSearch } from 'react-use-flexsearch';

import { useStaticQuery, graphql } from 'gatsby';

type SearchData = {
  localSearchDocs: {
    id: string;
    name: string;
    publicIndexURL: string;
    publicStoreURL: string;
    index: string;
    store: {
      [key in string]: {
        slug: string;
        title: string;
        description?: string;
      };
    };
  };
};

type ResultData = {
  slug: string;
  title: string;
  description: string;
  headings: string;
};

export function useSearch(query: string) {
  const { localSearchDocs } = useStaticQuery<SearchData>(graphql`
    query {
      ...DocsSearchFragment
    }
  `);

  const results: ResultData[] = useFlexSearch(
    query,
    localSearchDocs?.index,
    localSearchDocs?.store,
  );

  return results.map(({ slug, title, description }) => {
    return {
      slug,
      title,
      match: description,
    };
  });
}
