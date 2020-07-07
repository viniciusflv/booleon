import { Prefixed, handlePrefix } from '../utils/prefix';
import { TextProps } from './interfaces';
import { containerCss, fontCss, marginCss } from '../css';
import styled, { css } from 'styled-components';

const textCss = css<TextProps>`
  ${fontCss}
  ${marginCss}
  ${containerCss}
`;

export const TextStyle = styled.span<Prefixed<TextProps>>`
  ${textCss}
  ${handlePrefix<TextProps>(textCss)}
`;