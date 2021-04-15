import { defaultPrefixes } from '../lib';

/** Generic Props */
export type Props<K extends string | number | symbol = string, V = any> = {
  [key in K]?: V;
};

/** Function that runs once @type {Props} matches @type {Object} key */
export type BooleonCallback = (value?: any) => string;

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
 * Props Prefixes
 */
export type Prefixes<P extends Props<string, PrefixHandler>> =
  | Exclude<keyof P, number | symbol>
  | Exclude<keyof typeof defaultPrefixes, 'undefined' | 'css'>;

/**
 * Map key value types from @type {BooleonModule}
 * with @type {Prefixes}
 */
export type BooleonProps<
  M extends BooleonModule | unknown,
  P extends Props<string, PrefixHandler>
> =
  | Props<string, BooleonModuleValues>
  | Props<
      `${Prefixes<P>}__${BooleonModuleKeys<M>}` | BooleonModuleKeys<M>,
      BooleonModuleValues
    >;
