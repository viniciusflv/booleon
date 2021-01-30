import { BooleonProps } from '../types';

export function categorizeProps<P extends BooleonProps<any>>(props: P): P[] {
  return Object.keys(props).reduce(
    ([booleonProps, darkProps], key) => {
      const isDark = key.startsWith('dark__');
      if (isDark) {
        darkProps = {
          ...darkProps,
          [key.replace('dark__', '')]: props[key],
        };
      } else {
        booleonProps = { ...booleonProps, [key]: props[key] };
      }
      return [booleonProps, darkProps];
    },
    [{}, {}] as [P, P],
  );
}
