import { Indexer } from './interfaces';
export class RegexMap {
  private entry: Indexer;

  constructor(entry: Indexer) {
    this.entry = entry;
  }

  get(str: string) {
    return this.entry.reduce((acc, [index, cb]) => {
      const rgx = new RegExp(index());
      const match = str.match(rgx);
      if (match) acc += cb(match[2]);
      return acc;
    }, '');
  }
}
