import { css } from 'styled-components';
import { reducerCss } from '../../helpers/reducer';
import PaddingProps from './interfaces';

const paddingCss = css<PaddingProps>`
  ${reducerCss([
    [/^(p_)(\d+)/, (value: string) => `padding: ${Number(value) / 10}rem;`],
    [/^(pt_)(\d+)/, (value: string) => `padding-top: ${Number(value) / 10}rem;`],
    [/^(pb_)(\d+)/, (value: string) => `padding-bottom: ${Number(value) / 10}rem;`],
    [/^(pl_)(\d+)/, (value: string) => `padding-left: ${Number(value) / 10}rem;`],
    [/^(pr_)(\d+)/, (value: string) => `padding-right: ${Number(value) / 10}rem;`],
    [/^(px_)(\d+)/, (value: string) => `
      padding-left: ${Number(value) / 10}rem;
      padding-right: ${Number(value) / 10}rem;
    `],
    [/^(py_)(\d+)/, (value: string) => `
      padding-top: ${Number(value) / 10}rem;
      padding-bottom: ${Number(value) / 10}rem;
    `],
  ])}
`;

export default paddingCss;
