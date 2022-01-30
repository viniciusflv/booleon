import { Props } from '../types';

export function composeProps(props: Props) {
  const recusiveReducer = (
    acc = {},
    splitKey: string[],
    value: Props,
  ): Props => {
    const [key, ...rest] = splitKey;
    if (rest.length) {
      return {
        ...acc,
        [key]: { ...acc[key], ...recusiveReducer(acc[key], rest, value) },
      };
    }
    return { ...acc, css: { ...acc['css'], [key]: value } };
  };

  return Object.keys(props).reduce((acc, key) => {
    if (!props[key]) return acc;
    return { ...acc, ...recusiveReducer(acc, key.split('__'), props[key]) };
  }, {});
}
