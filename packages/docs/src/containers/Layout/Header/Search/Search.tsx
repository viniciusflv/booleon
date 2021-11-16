import { useState } from 'react';

import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { Drop, DropContent, DropTrigger, Link } from '@booleon/ui';

import { Link as GatsbyLink } from 'gatsby';

import { useSearch } from '../../../../fragments/DocsSearchFragment';

const _Div = booleon.div(modules);
const _Input = booleon.input(modules);
const _Span = booleon.span(modules);

function Search() {
  const [query, setQuery] = useState('');
  const results = useSearch(query);
  return (
    <Drop>
      <DropTrigger>
        <_Input
          w_full
          m_0
          px_20px
          py_10px
          bg_transparent
          ft_color_var_font_color
          hover__bd_2_solid_d55901
          focus__bd_2_solid_d55901
          bd_2_solid_d5d5d5
          dark__hover__bd_2_solid_d55901
          dark__focus__bd_2_solid_d55901
          dark__bd_2_solid_var_font_color
          bd_radius_50px
          ol_none
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
