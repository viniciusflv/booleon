type TupleKey<T> = T extends readonly (readonly [infer K, Function])[]
  ? K extends string
    ? K
    : never
  : never;

type Tuple = readonly (readonly [string, Function])[];

export type Entry<T extends Tuple, D extends string> = {
  [key in D]?: boolean | string;
} &
  { [key in TupleKey<T>]?: boolean | string };

export type Indexer = readonly (readonly [
  () => string,
  (value: string | boolean) => string,
])[];
