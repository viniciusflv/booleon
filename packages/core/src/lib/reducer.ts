import { Indexer, ReducedProps, Medias, Pseudo } from './interfaces';
import { fastHash } from './fastHash';
import { medias, mediasMap, pseudo } from './constants';

const prefixRegex = /(\w+)__(.*?)\w+/g;

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

function propsReducer<T>(props: T, indexer: Indexer<T>) {
  return Object.keys(props).reduce((acc, key) => {
    if (key.match(prefixRegex)) {
      const prefix = key.split('__')[0] as keyof ReducedProps<string>;
      const cleanKey = key.replace(`${prefix}__`, '');
      if (!acc[prefix]) acc[prefix] = '';
      acc[prefix] += cssReducer<T>(cleanKey, props[key], indexer);
    } else {
      if (!acc.style) acc.style = '';
      acc.style += cssReducer<T>(key, props[key], indexer);
    }
    return acc;
  }, {} as ReducedProps<string>);
}

function classReducer<T>(props: T, indexer: Indexer<T>): [string, string] {
  const reducedCss = propsReducer<T>(props, indexer);
  const className = `bl-${fastHash(Object.values(reducedCss).join(''))}`;
  const classes = Object.keys(reducedCss).reduce((acc, key) => {
    const css = reducedCss[key as keyof ReducedProps<string>];
    switch (true) {
      case pseudo.includes(key as Pseudo):
        acc += `.${className}:${key}{${css}}`;
        break;
      case medias.includes(key as Medias):
        const breakpoint = mediasMap.get(key as Medias);
        acc += `@media${breakpoint}{.${className}{${css}}}`;
        break;
      default:
        acc += `.${className}{${css}}`;
    }
    return acc;
  }, '');


  return [className, classes];
}

export function useReducer<T>(
  props: T | React.HTMLProps<{}>,
  indexer: Indexer<T>,
): [string, string, React.HTMLProps<{}>] {
  const [htmlProps, booleonProps] = categorizeProps(props, indexer);
  const [id, classes] = classReducer(booleonProps, indexer);

  return [id, classes, htmlProps];
}
