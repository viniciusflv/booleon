import { Entry, Indexer } from '../lib/interfaces';
import { percentage } from '../lib/utils';

const paddingIndexer: Indexer = [
  [() => '^(p_)(\\d+)', (value) => `padding:${percentage(value)}rem;`],
  [() => '^(pt_)(\\d+)', (value) => `padding-top:${percentage(value)}rem;`],
  [() => '^(pb_)(\\d+)', (value) => `padding-bottom:${percentage(value)}rem;`],
  [() => '^(pl_)(\\d+)', (value) => `padding-left:${percentage(value)}rem;`],
  [() => '^(pr_)(\\d+)', (value) => `padding-right:${percentage(value)}rem;`],
  [
    () => '^(px_)(\\d+)',
    (value) =>
      `padding-left:${percentage(value)}rem;padding-right:${percentage(
        value,
      )}rem;`,
  ],
  [
    () => '^(py_)(\\d+)',
    (value) =>
      `padding-top:${percentage(value)}rem;padding-bottom:${percentage(
        value,
      )}rem;`,
  ],
];

type PaddingProps = Entry<
  any,
  | 'p_NUMBER'
  | 'px_NUMBER'
  | 'py_NUMBER'
  | 'pt_NUMBER'
  | 'pb_NUMBER'
  | 'pl_NUMBER'
  | 'pr_NUMBER'
>;

export { PaddingProps, paddingIndexer };
