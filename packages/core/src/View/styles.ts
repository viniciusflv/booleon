import { Prefixed, handlePrefix } from '../utils/prefix';
import { ViewProps } from './interfaces';
import {
  backgroundCss,
  borderCss,
  containerCss,
  flexCss,
  gridCss,
  marginCss,
  paddingCss,
  shadowCss,
  sizingCss,
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
`;

export const ViewStyle = styled.div<Prefixed<ViewProps>>`
  ${viewCss}
  ${handlePrefix(viewCss)}
`;
