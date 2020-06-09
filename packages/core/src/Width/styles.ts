import { WidthProps } from './interfaces';
import styled from 'styled-components';

export const WidthStyle = styled.div<WidthProps>`
  ${({ w_screen_100 }) => w_screen_100 && 'width: 100vw;'}
  ${({ w_screen_90 }) => w_screen_90 && 'width: 90vw;'}
  ${({ w_screen_80 }) => w_screen_80 && 'width: 80vw;'}
  ${({ w_screen_70 }) => w_screen_70 && 'width: 70vw;'}
  ${({ w_screen_60 }) => w_screen_60 && 'width: 60vw;'}
  ${({ w_screen_50 }) => w_screen_50 && 'width: 50vw;'}
  ${({ w_screen_40 }) => w_screen_40 && 'width: 40vw;'}
  ${({ w_screen_30 }) => w_screen_30 && 'width: 30vw;'}
  ${({ w_screen_20 }) => w_screen_20 && 'width: 20vw;'}
  ${({ w_screen_10 }) => w_screen_10 && 'width: 10vw;'}
  ${({ w_0 }) => w_0 && 'width: 0;'}
  ${({ w_1 }) => w_1 && 'width: 1rem;'}
  ${({ w_2 }) => w_2 && 'width: 2rem;'}
  ${({ w_4 }) => w_4 && 'width: 4rem;'}
  ${({ w_8 }) => w_8 && 'width: 8rem;'}
  ${({ w_16 }) => w_16 && 'width: 16rem;'}
  ${({ w_32 }) => w_32 && 'width: 32rem;'}
  ${({ w_64 }) => w_64 && 'width: 64rem;'}
  ${({ w_full }) => w_full && 'width: 100%;'}
  ${({ w_auto }) => w_auto && 'width: auto;'}
  ${({ w_max_screen_100 }) => w_max_screen_100 && 'max-width: 100vw;'}
  ${({ w_max_screen_90 }) => w_max_screen_90 && 'max-width: 90vw;'}
  ${({ w_max_screen_80 }) => w_max_screen_80 && 'max-width: 80vw;'}
  ${({ w_max_screen_70 }) => w_max_screen_70 && 'max-width: 70vw;'}
  ${({ w_max_screen_60 }) => w_max_screen_60 && 'max-width: 60vw;'}
  ${({ w_max_screen_50 }) => w_max_screen_50 && 'max-width: 50vw;'}
  ${({ w_max_screen_40 }) => w_max_screen_40 && 'max-width: 40vw;'}
  ${({ w_max_screen_30 }) => w_max_screen_30 && 'max-width: 30vw;'}
  ${({ w_max_screen_20 }) => w_max_screen_20 && 'max-width: 20vw;'}
  ${({ w_max_screen_10 }) => w_max_screen_10 && 'max-width: 10vw;'}
  ${({ w_max_0 }) => w_max_0 && 'max-width: 0;'}
  ${({ w_max_1 }) => w_max_1 && 'max-width: 1rem;'}
  ${({ w_max_2 }) => w_max_2 && 'max-width: 2rem;'}
  ${({ w_max_4 }) => w_max_4 && 'max-width: 4rem;'}
  ${({ w_max_8 }) => w_max_8 && 'max-width: 8rem;'}
  ${({ w_max_16 }) => w_max_16 && 'max-width: 16rem;'}
  ${({ w_max_32 }) => w_max_32 && 'max-width: 32rem;'}
  ${({ w_max_64 }) => w_max_64 && 'max-width: 64rem;'}
  ${({ w_max_full }) => w_max_full && 'max-width: 100%;'}
  ${({ w_max_auto }) => w_max_auto && 'max-width: auto;'}
  ${({ w_min_screen_100 }) => w_min_screen_100 && 'min-width: 100vw;'}
  ${({ w_min_screen_90 }) => w_min_screen_90 && 'min-width: 90vw;'}
  ${({ w_min_screen_80 }) => w_min_screen_80 && 'min-width: 80vw;'}
  ${({ w_min_screen_70 }) => w_min_screen_70 && 'min-width: 70vw;'}
  ${({ w_min_screen_60 }) => w_min_screen_60 && 'min-width: 60vw;'}
  ${({ w_min_screen_50 }) => w_min_screen_50 && 'min-width: 50vw;'}
  ${({ w_min_screen_40 }) => w_min_screen_40 && 'min-width: 40vw;'}
  ${({ w_min_screen_30 }) => w_min_screen_30 && 'min-width: 30vw;'}
  ${({ w_min_screen_20 }) => w_min_screen_20 && 'min-width: 20vw;'}
  ${({ w_min_screen_10 }) => w_min_screen_10 && 'min-width: 10vw;'}
  ${({ w_min_0 }) => w_min_0 && 'min-width: 0;'}
  ${({ w_min_1 }) => w_min_1 && 'min-width: 1rem;'}
  ${({ w_min_2 }) => w_min_2 && 'min-width: 2rem;'}
  ${({ w_min_4 }) => w_min_4 && 'min-width: 4rem;'}
  ${({ w_min_8 }) => w_min_8 && 'min-width: 8rem;'}
  ${({ w_min_16 }) => w_min_16 && 'min-width: 16rem;'}
  ${({ w_min_32 }) => w_min_32 && 'min-width: 32rem;'}
  ${({ w_min_64 }) => w_min_64 && 'min-width: 64rem;'}
  ${({ w_min_full }) => w_min_full && 'min-width: 100%;'}
  ${({ w_min_auto }) => w_min_auto && 'min-width: auto;'}
`;
