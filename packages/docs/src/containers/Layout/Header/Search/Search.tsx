import { useState } from 'react';

import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { Drop, Link } from '@booleon/ui';

import { Link as GatsbyLink } from 'gatsby';

import { useSearch } from './hooks';

const __Div = booleon.div(modules);
const __Input = booleon.input(modules);
const __Span = booleon.span(modules);
function Search() {
  const [query, setQuery] = useState('');
  const results = useSearch(query);
  return (
    <Drop>
      <Drop.Trigger>
        <__Input
          w_full
          m_0
          px_20
          py_10
          bg_transparent
          ft_color_var_font_color
          hover__bd_2_solid_d55901
          focus__bd_2_solid_d55901
          bd_2_solid_d5d5d5
          dark__hover__bd_2_solid_d55901
          dark__focus__bd_2_solid_d55901
          dark__bd_2_solid_var_font_color
          bd_radius_50
          ol_none
          type="text"
          aria-label="Search Docs"
          placeholder="Search Docs"
          value={query}
          onChange={({ target: { value } }: any) => setQuery(value)}
        />
      </Drop.Trigger>
      <Drop.Content>
        {results?.length ? (
          <__Div
            mt_10
            bd_radius_10
            sd_4
            bg_color_var_prismjs_background
            sm__w_min_30vw
            w_full
            w_max_500>
            {results?.map(({ slug, title, match }, i) => (
              <>
                <Link key={slug} as={GatsbyLink} to={`/${slug}`}>
                  <__Span flex col p_20 child__mb_10 last__mb_0>
                    {title ? <strong>{title}</strong> : null}
                    {match ? (
                      <__Span ft_size_12 ft_truncate>
                        {match}
                      </__Span>
                    ) : null}
                  </__Span>
                </Link>
                {i < results?.length - 1 ? (
                  <hr
                    style={{ width: '90%', margin: 'auto', borderBottom: 0 }}
                  />
                ) : null}
              </>
            ))}
          </__Div>
        ) : null}
      </Drop.Content>
    </Drop>
  );
}

export default Search;
