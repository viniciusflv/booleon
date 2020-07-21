import { css } from 'styled-components';
import MarginProps from './interfaces';
// import { reducer } from '../../utils/reducer';

// ${reducer([
//   [/^(m_)(\d+)/, (value: string) => `margin: ${Number(value) / 10}rem;`],
//   [/^(mt_)(\d+)/, (value: string) => `margin-top: ${Number(value) / 10}rem;`],
//   [/^(mb_)(\d+)/, (value: string) => `margin-bottom: ${Number(value) / 10}rem;`],
//   [/^(ml_)(\d+)/, (value: string) => `margin-left: ${Number(value) / 10}rem;`],
//   [/^(mr_)(\d+)/, (value: string) => `margin-right: ${Number(value) / 10}rem;`],
//   [/^(mx_)(\d+)/, (value: string) => `
//     margin-left: ${Number(value) / 10}rem;
//     margin-right: ${Number(value) / 10}rem;
//   `],
//   [/^(my_)(\d+)/, (value: string) => `
//     margin-top: ${Number(value) / 10}rem;
//     margin-bottom: ${Number(value) / 10}rem;
//   `],
// ])}
export default css<MarginProps>`
  ${({ m_auto }) => m_auto && 'margin: auto;'}
  ${({ mx_auto }) => mx_auto && 'margin-left: auto;margin-right: auto;'}
  ${({ my_auto }) => my_auto && 'margin-top: auto;margin-bottom: auto;'}
  ${({ mt_auto }) => mt_auto && 'margin-top: auto;'}
  ${({ mb_auto }) => mb_auto && 'margin-bottom: auto;'}
  ${({ ml_auto }) => ml_auto && 'margin-left: auto;'}
  ${({ mr_auto }) => mr_auto && 'margin-right: auto;'}
`;
