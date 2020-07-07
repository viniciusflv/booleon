import { Prefixed, handlePrefix } from '../utils/prefix';
import { ViewProps } from './interfaces';
import {
  backgroundCss,
  borderCss,
  containerCss,
  gridCss,
  marginCss,
  paddingCss,
  shadowCss,
  sizingCss
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
`;

export const ViewStyle = styled.div<Prefixed<ViewProps>>`
  ${viewCss}
  ${handlePrefix<ViewProps>(viewCss)}
`;
