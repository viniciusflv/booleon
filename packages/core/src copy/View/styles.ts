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
  paddingCss,
  shadowCss,
  sizingCss,
  transformCss,
  transitionCss,
} from '../css';
import { handlePrefix } from '../helpers/prefix';
import ViewProps from './interfaces';
import styled, { StyledComponentInnerOtherProps, css } from 'styled-components';

const viewCss = css`
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
  ${paddingCss}
  ${shadowCss}
  ${sizingCss}
  ${transformCss}
  ${transitionCss}
`;

const ViewStyle = styled.div<ViewProps>`
  ${viewCss}
  ${handlePrefix(viewCss)}
`;

type ViewType = Partial<StyledComponentInnerOtherProps<typeof ViewStyle>>;

export { ViewType, ViewProps };
export default ViewStyle;
