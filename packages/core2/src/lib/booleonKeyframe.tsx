import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ReactNodeArray } from 'react';

import { Tuple, Entry, BooleonProps } from './interfaces';
import { RegexMap } from './RegexMap';

function state<T extends Tuple>(
  ctx: any,
  map: RegexMap<T>,
): BooleonProps<Entry<T>> {
  function Keyframe(props: any) {
    const { setKeyframeState } = useContext(ctx);
    useEffect(() => {
      const css = Object.keys(props)?.reduce(
        (acc, key) => (acc += map.compileCss(key, props[key])),
        '',
      );
      setKeyframeState(css);
    }, []);

    return <></>;
  }

  Keyframe.displayName = 'Keyframe.state';

  return Keyframe as BooleonProps<Entry<T>>;
}

const provider = (ctx: any) => {
  function Keyframe({
    children,
    ...props
  }: {
    [key: string]: boolean | ReactNode | ReactNodeArray;
  }) {
    const [selectors, setSelectors] = useState<string[]>([]);
    const setKeyframeState = useCallback((css: string) => {
      setSelectors((self) => [...self, css]);
    }, []);

    useEffect(() => {
      const selector = 100 / (selectors?.length - 1);
      const animation = selectors?.reduce(
        (acc, s, i) =>
          `${acc}${selectors?.length > 1 ? i * selector : 100}%{${s}}`,
        '',
      );
      if (animation?.length) {
        const name = Object.keys(props)[0];
        const keyframe = `@keyframes ${name} {${animation}}`;
        let style = document.getElementById(name);

        if (!style) {
          style = document.createElement('style');
          style.setAttribute('id', name);
          document.head.appendChild(style);
        }

        if (keyframe !== style.innerHTML) style.innerHTML = keyframe;
      }
    }, [selectors]);

    return <ctx.Provider value={{ setKeyframeState }}>{children}</ctx.Provider>;
  }

  Keyframe.displayName = 'Keyframe.provider';

  return Keyframe;
};

export function booleonKeyframe<T extends Tuple>(tuples: T) {
  const map = new RegexMap(tuples);
  const ctx = createContext({
    setKeyframeState: () => {
      return;
    },
  });
  return {
    provider: provider(ctx),
    state: state(ctx, map),
  };
}
