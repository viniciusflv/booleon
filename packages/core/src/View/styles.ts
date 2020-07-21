import {
  backgroundCss,
  borderCss,
  containerCss,
  cursorCss,
  flexCss,
} from '../css';
import ViewProps from './interfaces';
import styled from 'styled-components';

export const ViewStyle = styled.div<ViewProps>`
  ${backgroundCss}
  ${borderCss}
  ${containerCss}
  ${cursorCss}
  ${flexCss}
`;
