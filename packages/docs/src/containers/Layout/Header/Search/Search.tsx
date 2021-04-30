import { useState } from 'react';

import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { useSearch } from './hooks';

const __Form = booleon.form(modules);
const __Div = booleon.div(modules);
function Search() {
  const [query, setQuery] = useState('dx');
  const results = useSearch(query);
  console.log(JSON.stringify(results, undefined, 2));
  return (
    <__Form relative>
      <input
        type="text"
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
      />
      <__Div absolute bottom_neg_200>
        {results?.map(({ match }) =>
          match ? <div key={match}>{match}...</div> : null,
        )}
      </__Div>
    </__Form>
  );
}

export default Search;
