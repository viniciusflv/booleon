import { Entry, Indexer } from '../lib/interfaces';
import { hexColor } from '../lib/regex';
import { percentage } from '../lib/utils';

const outlineTuple = [['ol_none', () => 'outline:none;']] as const;

const outlineIndexer: Indexer = [
  [() => `^(olc_)(${hexColor})`, (value) => `outline-color:#${value};`],
  [() => '^(olw_)(\\d+)', (value) => `outline-width:${percentage(value)}rem;`],
  [() => '^(ols_)([a-z]+)', (value) => `outline-style:${value};`],
];

type OutlineProps = Entry<
  typeof outlineTuple,
  'olc_HEX' | 'olw_WIDTH' | 'ols_STYLE'
>;

export { outlineTuple, outlineIndexer, OutlineProps };
