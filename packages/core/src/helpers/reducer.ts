import { Indexer } from './interfaces';

export function reducerCss<T = any>(props: any, ...indexers: Indexer<T>[]) {
  const merged = indexers.reduce((acc, indexer) => [...acc, ...indexer], []);
  const styles = Object.keys(props).reduce((acc, key) => {
    merged.forEach(([index, cb]) => {
      if (index instanceof RegExp) {
        const match = key.match(index);
        if (match) {
          const groups = match[0].replace(match[1], '').replace(/_/g, ' ');
          acc += cb(groups);
        }
      } else if (props[index]) {
        acc += cb(props[index]);
      }
    });
    return acc;
  }, '');
  return styles;
}
