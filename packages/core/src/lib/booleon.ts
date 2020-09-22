import { Indexer } from './interfaces';
import { RegexMap } from './RegexMap';
export function booleon<
  E extends readonly (keyof React.ReactDOM)[],
  T extends readonly (readonly [string, Function])[]
>(elements: E, tuples: T, indexers: Indexer) {
  const prop = 'fc_00f';
  const tupleMap = new Map(tuples);
  const indexerMap = new RegexMap(indexers);

  let res = tupleMap.get(prop)?.();
  res = res ? res : indexerMap.get(prop);

  console.log(res);
}
