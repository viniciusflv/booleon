import { BooleonModule, PrefixHandler, Props } from '../types';
import { cleanTransformFilter } from './cleanTransformFilter';
import { cssCompiler } from './cssCompiler';
import { defaultPrefixes } from './defaultPrefixes';

export function styleCompiler<
  P extends Props<string, PrefixHandler>,
  M extends BooleonModule
>(
  className: string,
  composedProps: Props,
  booleonModules: M,
  customPrefixes?: P,
) {
  const prefixes = {
    ...customPrefixes,
    ...defaultPrefixes,
  };
  const recursiveCompiler = (props: Props): string => {
    return Object.keys(props).reduce((acc, key) => {
      const value = props[key];
      if (typeof value === 'object') {
        const handler: PrefixHandler =
          prefixes[key] ??
          prefixes[`${Object.keys(prefixes).find((k) => key.startsWith(k))}`];
        return (acc += handler({
          key,
          value,
          prefixes,
          className,
          recursiveCompiler,
        }));
      }
      return (acc += cssCompiler(key, value, booleonModules));
    }, '');
  };

  return cleanTransformFilter(recursiveCompiler(composedProps));
}
