import PaddingProps from './interfaces';
import { indexerCss } from '../../lib/indexer';

const paddingCss = indexerCss<PaddingProps>([
  [/^(p_)(\d+)/, (value) => `padding: ${Number(value) / 10}rem;`],
  [/^(pt_)(\d+)/, (value) => `padding-top: ${Number(value) / 10}rem;`],
  [/^(pb_)(\d+)/, (value) => `padding-bottom: ${Number(value) / 10}rem;`],
  [/^(pl_)(\d+)/, (value) => `padding-left: ${Number(value) / 10}rem;`],
  [/^(pr_)(\d+)/, (value) => `padding-right: ${Number(value) / 10}rem;`],
  [/^(px_)(\d+)/, (value) => `padding-left: ${Number(value) / 10}rem; padding-right: ${Number(value) / 10}rem;`],
  [/^(py_)(\d+)/, (value) => `padding-top: ${Number(value) / 10}rem; padding-bottom: ${Number(value) / 10}rem;`],
]);

export default paddingCss;
