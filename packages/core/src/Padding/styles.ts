import { PaddingProps } from './interfaces';
import styled from 'styled-components';

export const PaddingStyle = styled.div<PaddingProps>`
  padding: 0;
  ${({ p_0 }) => p_0 && 'padding: 0;'}
  ${({ p_auto }) => p_auto && 'padding: auto;'}
  ${({ p_xs }) => p_xs && 'padding: .25rem;'}
  ${({ p_sm }) => p_sm && 'padding: .5rem;'}
  ${({ p_md }) => p_md && 'padding: 1rem;'}
  ${({ p_lg }) => p_lg && 'padding: 2rem;'}
  ${({ p_xl }) => p_xl && 'padding: 4rem;'}
  ${({ px_0 }) => px_0 && 'padding-left: 0;padding-right: 0;'}
  ${({ px_auto }) => px_auto && 'padding-left: auto;padding-right: auto;'}
  ${({ px_xs }) => px_xs && 'padding-left: .25rem;padding-right: .25rem;'}
  ${({ px_sm }) => px_sm && 'padding-left: .5rem;padding-right: .5rem;'}
  ${({ px_md }) => px_md && 'padding-left: 1rem;padding-right: 1rem;'}
  ${({ px_lg }) => px_lg && 'padding-left: 2rem;padding-right: 2rem;'}
  ${({ px_xl }) => px_xl && 'padding-left: 4rem;padding-right: 4rem;'}
  ${({ py_0 }) => py_0 && 'padding-top: 0;padding-bottom: 0;'}
  ${({ py_auto }) => py_auto && 'padding-top: auto;padding-bottom: auto;'}
  ${({ py_xs }) => py_xs && 'padding-top: .25rem;padding-bottom: .25rem;'}
  ${({ py_sm }) => py_sm && 'padding-top: .5rem;padding-bottom: .5rem;'}
  ${({ py_md }) => py_md && 'padding-top: 1rem;padding-bottom: 1rem;'}
  ${({ py_lg }) => py_lg && 'padding-top: 2rem;padding-bottom: 2rem;'}
  ${({ py_xl }) => py_xl && 'padding-top: 4rem;padding-bottom: 4rem;'}
  ${({ pt_0 }) => pt_0 && 'padding-top: 0;'}
  ${({ pt_auto }) => pt_auto && 'padding-top: auto;'}
  ${({ pt_xs }) => pt_xs && 'padding-top: .25rem;'}
  ${({ pt_sm }) => pt_sm && 'padding-top: .5rem;'}
  ${({ pt_md }) => pt_md && 'padding-top: 1rem;'}
  ${({ pt_lg }) => pt_lg && 'padding-top: 2rem;'}
  ${({ pt_xl }) => pt_xl && 'padding-top: 4rem;'}
  ${({ pb_0 }) => pb_0 && 'padding-bottom: 0;'}
  ${({ pb_auto }) => pb_auto && 'padding-bottom: auto;'}
  ${({ pb_xs }) => pb_xs && 'padding-bottom: .25rem;'}
  ${({ pb_sm }) => pb_sm && 'padding-bottom: .5rem;'}
  ${({ pb_md }) => pb_md && 'padding-bottom: 1rem;'}
  ${({ pb_lg }) => pb_lg && 'padding-bottom: 2rem;'}
  ${({ pb_xl }) => pb_xl && 'padding-bottom: 4rem;'}
  ${({ pl_0 }) => pl_0 && 'padding-left: 0;'}
  ${({ pl_auto }) => pl_auto && 'padding-left: auto;'}
  ${({ pl_xs }) => pl_xs && 'padding-left: .25rem;'}
  ${({ pl_sm }) => pl_sm && 'padding-left: .5rem;'}
  ${({ pl_md }) => pl_md && 'padding-left: 1rem;'}
  ${({ pl_lg }) => pl_lg && 'padding-left: 2rem;'}
  ${({ pl_xl }) => pl_xl && 'padding-left: 4rem;'}
  ${({ pr_0 }) => pr_0 && 'padding-right: 0;'}
  ${({ pr_auto }) => pr_auto && 'padding-right: auto;'}
  ${({ pr_xs }) => pr_xs && 'padding-right: .25rem;'}
  ${({ pr_sm }) => pr_sm && 'padding-right: .5rem;'}
  ${({ pr_md }) => pr_md && 'padding-right: 1rem;'}
  ${({ pr_lg }) => pr_lg && 'padding-right: 2rem;'}
  ${({ pr_xl }) => pr_xl && 'padding-right: 4rem;'}
`;
