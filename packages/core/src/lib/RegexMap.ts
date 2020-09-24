import { Tuple } from './interfaces';
export class RegexMap<T extends Tuple> {
  private entry: T;

  constructor(entry: T) {
    this.entry = entry;
  }

  private regexp(key: string, idx: string[], cb: T[number][1]) {
    const rgx = new RegExp(idx.join(''));
    const match = key.match(rgx);
    return match ? cb(match[1]) : '';
  }

  private str(
    key: string,
    value: string | boolean,
    idx: string,
    cb: T[number][1],
  ) {
    return key === idx ? cb(value) : '';
  }

  public get(key: string, value: string | boolean) {
    return this.entry.reduce((acc, [idx, cb]) => {
      acc +=
        idx instanceof Array
          ? this.regexp(key, idx, cb)
          : this.str(key, value, idx as string, cb);
      return acc;
    }, '');
  }
}
