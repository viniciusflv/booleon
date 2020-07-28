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

export type Indexer<T> = Array<[RegExp | keyof T, (args: string) => string]>

export type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never