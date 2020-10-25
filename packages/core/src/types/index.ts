import { PSEUDO_ELEMENTS, MEDIA_QUERIES } from '../constants';

/** Readonly Array */
export type Tuple<T> = readonly T[];

/** Generic React Props */
export type Props<K extends string | number = string, V = any> = {
  [key in K]: V;
};

/** Key that matches your react prop to return css */
export type BooleonIndexer = string | Tuple<string>;

/** Function that runs once @type {Props} matches @type {BooleonIndexer} */
export type BooleonCallback =
  | (() => string)
  | ((value: string | boolean) => string);

/**
 * Key value structure similar to a @type {Map} entry
 * @example
 * [
 *  ['match', () => 'css'],
 *  [['match', '_(regex)'], (regexGroupValue) => `customCss: ${regexGroupValue};`]
 * ]
 * */
export type BooleonModule = Tuple<readonly [BooleonIndexer, BooleonCallback]>;

/**
 * Extract @type {BooleonIndexer} and returns a string literal type
 */
export type BooleonModuleKeys<T> = T extends readonly (readonly [
  infer K,
  Function,
])[]
  ? K extends string
    ? K
    : K extends readonly string[]
    ? K[0]
    : never
  : never;

/**
 * Map @type {BooleonCallback} and returns a string and/or boolean type
 */
export type BooleonModuleValues<T> = T extends readonly (readonly [
  infer K,
  Function,
])[]
  ? K extends string
    ? string
    : K extends readonly string[]
    ? boolean
    : never
  : never;

/**
 * Pseudo elements prefixer
 */
export type PseudoElements = typeof PSEUDO_ELEMENTS[number][0];

/**
 * Media queries prefixer
 */
export type MediaQueries = typeof MEDIA_QUERIES[number][0];

/**
 * Map key value types from @type {BooleonModule}
 * with @type {MediaQueries} @type {PseudoElements}
 */
export type BooleonProps<M extends BooleonModule> =
  | {
      [key in
        | MediaQueries
        | PseudoElements
        | BooleonModuleKeys<M>]?: BooleonModuleValues<M>;
    }
  | { [key in string]?: BooleonModuleValues<M> };

/**
 * @type {BooleonProps} and @type {React.HTMLProps<M>}
 */
export type BooleonHtmlProps<M extends BooleonModule> = React.HTMLProps<M> &
  BooleonProps<M>;

/**
 * @type {BooleonHtmlProps} @type {FunctionComponent}
 */
export type BooleonFC<M extends BooleonModule> = React.FC<BooleonHtmlProps<M>>;

/**
 * Map elements with @type {BooleonFC}
 */
export type BooleonComponent<
  E extends keyof React.ReactDOM | string,
  M extends BooleonModule
> = {
  [key in E]: BooleonFC<M>;
};
