import { createComponent } from './createComponent';
import { Booleon, Entry, Tuple } from './interfaces';
import { multipleComponent } from './multipleComponent';
import { RegexMap } from './RegexMap';
import { styledComponent } from './styledComponent';

export function booleon<
  E extends readonly (keyof React.ReactDOM | string)[],
  T extends Tuple
>(elements: E, tuples: T) {
  const map = new RegexMap(tuples);
  return {
    multiple: multipleComponent<T>(map),
    styled: (component: any) => styledComponent<T>(component, map),
    ...elements.reduce(
      (acc, element) => ({
        ...acc,
        [element]: createComponent<T, E[number]>(element, map),
      }),
      {} as Booleon<E[number], Entry<T>>,
    ),
  };
}
