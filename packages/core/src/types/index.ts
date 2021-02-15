import { PSEUDO_ELEMENTS, MEDIA_QUERIES, KEYFRAMES } from '../constants';

/** Generic React Props */
export type Props<K extends string | number | symbol = string, V = any> = {
  [key in K]?: V;
};

/** Function that runs once @type {Props} matches @type {BooleonIndexer} */
export type BooleonCallback = (value?: any) => any;

/**
 * Key value structure similar to a @type {Map} entry
 * @example
 * {
 *  [Symbol('key_(.*)')]: (value: string) => `css-${value}`
 *  key: () => 'css'
 * }
 * */
export type BooleonModule = {
  [key in string | symbol]: BooleonCallback;
};

/**
 * Extract @type {BooleonIndexer} and returns a string literal type
 */
export type BooleonModuleKeys<T> = keyof T;

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
export type Prefixes = PseudoElements | MediaQueries | Keyframes | 'dark__PROP';

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
export type BooleonHtmlProps<M extends BooleonModule> = Omit<
  React.HTMLProps<any>,
  'content' | 'wrap'
> &
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
