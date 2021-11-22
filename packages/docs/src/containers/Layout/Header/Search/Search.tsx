import { useState } from 'react';

import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { Drop, DropContent, DropTrigger, Link, Field } from '@booleon/ui';

import { Link as GatsbyLink } from 'gatsby';

import { useSearch } from '../../../../fragments/DocsSearchFragment';

const _Div = booleon.div(modules);
const _Span = booleon.span(modules);

function Search() {
  const [query, setQuery] = useState('');
  const results = useSearch(query);
  return (
    <Drop>
      <DropTrigger>
        <Field
          hidden
          type="text"
          aria-label="Search Docs"
          placeholder="Search Docs"
          value={query}
          onChange={({ target: { value } }: any) => setQuery(value)}
        />
      </DropTrigger>
      <DropContent>
        {results?.length ? (
          <_Div
            mt_10px
            bd_radius_10px
            sd_4
            bg_color_var_prismjs_background
            sm__min_w_30vw
            w_full
            max_w_500px
          >
            {results?.map(({ slug, title, match }, i) => (
              <>
                <Link key={slug} as={GatsbyLink} to={`/${slug}`}>
                  <_Span flex col p_20px gap_10px>
                    {title ? <strong>{title}</strong> : null}
                    {match ? (
                      <_Span ft_size_12px ft_truncate>
                        {match}
                      </_Span>
                    ) : null}
                  </_Span>
                </Link>
                {i < results?.length - 1 ? (
                  <hr
                    style={{ width: '90%', margin: 'auto', borderBottom: 0 }}
                  />
                ) : null}
              </>
            ))}
          </_Div>
        ) : null}
      </DropContent>
    </Drop>
  );
}

export default Search;
