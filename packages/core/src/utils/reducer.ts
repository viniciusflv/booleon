export function reducer(indexer: Array<[RegExp, (args: string) => string]>) {
  return (props: any) =>
    Object.keys(props).reduce((acc, key) => {
      indexer.forEach(([regex, cb]) => {
        const match = key.match(regex);
        if (match) {
          const groups = match[0].replace(match[1], '').replace(/_/g, ' ');
          // if (key.startsWith('fb_')) console.log(key, groups);
          acc += cb(groups);
        }
      });
      return acc;
    }, '');
}
