import { containerCss, fontCss, marginCss } from '../css';
import { handlePrefix } from '../helpers/prefix';
import TextProps from './interfaces';
import styled, { StyledComponentInnerOtherProps, css } from 'styled-components';

const textCss = css`
  ${containerCss}
  ${fontCss}
  ${marginCss}
`;

const TextStyle = styled.div<TextProps>`
  ${textCss}
  ${handlePrefix(textCss)}
`;

type TextType = Partial<StyledComponentInnerOtherProps<typeof TextStyle>>;

export { TextType, TextProps };
export default TextStyle;
