import { FC } from 'react';

export type KeyInType<T extends string | number | symbol> = {
  [key in T]?: boolean;
};

export type KeyInString<T = {}> = T &
  {
    [key in string]?: boolean;
  };

type Options =
  | 'focus__PROP'
  | 'after__PROP'
  | 'before__PROP'
  | 'active__PROP'
  | 'checked__PROP'
  | 'disabled__PROP'
  | 'hover__PROP'
  | 'visited__PROP'
  | 'child__PROP'
  | 'last__PROP'
  | 'first__PROP'
  | 'sibling__PROP'
  | 'odd__PROP'
  | 'even__PROP'
  | 'xs__PROP'
  | 'sm__PROP'
  | 'md__PROP'
  | 'lg__PROP'
  | 'xl__PROP';

type Prefix = { [key in Options]?: boolean };

type Prefixed<T = {}> = T & Prefix;

type Props<T = {}> = Prefixed<
  (T & React.HTMLProps<T>) | { [key in string]?: boolean | string | any }
>;

export type InferBooleon<T> = T extends Booleon<infer Z, infer P>
  ? Props<P>
  : never;

export type Indexer<T, R = () => string> = Array<
  [keyof T | R, (args: string | boolean) => string]
>;

export type Booleon<E extends keyof React.ReactDOM, T = {}> = {
  [key in E]: FC<Props<T>>;
};
