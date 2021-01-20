import { REACT_PROPS } from '../constants';
import { Props } from '../types';

export function filterProps<P extends Props>(
  props: P,
  themes = ['dark'],
): Props {
  return Object.keys(props).reduce(
    (acc, key) => {
      if (REACT_PROPS.includes(key as typeof REACT_PROPS[number])) {
        acc.htmlProps = { ...acc.htmlProps, [key]: props[key] };
      } else {
        const { prefix } = /(?<prefix>.*)__(.*)/g.exec(key)?.groups ?? {};
        if (themes.includes(prefix)) {
          acc[prefix] = {
            ...acc[prefix],
            [key.replace(`${prefix}__`, '')]: props[key],
          };
        } else {
          acc.booleonProps = { ...acc.booleonProps, [key]: props[key] };
        }
      }
      return acc;
    },
    { htmlProps: {}, booleonProps: {} },
  );
}
