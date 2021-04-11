import { defaultPrefixes } from '../lib';

/** Generic Props */
export type Props<K extends string | number | symbol = string, V = any> = {
  [key in K]?: V;
};

/** Function that runs once @type {Props} matches @type {Object} key */
export type BooleonCallback = (value?: string | boolean) => string;

/**
 *
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
 * Props Prefixes
 */
export type Prefixes = Exclude<
  keyof typeof defaultPrefixes,
  'undefined' | 'css'
>;

export type PrefixHandler = (arg: PrefixHandlerArg, wrap?: boolean) => string;

export type PrefixHandlerArg = {
  key: string;
  value: Props;
  className: string;
  prefixes: Props<string, PrefixHandler>;
  recursiveCompiler: (props: Props) => string;
};

/**
 * Extract key and returns a string literal type
 */
export type BooleonModuleKeys<T> = keyof T extends string ? keyof T : never;

/**
 * @type {BooleonCallback} arg is a string and/or boolean type
 */
export type BooleonModuleValues = boolean | string;

/**
 * Map key value types from @type {BooleonModule}
 * with @type {Prefixes}
 */
export type BooleonProps<M extends BooleonModule> =
  | Props<string, BooleonModuleValues>
  | Props<
      `${Prefixes}__${BooleonModuleKeys<M>}` | BooleonModuleKeys<M>,
      BooleonModuleValues
    >;
