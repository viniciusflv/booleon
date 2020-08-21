import { FC } from 'react';
import { medias, pseudo } from './constants';

export type KeyInType<T extends string | number | symbol> = {
  [key in T]?: boolean;
};

export type KeyInString<T = {}> = T &
  {
    [key in string]?: boolean;
  };

type Options =
  | 'after__PROP'
  | 'before__PROP'
  | 'active__PROP'
  | 'checked__PROP'
  | 'disabled__PROP'
  | 'focus__PROP'
  | 'hover__PROP'
  | 'visited__PROP'
  // | 'siblign__PROP'
  | 'xs__PROP'
  | 'sm__PROP'
  | 'md__PROP'
  | 'lg__PROP'
  | 'xl__PROP';

type Prefix = { [key in Options]?: boolean };

type Prefixed<T = {}> = T & Prefix;

type Props<T = {}> = Prefixed<
  (T & React.HTMLProps<T>) | { [key in string]?: boolean | string }
>;

export type Indexer<T> = Array<
  [RegExp | keyof T, (args: string | boolean) => string]
>;

export type Medias = typeof medias[number];
export type Pseudo = typeof pseudo[number];

export type ReducedProps<T> = { [key in Medias | Pseudo]?: T } & { style: T };

export type Booleon<E extends keyof React.ReactDOM, T = {}> = {
  [key in E]: FC<Props<T>>;
};
