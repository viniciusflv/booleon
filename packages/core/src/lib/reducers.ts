import { Indexer, Medias, Pseudo, ReducedProps } from './interfaces';
import { fastHash } from '../lib/fastHash';
import { medias, mediasMap, pseudo } from '../lib/constants';

const prefixRegex = /(\w+)__(.*?)\w+/g;
export const propsReducer = (props: any) =>
  Object.keys(props).reduce((acc, key) => {
    if (key.match(prefixRegex)) {
      const prefix = key.split('__')[0] as keyof ReducedProps;
      const cleanKey = key.replace(`${prefix}__`, '');
      acc[prefix] = { ...acc[prefix], [cleanKey]: props[key] };
    } else {
      acc.style = { ...acc.style, [key]: props[key] };
    }
    return acc;
  }, {} as ReducedProps);

export function styleReducer<T = any>(props: any, ...indexers: Indexer<T>[]) {
  const merged = indexers.reduce((acc, indexer) => [...acc, ...indexer], []);
  return Object.keys(props).reduce((acc, key) => {
    if (props[key]) {
      merged.forEach(([index, cb]) => {
        if (props[index] && index === key) {
          acc += cb(props[index]);
        } else if (index instanceof RegExp) {
          const match = key.match(index);
          if (match) {
            const groups = match[0].replace(match[1], '').replace(/_/g, ' ');
            acc += cb(groups);
          }
        }
      });
    }
    return acc;
  }, '');
}

export const cssReducer = (props: ReducedProps, ...indexers: Indexer<any>[]) =>
  Object.keys(props).reduce<ReducedProps>(
    (acc: ReducedProps, key) => ({
      ...acc,
      [key]: styleReducer(props[key as keyof ReducedProps], ...indexers),
    }),
    {} as ReducedProps
  );

export function classReducer(reducedCss: any) {
  const className = `bl-${fastHash(Object.values(reducedCss).join(''))}`;
  const classes = Object.keys(reducedCss).reduce((acc, key) => {
    const css = reducedCss[key];
    switch (true) {
    case pseudo.includes(key as Pseudo):
      acc += `.${className}:${key}{${css}}`;
      break;
    case medias.includes(key as Medias):
      acc += `@media${mediasMap.get(key as Medias)}{.${className}{${css}}}`;
      break;
    default:
      acc += `.${className}{${css}}`;
    }
    return acc;
  }, '');
  return [className, classes];
}
