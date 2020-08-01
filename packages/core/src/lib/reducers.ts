import { ReducedProps, Indexer, Medias, Pseudo } from "./interfaces";
import { fastHash } from "../lib/fastHash";
import { medias, mediasMap, pseudo } from "../lib/constants";

function cssReducer(key: string, value: any, ...indexers: Indexer<any>[]) {
  if (value) {
    const merged = indexers.reduce((acc, indexer) => [...acc, ...indexer], []);
    return merged.reduce((acc, [index, cb]) => {
      if (index instanceof RegExp) {
        const match = key.match(index);
        if (match) {
          const groups = match[0].replace(match[1], "").replace(/_/g, " ");
          acc += cb(groups);
        }
      } else if (index && value && index === key) {
        acc += cb(value);
      }
      return acc;
    }, '');
  }
  return '';
}

const prefixRegex = /(\w+)__(.*?)\w+/g;
export const propsReducer = (props: any,...indexers: Indexer<any>[]) =>
  Object.keys(props).reduce((acc, key) => {
    if (key.match(prefixRegex)) {
      const prefix = key.split("__")[0] as keyof ReducedProps;
      const cleanKey = key.replace(`${prefix}__`, "");
      if (!acc[prefix]) acc[prefix] = '';
      acc[prefix] += cssReducer(cleanKey, props[key], ...indexers);
    } else {
      if (!acc.style) acc.style = '';
      acc.style += cssReducer(key, props[key], ...indexers);
    }
    return acc;
  }, {} as ReducedProps);

export function classReducer(props: any,...indexers: Indexer<any>[]) {
  const reducedCss = propsReducer(props,...indexers);
  const className = `bl-${fastHash(Object.values(reducedCss).join(""))}`;
  const classes = Object.keys(reducedCss).reduce((acc, key) => {
    const css = reducedCss[key as keyof ReducedProps];
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
  }, "");
  return [className, classes];
}
