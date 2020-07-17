export type FlattenIntersection<T> = T extends { [K in keyof T]: any }
  ? { [K in keyof T]: T[K] }
  : never;
