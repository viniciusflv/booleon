import { KEYFRAMES, MEDIA_QUERIES, PSEUDO_ELEMENTS } from '../constants';
import {
  Props,
  BooleonModule,
  Keyframes,
  MediaQueries,
  PseudoElements,
  ReducedProps,
} from '../types';
import { cssCompiler } from './cssCompiler';

const handlePrefix = ({
  acc,
  entrie,
  css,
}: {
  acc: Props<string, string>;
  entrie?: string;
  css: string;
}) => {
  return entrie
    ? {
        ...acc,
        [entrie]: acc?.[entrie] ?? '' + css,
      }
    : acc;
};

export function propsReducer<P extends Props, M extends BooleonModule>(
  props: P,
  module: M,
) {
  const prefixRegex = /(?<prefix>(.*)__)(?<prop>.*)/;
  const pseudoMap = new Map(PSEUDO_ELEMENTS);
  const keyframeMap = new Map(KEYFRAMES);
  const mediasMap = new Map(MEDIA_QUERIES);
  return Object.keys(props).reduce((acc, key) => {
    const { prefix, prop } = key.match(prefixRegex)?.groups ?? {};
    if (prefix) {
      const prefixes = prefix.split('__');
      return {
        ...acc,
        pseudo: handlePrefix({
          acc: acc?.pseudo,
          css: cssCompiler(prop, props[key], module),
          entrie: prefixes.reduce(
            (acc, pf) => (acc += pseudoMap.get(pf as PseudoElements) ?? ''),
            '',
          ),
        }),
        keyframe: handlePrefix({
          acc: acc?.keyframe,
          css: cssCompiler(prop, props[key], module),
          entrie: keyframeMap.get(prefixes[0] as Keyframes),
        }),
        medias: handlePrefix({
          acc: acc?.medias,
          css: cssCompiler(prop, props[key], module),
          entrie: mediasMap.get(prefixes[0] as MediaQueries),
        }),
      };
    }
    return { ...acc, css: cssCompiler(key, props[key], module) };
  }, {} as ReducedProps);
}
