import { Prefixed, handlePrefix } from '../../utils/prefix';
import { TextProps } from './interfaces';
import { fontCss, marginCss } from '../../css';
import styled, { css } from 'styled-components';

const textCss = css<TextProps>`
  ${fontCss}
  ${marginCss}
`;

export const TextStyle = styled.span<Prefixed<TextProps>>`
  ${textCss}
  ${handlePrefix<TextProps>(textCss)}
`;