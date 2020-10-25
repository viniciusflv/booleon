import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  FC,
} from 'react';

import { BooleonModule, BooleonProps } from '../../../core/src';
import { useCssCompiler, useStyleAppender } from '../../../core/src/hooks';

const KeyframeContext = createContext<any>({});

export function useKeyframe() {
  return useContext(KeyframeContext);
}

export const KeyframeProvider: FC<any> = ({ children, ...props }) => {
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
      useStyleAppender(name, keyframe);
    }
  }, [selectors]);

  return (
    <KeyframeContext.Provider value={{ setKeyframeState }}>
      {children}
    </KeyframeContext.Provider>
  );
};

export const KeyframeState = <M extends BooleonModule>(module: M) => (
  props: BooleonProps<M>,
) => {
  const { setKeyframeState } = useKeyframe();

  useEffect(() => {
    const css = Object.keys(props).reduce(
      (acc, key) => (acc += useCssCompiler(key, props[key], module)),
      '',
    );
    setKeyframeState(css);
  }, []);

  return <></>;
};
