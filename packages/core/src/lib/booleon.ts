import { createComponent } from './createComponent';
import { Booleon, Entry } from './interfaces';
import { RegexMap } from './RegexMap';

export function booleon<
  E extends readonly (keyof React.ReactDOM)[],
  T extends readonly (readonly [string | readonly string[], Function])[]
>(elements: E, tuples: T) {
  const map = new RegexMap(tuples);
  return elements.reduce(
    (acc, element) => ({
      ...acc,
      [element]: createComponent<T, E[number]>(element, map),
    }),
    {} as Booleon<E[number], Entry<T>>,
  );
}
