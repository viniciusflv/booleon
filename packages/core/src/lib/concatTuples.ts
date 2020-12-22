export const concatTuples = <M extends readonly any[]>(
  ...modules: M
): M[number] => modules.reduce((acc, module) => acc.concat(module));
