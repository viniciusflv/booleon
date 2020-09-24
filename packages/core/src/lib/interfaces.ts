import { FC } from 'react';
import { MediaQueries, PseudoElements } from './constants';
type TupleKey<T> = T extends readonly (readonly [infer K, Function])[]
  ? K extends string
    ? K
    : K extends readonly string[]
    ? K[0]
    : never
  : never;

export type Tuple = readonly (readonly [
  string | readonly string[],
  Function,
])[];

export type Entry<T extends Tuple> = {
  [key in TupleKey<T>]?: boolean | string;
};

type Prefix = { [key in MediaQueries | PseudoElements]?: boolean };

type Prefixed<T = {}> = T & Prefix;

type Props<T = {}> = Prefixed<
  (T & React.HTMLProps<T>) | { [key in string]?: boolean | string | any }
>;

export type Booleon<E extends keyof React.ReactDOM, T = {}> = {
  [key in E]: FC<Props<T>>;
};
