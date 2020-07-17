import { Prefixed, handlePrefix } from '../utils/prefix';
import { ViewProps } from './interfaces';
import {
  backgroundCss,
  borderCss,
  containerCss,
  cursorCss,
  flexCss,
  gradientCss,
  gridCss,
  marginCss,
  outlineCss,
  paddingCss,
  shadowCss,
  sizingCss,
  transformCss,
  transitionCss
} from '../css';
import styled, { css } from 'styled-components';

const viewCss = css<ViewProps>`
  ${backgroundCss}
  ${borderCss}
  ${sizingCss}
  ${marginCss}
  ${paddingCss}
  ${shadowCss}
  ${containerCss}
  ${gridCss}
  ${flexCss}
  ${transitionCss}
  ${transformCss}
  ${cursorCss}
  ${outlineCss}
  ${gradientCss}
`;

export const ViewStyle = styled.div<Prefixed<ViewProps>>`
  ${viewCss}
  ${handlePrefix(viewCss)}
`;
