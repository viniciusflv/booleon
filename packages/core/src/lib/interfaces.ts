import { FC } from 'react';

import { MediaQueries, PseudoElements } from './constants';
export type TupleKey<T> = T extends readonly (readonly [infer K, Function])[]
  ? K extends string
    ? K
    : K extends readonly string[]
    ? K[0]
    : never
  : never;

export type TupleValue<T> = T extends readonly (readonly [infer K, Function])[]
  ? K extends string
    ? string
    : K extends readonly string[]
    ? boolean
    : never
  : never;

export type Tuple = readonly (readonly [
  string | readonly string[],
  (value: string | boolean) => string,
])[];

export type Entry<T extends Tuple> = {
  [key in TupleKey<T>]?: TupleValue<T>;
};

type Prefix = { [key in MediaQueries | PseudoElements]?: boolean };

type Prefixed<T = {}> = T & Prefix;

type Props<T = {}> = Prefixed<T | { [key in string]?: boolean | string }>;

export type BooleonProps<T> = FC<Props<T>>;

export type BooleonHtmlProps<T> = BooleonProps<T & React.HTMLProps<T>>;

export type Booleon<E extends keyof React.ReactDOM | string, T = {}> = {
  [key in E]: BooleonHtmlProps<T>;
};
