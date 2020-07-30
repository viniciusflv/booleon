import { MemoExoticComponent } from 'react';
import { medias, pseudo } from './constants';

export type FlattenIntersection<T> = T extends { [K in keyof T]: any }
  ? { [K in keyof T]: T[K] }
  : never;

export type KeyInType<T extends string | number | symbol> = {
  [key in T]?: boolean;
};

export type KeyInString = {
  [key in string]?: boolean;
};

export type KeyinTypeOrString<T extends string | number | symbol> =
  | KeyInType<T>
  | KeyInString;

export type Indexer<T> = Array<[RegExp | keyof T | null, (args: string) => string]>

export type Medias = typeof medias[number];
export type Pseudo = typeof pseudo[number];

export type ReducedProps = { [key in Medias | Pseudo]?: any } & { style: any }

export type Booleon<T extends keyof React.ReactDOM> = {
  [key in T]: MemoExoticComponent<any>;
};

export type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never