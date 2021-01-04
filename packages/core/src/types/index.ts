import { PSEUDO_ELEMENTS, MEDIA_QUERIES, KEYFRAMES } from '../constants';

/** Readonly Array */
export type Tuple<T> = readonly T[];

/** Generic React Props */
export type Props<K extends string | number = string, V = any> = {
  [key in K]?: V;
};

/** Key that matches your react prop to return css */
export type BooleonIndexer = string | Tuple<string>;

/** Function that runs once @type {Props} matches @type {BooleonIndexer} */
export type BooleonCallback = (value?: any) => string;

/**
 * Key value structure similar to a @type {Map} entry
 * @example
 * [
 *  ['match', () => 'css'],
 *  [['match', '_(regex)'], (regexGroupValue) => `customCss: ${regexGroupValue};`]
 * ]
 * */
export type BooleonModule = readonly (readonly [
  BooleonIndexer,
  BooleonCallback | readonly [BooleonCallback, BooleonModule],
])[];

/**
 * Extract @type {BooleonIndexer} and returns a string literal type
 */
export type BooleonModuleKeys<T> = T extends readonly (readonly [
  infer K,
  BooleonCallback,
])[]
  ? K extends string
    ? K
    : K extends readonly string[]
    ? K[0]
    : never
  : never;

/**
 * @type {BooleonCallback} arg is a string and/or boolean type
 */
export type BooleonModuleValues = boolean | string;

/**
 * Pseudo elements prefixer
 */
export type PseudoElements = typeof PSEUDO_ELEMENTS[number][0];
export type PseudoElementsValues = typeof PSEUDO_ELEMENTS[number][1];

/**
 * Media queries prefixer
 */
export type MediaQueries = typeof MEDIA_QUERIES[number][0];
export type MediaQueriesValues = typeof MEDIA_QUERIES[number][1];

/**
 * Keyframes prefixer
 */
export type Keyframes = typeof KEYFRAMES[number][0];
export type KeyframesValues = typeof KEYFRAMES[number][1];

/**
 * Props Prefixes
 */
export type Prefixes = PseudoElements | MediaQueries | Keyframes;

/**
 * Structured compiled css
 */
export type ReducedProps = {
  css: string;
  pseudo: Props<PseudoElementsValues | string, string>;
  medias: Props<MediaQueriesValues, string>;
  keyframe: Props<string, Props<KeyframesValues, string>>;
};

/**
 * Map key value types from @type {BooleonModule}
 * with @type {MediaQueries} @type {PseudoElements}
 */
export type BooleonProps<M extends BooleonModule> =
  | Props<string, BooleonModuleValues>
  | Props<Prefixes | BooleonModuleKeys<M>, BooleonModuleValues>;

/**
 * @type {BooleonProps} and @type {React.HTMLProps<any>}
 */
export type BooleonHtmlProps<M extends BooleonModule> = React.HTMLProps<any> &
  BooleonProps<M>;

/**
 * @type {BooleonHtmlProps} @type {FunctionComponent}
 */
export type BooleonFC<M> = M extends BooleonModule
  ? React.FC<BooleonHtmlProps<M>>
  : never;

/**
 * Map elements with @type {BooleonFC}
 */
export type BooleonComponent<
  E extends keyof React.ReactDOM | string,
  M extends BooleonModule
> = Props<E, (...modules: M[]) => BooleonFC<M>>;
