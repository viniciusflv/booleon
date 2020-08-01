import React, { memo } from "react";
import { classReducer } from "./reducers";
import { Indexer, Booleon } from "./interfaces";

export function booleon<T extends readonly any[]>(
  elements: T,
  ...indexers: Indexer<any>[]
): Booleon<T[number]> {
  return elements.reduce(
    (acc: Booleon<T[number]>, element) => ({
      ...acc,
      [element]: memo(({ className = "", ...props }: any) => {
        const [id, classes] = classReducer(props, ...indexers);

        let style = document.getElementById(id);
        if (!style) {
          style = document.createElement("style");
          style.setAttribute("id", id);
          document.head.appendChild(style);
        }
        if (classes !== style.innerHTML) style.innerHTML = classes;

        return React.createElement(element, {
          ...props,
          className: id + className,
        });
      }),
    }),
    {} as Booleon<T[number]>
  );
}
