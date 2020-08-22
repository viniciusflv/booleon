import { Indexer } from './interfaces';
import {
  MediaQueries,
  PseudoElements,
  mediaQueries,
  prefixRegex,
  pseudoElements,
} from './constants';
import { fastHash } from './fastHash';

function propIsBooleon<T>(key: string, indexer: Indexer<T>) {
  return indexer
    .map(([index]) =>
      index instanceof RegExp
        ? Boolean(key.match(index))
        : key === index || Boolean((key as string).match(prefixRegex)),
    )
    .includes(true);
}

function categorizeProps<T>(
  props: T | React.HTMLProps<{}>,
  indexer: Indexer<T>,
): [React.HTMLProps<{}>, T] {
  return Object.keys(props).reduce(
    (acc, key) => {
      propIsBooleon<T>(key, indexer)
        ? (acc[1] = { ...acc[1], [key]: props[key] })
        : (acc[0] = { ...acc[0], [key]: props[key] });
      return acc;
    },
    [{}, {} as T],
  );
}

function cssReducer<T>(key: string, value: any, indexer: Indexer<T>) {
  if (!value) return '';

  return indexer.reduce((acc, [index, cb]) => {
    if (index instanceof RegExp) {
      const match = key.match(index);
      if (match) {
        const groups = match[0].replace(match[1], '').replace(/_/g, ' ');
        acc += cb(groups);
      }
    } else if (index && value && index === key) {
      acc += cb(value);
    }
    return acc;
  }, '');
}

const handlePseudo = (prefix: PseudoElements) =>
  new Map(pseudoElements).get(prefix);

const handleMedias = (prefix: MediaQueries) =>
  `@media${new Map(mediaQueries).get(prefix)}`;

const propsReducer = (id: string, booleonProps: any) =>
  Object.keys(booleonProps).reduce((acc, key) => {
    const match = key.match(prefixRegex);
    if (match) {
      const prefix = match[0]
        .split('__')
        .filter(Boolean)
        .map(
          (prefix) =>
            handlePseudo(prefix as PseudoElements) ||
            handleMedias(prefix as MediaQueries),
        )
        .join('');

      const cleanKey = key.replace(match[0], '');
      const prefixKey = prefix.match(/@media/g) ? prefix : `${id}${prefix}`;
      return {
        ...acc,
        [prefixKey]: { ...acc[prefixKey], [cleanKey]: booleonProps[key] },
      };
    } else return { ...acc, [id]: { ...acc[id], [key]: booleonProps[key] } };
  }, {});

const classReducer = (
  id: string,
  key: string,
  reducedProps: any,
  indexer: any,
) =>
  `.${id}{${Object.keys(reducedProps[key])
    .map((k) => {
      return cssReducer(k, reducedProps[key][k], indexer);
    })
    .join('')}}`;

export function useReducer<T>(
  props: T | React.HTMLProps<{}>,
  indexer: Indexer<T>,
): [string, string, React.HTMLProps<{}>] {
  const [htmlProps, booleonProps] = categorizeProps(props, indexer);
  const id = `bl-${fastHash(Object.keys(booleonProps).join(''))}`;
  const reducedProps = propsReducer(id, booleonProps);
  const classes = Object.keys(reducedProps).reduce((acc, key) => {
    return (acc += key.match(/@media/g)
      ? `${key}{${classReducer(id, key, reducedProps, indexer)}}`
      : classReducer(key, key, reducedProps, indexer));
  }, '');

  return [id, classes, htmlProps];
}
