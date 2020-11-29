import { ConcatTuples } from '../types';

export const concatTuples = <M extends readonly any[]>(
  ...modules: M
): ConcatTuples<M[number]> => {
  return modules.reduce((acc, module) => acc.concat(module));
};
