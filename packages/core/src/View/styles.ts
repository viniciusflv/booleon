import {
  backgroundCss,
  borderCss,
  containerCss,
  cursorCss,
  flexCss,
  fontCss,
  gradientCss,
  gridCss,
  marginCss,
  outlineCss,
} from '../css';
import ViewProps from './interfaces';
import styled from 'styled-components';

export const ViewStyle = styled.div<ViewProps>`
  ${backgroundCss}
  ${borderCss}
  ${containerCss}
  ${cursorCss}
  ${flexCss}
  ${fontCss}
  ${gradientCss}
  ${gridCss}
  ${marginCss}
  ${outlineCss}
`;
