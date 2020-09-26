import { createComponent } from './createComponent';
import { Booleon, Entry, Styled } from './interfaces';
import { RegexMap } from './RegexMap';
import { styledComponent } from './styledComponent';

export function booleon<
  E extends readonly (keyof React.ReactDOM)[],
  T extends readonly (readonly [string | readonly string[], Function])[]
>(elements: E, tuples: T) {
  const map = new RegexMap(tuples);
  return {
    styled: (component: any): Styled<Entry<T>> =>
      styledComponent<T>(component, map),
    ...elements.reduce(
      (acc, element) => ({
        ...acc,
        [element]: createComponent<T, E[number]>(element, map),
      }),
      {} as Booleon<E[number], Entry<T>>,
    ),
  };
}
