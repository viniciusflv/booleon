import { Entry, Indexer } from '../lib/interfaces';
import { percentage } from '../lib/utils';

const marginIndexer: Indexer = [
  [() => '^(m_)(\\d+|auto)', (value) => `margin:${percentage(value)}rem;`],
  [() => '^(mt_)(\\d+|auto)', (value) => `margin-top:${percentage(value)}rem;`],
  [
    () => '^(mb_)(\\d+|auto)',
    (value) => `margin-bottom:${percentage(value)}rem;`,
  ],
  [
    () => '^(ml_)(\\d+|auto)',
    (value) => `margin-left:${percentage(value)}rem;`,
  ],
  [
    () => '^(mr_)(\\d+|auto)',
    (value) => `margin-right:${percentage(value)}rem;`,
  ],
  [
    () => '^(mx_)(\\d+|auto)',
    (value) =>
      `margin-left:${percentage(value)}rem;margin-right:${percentage(
        value,
      )}rem;`,
  ],
  [
    () => '^(my_)(\\d+|auto)',
    (value) =>
      `margin-top:${percentage(value)}rem;margin-bottom:${percentage(
        value,
      )}rem;`,
  ],
];

type MarginProps = Entry<
  any,
  | 'm_NUMBER'
  | 'mx_NUMBER'
  | 'my_NUMBER'
  | 'mt_NUMBER'
  | 'mb_NUMBER'
  | 'ml_NUMBER'
  | 'mr_NUMBER'
  | 'm_auto'
  | 'mx_auto'
  | 'my_auto'
  | 'mt_auto'
  | 'mb_auto'
  | 'ml_auto'
  | 'mr_auto'
>;

export { MarginProps, marginIndexer };
