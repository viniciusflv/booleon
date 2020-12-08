import { PSEUDO_ELEMENTS, MEDIA_QUERIES } from '../constants';

/** Union | to intersection & */
export type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;

/** Union | to Tuple */
export type UnionToTuple<T> = UnionToIntersection<
  T extends any ? (t: T) => T : never
> extends (_: any) => infer W
  ? readonly [...UnionToTuple<Exclude<T, W>>, W]
  : readonly [];

export type ConcatTuples<M extends readonly any[]> = UnionToTuple<M[number]>;

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
  BooleonCallback,
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

/**
 * Media queries prefixer
 */
export type MediaQueries = typeof MEDIA_QUERIES[number][0];

export type Keyframe = 'from' | 'to';

export type Prefix = PseudoElements | MediaQueries | Keyframe;

/**
 * Map key value types from @type {BooleonModule}
 * with @type {MediaQueries} @type {PseudoElements}
 */
export type BooleonProps<M extends BooleonModule> =
  | Props<string, BooleonModuleValues>
  | Props<
      `${Prefix}__${BooleonModuleKeys<M>}` | BooleonModuleKeys<M>,
      BooleonModuleValues
    >;

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
> = Props<E, BooleonFC<M>>;
