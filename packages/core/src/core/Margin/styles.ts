import { MarginProps } from './interfaces';
import styled from 'styled-components';

export const MarginStyle = styled.div<MarginProps>`
  margin: 0;
  ${({ m_0 }) => m_0 && 'margin: 0;'}
  ${({ m_auto }) => m_auto && 'margin: auto;'}
  ${({ m_xs }) => m_xs && 'margin: .25rem;'}
  ${({ m_sm }) => m_sm && 'margin: .5rem;'}
  ${({ m_md }) => m_md && 'margin: 1rem;'}
  ${({ m_lg }) => m_lg && 'margin: 2rem;'}
  ${({ m_xl }) => m_xl && 'margin: 4rem;'}
  ${({ mx_0 }) => mx_0 && 'margin-left: 0;margin-right: 0;'}
  ${({ mx_auto }) => mx_auto && 'margin-left: auto;margin-right: auto;'}
  ${({ mx_xs }) => mx_xs && 'margin-left: .25rem;margin-right: .25rem;'}
  ${({ mx_sm }) => mx_sm && 'margin-left: .5rem;margin-right: .5rem;'}
  ${({ mx_md }) => mx_md && 'margin-left: 1rem;margin-right: 1rem;'}
  ${({ mx_lg }) => mx_lg && 'margin-left: 2rem;margin-right: 2rem;'}
  ${({ mx_xl }) => mx_xl && 'margin-left: 4rem;margin-right: 4rem;'}
  ${({ my_0 }) => my_0 && 'margin-top: 0;margin-bottom: 0;'}
  ${({ my_auto }) => my_auto && 'margin-top: auto;margin-bottom: auto;'}
  ${({ my_xs }) => my_xs && 'margin-top: .25rem;margin-bottom: .25rem;'}
  ${({ my_sm }) => my_sm && 'margin-top: .5rem;margin-bottom: .5rem;'}
  ${({ my_md }) => my_md && 'margin-top: 1rem;margin-bottom: 1rem;'}
  ${({ my_lg }) => my_lg && 'margin-top: 2rem;margin-bottom: 2rem;'}
  ${({ my_xl }) => my_xl && 'margin-top: 4rem;margin-bottom: 4rem;'}
  ${({ mt_0 }) => mt_0 && 'margin-top: 0;'}
  ${({ mt_auto }) => mt_auto && 'margin-top: auto;'}
  ${({ mt_xs }) => mt_xs && 'margin-top: .25rem;'}
  ${({ mt_sm }) => mt_sm && 'margin-top: .5rem;'}
  ${({ mt_md }) => mt_md && 'margin-top: 1rem;'}
  ${({ mt_lg }) => mt_lg && 'margin-top: 2rem;'}
  ${({ mt_xl }) => mt_xl && 'margin-top: 4rem;'}
  ${({ mb_0 }) => mb_0 && 'margin-bottom: 0;'}
  ${({ mb_auto }) => mb_auto && 'margin-bottom: auto;'}
  ${({ mb_xs }) => mb_xs && 'margin-bottom: .25rem;'}
  ${({ mb_sm }) => mb_sm && 'margin-bottom: .5rem;'}
  ${({ mb_md }) => mb_md && 'margin-bottom: 1rem;'}
  ${({ mb_lg }) => mb_lg && 'margin-bottom: 2rem;'}
  ${({ mb_xl }) => mb_xl && 'margin-bottom: 4rem;'}
  ${({ ml_0 }) => ml_0 && 'margin-left: 0;'}
  ${({ ml_auto }) => ml_auto && 'margin-left: auto;'}
  ${({ ml_xs }) => ml_xs && 'margin-left: .25rem;'}
  ${({ ml_sm }) => ml_sm && 'margin-left: .5rem;'}
  ${({ ml_md }) => ml_md && 'margin-left: 1rem;'}
  ${({ ml_lg }) => ml_lg && 'margin-left: 2rem;'}
  ${({ ml_xl }) => ml_xl && 'margin-left: 4rem;'}
  ${({ mr_0 }) => mr_0 && 'margin-right: 0;'}
  ${({ mr_auto }) => mr_auto && 'margin-right: auto;'}
  ${({ mr_xs }) => mr_xs && 'margin-right: .25rem;'}
  ${({ mr_sm }) => mr_sm && 'margin-right: .5rem;'}
  ${({ mr_md }) => mr_md && 'margin-right: 1rem;'}
  ${({ mr_lg }) => mr_lg && 'margin-right: 2rem;'}
  ${({ mr_xl }) => mr_xl && 'margin-right: 4rem;'}
`;
