import { PaddingProps } from './interfaces';
import { css } from 'styled-components';
import { reducer } from '../../utils/reducer';

export const paddingCss = css<PaddingProps>`
  ${reducer([
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
  ${({ p_auto }) => p_auto && 'padding: auto;'}
  ${({ px_auto }) => px_auto && 'padding-left: auto;padding-right: auto;'}
  ${({ py_auto }) => py_auto && 'padding-top: auto;padding-bottom: auto;'}
  ${({ pt_auto }) => pt_auto && 'padding-top: auto;'}
  ${({ pb_auto }) => pb_auto && 'padding-bottom: auto;'}
  ${({ pl_auto }) => pl_auto && 'padding-left: auto;'}
  ${({ pr_auto }) => pr_auto && 'padding-right: auto;'}
`;
