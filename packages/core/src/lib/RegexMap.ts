import {
  MediaQueries,
  PseudoElements,
  mediaQueries,
  pseudoElements,
} from './constants';
import { Tuple } from './interfaces';
import { prefix } from './regex';
export class RegexMap<T extends Tuple> {
  private entry: T;
  private prefixRegex: RegExp;

  constructor(entry: T) {
    this.entry = entry;
    this.prefixRegex = new RegExp(prefix);
  }

  private pseudoMap(keyPrefix: PseudoElements) {
    return new Map(pseudoElements).get(keyPrefix);
  }

  private mediaMap(keyPrefix: MediaQueries) {
    return `@media${new Map(mediaQueries).get(keyPrefix)}`;
  }

  private categorize<P>(id: string, props: P) {
    return Object.keys(props).reduce((acc, key) => {
      const [, , prefixes, newKey] = key?.match(this.prefixRegex) || [];
      if (prefixes && newKey) {
        const pfx = prefixes
          .split('__')
          .map(
            (pfx) =>
              this.pseudoMap(pfx as PseudoElements) ||
              this.mediaMap(pfx as MediaQueries),
          )
          .join('');

        const prefixKey = pfx.match(/@media/g) ? pfx : `${id}${pfx}`;
        return {
          ...acc,
          [prefixKey]: { ...acc[prefixKey], [newKey]: props[key] },
        };
      } else {
        return { ...acc, [id]: { ...acc[id], [key]: props[key] } };
      }
    }, {});
  }

  private fastHash(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash;
  }

  private regexp(key: string, idx: string[], cb: T[number][1]) {
    const rgx = new RegExp(idx.join(''));
    const match = key.match(rgx);
    return match ? cb(match[1].replace(/_/g, ' ')) : '';
  }

  private str(
    key: string,
    value: string | boolean,
    idx: string,
    cb: T[number][1],
  ) {
    return key === idx ? cb(value) : '';
  }

  private compileCss(key: string, value: string | boolean) {
    return this.entry.reduce((acc, [idx, cb]) => {
      acc +=
        idx instanceof Array
          ? this.regexp(key, idx, cb)
          : this.str(key, value, idx as string, cb);
      return acc;
    }, '');
  }

  private compileClasses(id: string, key: string, props: any) {
    return `.${id}{${Object.keys(props[key])
      .map((k) => this.compileCss(k, props[key][k]))
      .join('')}}`;
  }

  public compile<P>(props: P) {
    const id = `bl-${this.fastHash(Object.keys(props).join(''))}`;
    const categorizedProps = this.categorize<P>(id, props);
    const classes = Object.keys(categorizedProps).reduce((acc, key) => {
      return (acc += key.match(/@media/g)
        ? `${key}{${this.compileClasses(id, key, categorizedProps)}}`
        : this.compileClasses(key, key, categorizedProps));
    }, '');
    return [id, classes];
  }

  private belongs(key: string) {
    return this.entry
      .map(([idx]) =>
        idx instanceof Array
          ? Boolean(key.match(idx.join('')))
          : key === idx || Boolean((key as string).match(this.prefixRegex)),
      )
      .includes(true);
  }

  public filter<P>(props: any) {
    return Object.keys(props).reduce(
      ([html, belong], key) => {
        this.belongs(key)
          ? (belong = { ...belong, [key]: props[key] })
          : (html = { ...html, [key]: props[key] });
        return [html, belong];
      },
      [{}, {} as P],
    );
  }
}
